/**
 * Test Hall Ticket Entry and Go Button Flow to Navigate to Fees
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');
const DATABASE_DIR = path.join(ROOT_DIR, 'database');

const html = fs.readFileSync(path.join(FRONTEND_DIR, 'fee-payment.html'), 'utf8');
const js = fs.readFileSync(path.join(FRONTEND_DIR, 'payment.js'), 'utf8');
const css = fs.readFileSync(path.join(FRONTEND_DIR, 'style.css'), 'utf8');

console.log('Testing Hall Ticket Entry & Go Button Navigation to Fees...');

// 1. Check required form elements and inputs
const requiredHtmlElements = [
    'studentRoll',
    'verifyRollBtn',
    'studentFormDetails',
    'studentName',
    'academicProgram',
    'studentMobile',
    'studentEmail',
    'paymentSelectionStep2',
    'cardFeeTuition',
    'cardFeeJntu',
    'cardFeeCombined'
];

requiredHtmlElements.forEach(id => {
    assert(html.includes(`id="${id}"`), `Missing HTML element: #${id}`);
    console.log(`  ✓ HTML element #${id} is present`);
});

// 2. Check Go button label and handler
assert(html.includes('id="verifyRollBtn"'), 'verifyRollBtn element must exist');
assert(html.includes('handleGoClick()'), 'Button must trigger handleGoClick()');
assert(html.includes('>Go</span>') || html.includes('>Go<'), 'Button must say Go');
console.log('  ✓ Button says "Go" and triggers handleGoClick()');

// 3. Verify details section is removed from view
assert(!html.includes('id="studentProvidedSpace"'), 'Student provided space section should be removed as requested');
console.log('  ✓ Visible verify details section is cleanly removed');

// 4. Verify javascript functions
const requiredFunctions = [
    'function handleGoClick',
    'function handleVerifyAndProceed',
    'function handleVerifyContinue',
    'function selectStudent',
    'function findMatchingStudent',
    'function enterPersonName'
];

requiredFunctions.forEach(fn => {
    assert(js.includes(fn), `Missing required function: ${fn}`);
    console.log(`  ✓ JavaScript function ${fn} is present`);
});

// 5. Check CSS styles for Go button and Full-Screen Layout
assert(css.includes('.btn-go'), 'Missing .btn-go CSS selector');
assert(css.includes('max-width: 100% !important;'), 'Missing full-screen max-width for page-main');
assert(css.includes('.person-name-click-card'), 'Missing .person-name-click-card CSS selector');
console.log('  ✓ CSS selectors .btn-go, .person-name-click-card and full-screen layout are present');

// 6. Test with student data from database
const students = JSON.parse(fs.readFileSync(path.join(DATABASE_DIR, 'students_data.json'), 'utf8'));
const student501 = students.find(s => s.roll === '24QA1A0501');
assert(student501, 'Student 24QA1A0501 not found in students_data.json');
assert.strictEqual(student501.name, 'Aparanjitha A.C.Ancy');
assert.strictEqual(student501.section, 'Section A');
console.log(`  ✓ Student 501 found: ${student501.name} (${student501.roll}), Section: ${student501.section}`);

const student561 = students.find(s => s.roll === '24QA1A0561');
assert(student561, 'Student 24QA1A0561 not found in students_data.json');
assert.strictEqual(student561.name, 'Saikiran Jangili');
assert.strictEqual(student561.section, 'Section B');
console.log(`  ✓ Student 561 found: ${student561.name} (${student561.roll}), Section: ${student561.section}`);

console.log('\nAll Hall Ticket Go Navigation tests PASSED successfully!\n');
