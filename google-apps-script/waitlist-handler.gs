/**
 * Aptura Waitlist Form Handler
 * This script receives POST requests from the Aptura website contact form
 * and appends the data to the connected Google Sheet.
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/xxxxx/edit
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Save the project (Ctrl/Cmd + S)
 * 5. Deploy as Web App:
 *    - Click Deploy → New deployment
 *    - Click gear icon ⚙️ → Select "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click Deploy
 * 6. Copy the Web App URL and update Contact.tsx with it
 */

// Configuration
const SHEET_NAME = 'Sheet1'; // Change this if your sheet has a different name
const ALLOWED_ORIGINS = [
  'https://www.apturapm.com',
  'https://apturapm.com',
  'http://localhost:5173', // For local development
  'http://localhost:3000'
];

/**
 * Handle POST requests from the waitlist form
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet and target sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return createResponse(false, 'Sheet not found', 404);
    }
    
    // Prepare the row data matching your sheet columns
    // Columns: Full_Name, Email_Address, Role, Number_Units
    const rowData = [
      data.name || '',           // Full_Name (Column A)
      data.email || '',          // Email_Address (Column B)
      data.role || '',           // Role (Column C)
      data.units || '',          // Number_Units (Column D)
      new Date().toISOString()   // Optional: Timestamp (Column E)
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Log the submission for monitoring
    Logger.log('New waitlist entry: ' + data.email);
    
    return createResponse(true, 'Successfully added to waitlist', 200);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return createResponse(false, 'Error processing request: ' + error.toString(), 500);
  }
}

/**
 * Handle GET requests (for testing and health checks)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: 'active',
      message: 'Aptura Waitlist API is running',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Create a standardized JSON response with CORS headers
 */
function createResponse(success, message, statusCode) {
  const response = {
    success: success,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Test function to verify the script works
 * Run this from the Apps Script editor to test before deployment
 * Instructions:
 * 1. Select this function from the dropdown at the top
 * 2. Click the Run button (▶️)
 * 3. Check Execution log for results
 */
function testSubmission() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    role: 'Property Manager',
    units: '11 - 50'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test result: ' + result.getContent());
}

/**
 * Initialize the spreadsheet with proper headers
 * Run this once to set up your sheet headers if needed
 */
function initializeSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    Logger.log('Error: Sheet "' + SHEET_NAME + '" not found');
    return;
  }
  
  // Check if headers already exist
  const firstRow = sheet.getRange(1, 1, 1, 5).getValues()[0];
  
  if (!firstRow[0]) {
    // Add headers if they don't exist
    const headers = ['Full_Name', 'Email_Address', 'Role', 'Number_Units', 'Timestamp'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    Logger.log('Headers initialized successfully');
  } else {
    Logger.log('Headers already exist');
  }
}

