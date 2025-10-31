# Aptura Waitlist Google Apps Script Setup Guide

This guide will help you connect your Aptura waitlist form to your Google Sheet using Google Apps Script.

## Overview

The setup involves:
1. Deploying a Google Apps Script as a Web App
2. Updating your website with the Web App URL
3. Testing the integration

---

## Step 1: Deploy the Google Apps Script

### 1.1 Open Your Google Sheet
Navigate to: https://docs.google.com/spreadsheets/d/1KucxWlF9PGIBNIx-RiIHVfQzmkGNsQxg5S_HrJBspBQ/edit

### 1.2 Open Apps Script Editor
- Click **Extensions** in the menu bar
- Select **Apps Script**

### 1.3 Add the Script
- Delete any existing code in the editor
- Copy the entire contents of `waitlist-handler.gs` from this directory
- Paste it into the Apps Script editor
- Click the **💾 Save** icon (or press Ctrl/Cmd + S)
- Name your project: "Aptura Waitlist Handler" (optional but recommended)

### 1.4 Optional: Initialize Headers
If your spreadsheet doesn't have headers yet:
1. Select `initializeSheet` from the function dropdown
2. Click the **Run** button (▶️)
3. Authorize the script when prompted
4. Check that headers appear in row 1 of your sheet

### 1.5 Optional: Test the Script
Before deploying, test that it works:
1. Select `testSubmission` from the function dropdown
2. Click the **Run** button (▶️)
3. Check the **Execution log** at the bottom for success message
4. Verify a test row was added to your sheet

### 1.6 Deploy as Web App
1. Click **Deploy** button (top right)
2. Select **New deployment**
3. Click the ⚙️ gear icon next to "Select type"
4. Choose **Web app**
5. Configure the deployment:
   - **Description**: `Aptura Waitlist API v1.0`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone`
6. Click **Deploy**
7. Review and authorize permissions when prompted
8. **IMPORTANT**: Copy the **Web App URL** 
   - It will look like: `https://script.google.com/macros/s/AKfycby...xxxxxxxxx.../exec`
   - Keep this URL safe - you'll need it in the next step

---

## Step 2: Update Your Website

### 2.1 Update Contact.tsx
1. Open `pages/Contact.tsx` in your code editor
2. Find this line near the top:
   ```typescript
   const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```
3. Replace `YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with your actual Web App URL from Step 1.6
4. Save the file

Example:
```typescript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby...xxxxxxxxx.../exec';
```

### 2.2 Rebuild Your Site
```bash
npm run build
```

### 2.3 Deploy to Production
Deploy your updated site to your hosting provider (GitHub Pages, Netlify, etc.)

---

## Step 3: Test the Integration

### 3.1 Test on Your Live Site
1. Visit https://www.apturapm.com/#/contact
2. Fill out the waitlist form with test data
3. Submit the form
4. Verify:
   - You see the success message
   - A new row appears in your Google Sheet
   - The data matches what you submitted

### 3.2 Test Locally (Optional)
```bash
npm run dev
```
1. Visit http://localhost:5173/#/contact
2. Submit a test entry
3. Check your Google Sheet for the new row

---

## Troubleshooting

### Problem: Form submits but no data in sheet

**Solution 1**: Check Apps Script Execution Log
1. Open Apps Script editor
2. Click **Executions** on the left sidebar
3. Look for errors in recent executions

**Solution 2**: Verify Web App URL
- Make sure you copied the entire URL from the deployment
- The URL should end with `/exec` not `/dev`

**Solution 3**: Check Sheet Name
- In `waitlist-handler.gs`, verify `SHEET_NAME = 'Sheet1'` matches your actual sheet tab name
- Update if different

### Problem: Authorization errors

**Solution**: Reauthorize the script
1. In Apps Script editor, run `testSubmission` function
2. Complete the authorization flow
3. Redeploy the Web App

### Problem: CORS errors in browser console

**Solution**: This is expected behavior
- The `no-cors` mode is used intentionally
- The form will still work even if you see CORS errors in the console
- The data will be saved to the sheet successfully

---

## Data Mapping

The form fields map to your Google Sheet as follows:

| Form Field | Sheet Column | Description |
|------------|--------------|-------------|
| `name` | Full_Name (A) | User's full name |
| `email` | Email_Address (B) | User's email address |
| `role` | Role (C) | Property Manager, Owner, Investor, or Other |
| `units` | Number_Units (D) | 1-10, 11-50, 51-200, or 201+ |
| (auto) | Timestamp (E) | ISO timestamp of submission |

---

## Updating the Script

If you need to make changes to the Apps Script:

1. Edit the code in the Apps Script editor
2. Click **Save**
3. Click **Deploy** → **Manage deployments**
4. Click the ✏️ pencil icon next to your active deployment
5. Update the **Version** dropdown to "New version"
6. Add a description of your changes
7. Click **Deploy**

**Note**: The Web App URL stays the same - you don't need to update your website!

---

## Security Notes

- The script is set to run as "You" (the sheet owner)
- Anyone can submit to the form, but only you can access the sheet
- Consider adding rate limiting if you experience spam
- The script logs all submissions for audit purposes

---

## Optional Enhancements

### Add Email Notifications
Add this function to get notified of new submissions:

```javascript
function sendNotificationEmail(data) {
  const recipient = 'your-email@example.com';
  const subject = 'New Aptura Waitlist Signup';
  const body = `
    New waitlist signup:
    
    Name: ${data.name}
    Email: ${data.email}
    Role: ${data.role}
    Units: ${data.units}
  `;
  
  MailApp.sendEmail(recipient, subject, body);
}
```

Then call it in the `doPost` function after `sheet.appendRow(rowData)`:
```javascript
sendNotificationEmail(data);
```

### Add Data Validation
Add validation logic in the `doPost` function:

```javascript
// Email validation
if (!data.email || !data.email.includes('@')) {
  return createResponse(false, 'Invalid email address', 400);
}

// Required fields
if (!data.name || !data.role) {
  return createResponse(false, 'Missing required fields', 400);
}
```

---

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the Apps Script execution logs
3. Verify all steps were completed correctly
4. Check browser console for client-side errors

---

## Files in This Directory

- `waitlist-handler.gs` - The complete Google Apps Script code
- `SETUP_GUIDE.md` - This setup guide (you are here)

---

**Last Updated**: October 31, 2025
**Version**: 1.0.0

