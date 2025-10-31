# Quick Start Guide - 5 Minutes Setup

## 🚀 Fast Setup (3 Steps)

### Step 1: Deploy Apps Script (2 min)
1. Open your sheet: [Click Here](https://docs.google.com/spreadsheets/d/1KucxWlF9PGIBNIx-RiIHVfQzmkGNsQxg5S_HrJBspBQ/edit)
2. **Extensions** → **Apps Script**
3. Copy/paste code from `waitlist-handler.gs`
4. **Deploy** → **New deployment** → **Web app**
   - Execute as: **Me**
   - Access: **Anyone**
5. **Copy the Web App URL** (looks like: `https://script.google.com/.../exec`)

### Step 2: Update Your Code (1 min)
Open `pages/Contact.tsx` and replace:
```typescript
const APPS_SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL_HERE';
```
with:
```typescript
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_URL_HERE/exec';
```

### Step 3: Deploy (2 min)
```bash
npm run build
# Then deploy to your hosting
```

## ✅ Test It
1. Visit https://www.apturapm.com/#/contact
2. Fill out and submit the form
3. Check your Google Sheet for the new entry

## 🆘 Quick Troubleshooting
- **No data in sheet?** Check the Web App URL is correct and ends with `/exec`
- **Script errors?** Run `testSubmission` function in Apps Script editor
- **Need headers?** Run `initializeSheet` function in Apps Script editor

## 📚 Need More Help?
See the full [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

---

**That's it! Your waitlist is now live.** 🎉

