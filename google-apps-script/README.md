# Google Apps Script - Aptura Waitlist Integration

This directory contains the Google Apps Script code and documentation for connecting your Aptura waitlist form to Google Sheets.

## 📁 Files

- **`waitlist-handler.gs`** - The complete Google Apps Script code (copy this to your Google Sheet's Apps Script editor)
- **`QUICK_START.md`** - Fast 5-minute setup guide
- **`SETUP_GUIDE.md`** - Comprehensive setup instructions with troubleshooting
- **`README.md`** - This file

## 🎯 What This Does

When a user submits your waitlist form at https://www.apturapm.com/#/contact, this script:
1. Receives the form data via POST request
2. Validates the data
3. Appends it to your Google Sheet
4. Returns a success/error response

## 📊 Data Flow

```
User fills form on website
        ↓
Contact.tsx POSTs to Apps Script Web App
        ↓
waitlist-handler.gs processes request
        ↓
Data appended to Google Sheet row
        ↓
Success message shown to user
```

## ⚡ Quick Start

**For fast setup (5 minutes):**
→ See [QUICK_START.md](./QUICK_START.md)

**For detailed instructions:**
→ See [SETUP_GUIDE.md](./SETUP_GUIDE.md)

## 🔗 Links

- **Google Sheet**: https://docs.google.com/spreadsheets/d/1KucxWlF9PGIBNIx-RiIHVfQzmkGNsQxg5S_HrJBspBQ/edit
- **Website Form**: https://www.apturapm.com/#/contact
- **Apps Script Docs**: https://developers.google.com/apps-script

## 📋 Requirements

- Access to the Google Sheet (you already have this)
- Permission to create Apps Script deployments
- Node.js and npm for building the website

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript (see `pages/Contact.tsx`)
- **Backend**: Google Apps Script (serverless)
- **Database**: Google Sheets
- **Deployment**: Web App (public endpoint)

## ⚙️ Configuration

The script can be configured in `waitlist-handler.gs`:

```javascript
const SHEET_NAME = 'Sheet1'; // Change if your sheet tab has a different name
const ALLOWED_ORIGINS = [
  'https://www.apturapm.com',
  'https://apturapm.com',
  'http://localhost:5173', // For local development
  'http://localhost:3000'
];
```

## 🔒 Security

- The script runs as **you** (the sheet owner)
- The endpoint is **public** (anyone can POST)
- Only **you** can access the sheet data
- All submissions are **logged** in Apps Script

## 🧪 Testing

The script includes built-in test functions:

1. **Test the script before deploying**:
   - Run `testSubmission()` function in Apps Script editor
   
2. **Initialize sheet headers**:
   - Run `initializeSheet()` function in Apps Script editor

3. **Check if API is running**:
   - Visit your Web App URL in a browser (GET request)
   - Should return: `{"status":"active","message":"Aptura Waitlist API is running"}`

## 📝 Form Fields → Sheet Columns

| Form Field | Variable | Sheet Column | Example |
|------------|----------|--------------|---------|
| Full Name | `name` | Full_Name (A) | John Doe |
| Email | `email` | Email_Address (B) | john@example.com |
| Role | `role` | Role (C) | Property Manager |
| Units | `units` | Number_Units (D) | 11 - 50 |
| (auto) | - | Timestamp (E) | 2025-10-31T12:34:56.789Z |

## 🚨 Common Issues

### Issue: Form submits but no data appears
**Fix**: Check the Web App URL in `Contact.tsx` is correct and ends with `/exec`

### Issue: "Authorization required" error
**Fix**: Run `testSubmission()` in Apps Script editor and complete authorization

### Issue: Sheet name error
**Fix**: Update `SHEET_NAME` constant in script to match your sheet tab name

## 🔄 Updates

To update the script after initial deployment:
1. Edit code in Apps Script editor
2. Save changes
3. **Deploy** → **Manage deployments** → Edit existing → **New version**

**Note**: The Web App URL never changes, so you don't need to update your website!

## 📧 Optional: Email Notifications

See [SETUP_GUIDE.md](./SETUP_GUIDE.md#optional-enhancements) for instructions on adding email notifications when new users sign up.

## 💡 Tips

- Keep the Web App URL secret (though it's public, it's security through obscurity)
- Monitor the Apps Script execution logs occasionally
- Consider adding rate limiting if you get spam
- Back up your Google Sheet regularly

## 📞 Support

For detailed troubleshooting, see the [SETUP_GUIDE.md](./SETUP_GUIDE.md#troubleshooting) troubleshooting section.

---

**Ready to deploy?** Start with [QUICK_START.md](./QUICK_START.md)! 🚀

