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
    // Enhanced logging for debugging
    console.log('=== POST Request Received ===');
    console.log('Event object:', JSON.stringify(e));
    
    // Check if postData exists
    if (!e || !e.postData) {
      console.error('ERROR: No postData in event object');
      return createResponse(false, 'Invalid request: no postData', 400);
    }
    
    console.log('Raw postData contents:', e.postData.contents);
    
    // Parse the incoming JSON data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log('Parsed data:', JSON.stringify(data));
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError.toString());
      return createResponse(false, 'Invalid JSON data', 400);
    }
    
    // Get the active spreadsheet and target sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    console.log('Spreadsheet name:', spreadsheet.getName());
    
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    console.log('Looking for sheet:', SHEET_NAME);
    console.log('Sheet found:', sheet ? 'Yes' : 'No');
    
    if (!sheet) {
      const availableSheets = spreadsheet.getSheets().map(s => s.getName()).join(', ');
      console.error('Sheet not found. Available sheets:', availableSheets);
      return createResponse(false, 'Sheet "' + SHEET_NAME + '" not found. Available: ' + availableSheets, 404);
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
    
    console.log('Row data to append:', JSON.stringify(rowData));
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    console.log('Row appended successfully');
    
    // Log the submission for monitoring
    console.log('✅ SUCCESS - New waitlist entry: ' + data.email);
    
    return createResponse(true, 'Successfully added to waitlist', 200);
    
  } catch (error) {
    console.error('❌ FATAL ERROR:', error.toString());
    console.error('Error stack:', error.stack);
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

/**
 * Diagnostic function - Run this to check your setup
 * This will tell you what's configured and what sheets are available
 */
function diagnoseSetup() {
  console.log('=== DIAGNOSIS START ===');
  
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  console.log('✅ Spreadsheet found:', spreadsheet.getName());
  console.log('   Spreadsheet ID:', spreadsheet.getId());
  console.log('   Spreadsheet URL:', spreadsheet.getUrl());
  
  const sheets = spreadsheet.getSheets();
  console.log('\n📊 Available sheets (' + sheets.length + '):');
  sheets.forEach((sheet, index) => {
    console.log('   ' + (index + 1) + '. "' + sheet.getName() + '" (' + sheet.getLastRow() + ' rows)');
  });
  
  console.log('\n🔧 Current configuration:');
  console.log('   Looking for sheet named: "' + SHEET_NAME + '"');
  
  const targetSheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (targetSheet) {
    console.log('   ✅ Target sheet found!');
    console.log('   Rows in sheet:', targetSheet.getLastRow());
    console.log('   Columns in sheet:', targetSheet.getLastColumn());
    
    // Check headers
    if (targetSheet.getLastRow() > 0) {
      const headers = targetSheet.getRange(1, 1, 1, 5).getValues()[0];
      console.log('   Current headers:', JSON.stringify(headers));
    } else {
      console.log('   ⚠️  Sheet is empty');
    }
  } else {
    console.log('   ❌ Target sheet NOT found!');
    console.log('   💡 Solution: Either rename one of your sheets to "' + SHEET_NAME + '"');
    console.log('      or update SHEET_NAME in the script to match an existing sheet name');
  }
  
  console.log('\n=== DIAGNOSIS COMPLETE ===');
}

