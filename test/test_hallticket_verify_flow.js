/**
 * Test Hall Ticket Entry and Go Button Flow to Navigate to Fees
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT_DIR, 'fee-payment.html'), 'utf8');
const js = fs.readFileSync(path.join(ROOT_DIR, 'payment.js'), 'utf8');
const css = fs.readFileSync(path.join(ROOT_DIR, 'style.css'), 'utf8');

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

// 4. Check JavaScript functions
const requiredJsFunctions = [
    'function handleGoClick',
    'function handleVerifyAndProceed',
    'function handleVerifyContinue',
    'function selectStudent',
    'function findMatchingStudent',
    'function enterPersonName'
];

requiredJsFunctions.forEach(fn => {
    assert(js.includes(fn), `Missing JavaScript function: ${fn}`);
    console.log(`  ✓ JavaScript function ${fn} is present`);
});

// 5. Check CSS styles for Go button and Full-Screen Layout
assert(css.includes('.btn-go'), 'Missing .btn-go CSS selector');
assert(css.includes('max-width: 100% !important;'), 'Missing full-screen max-width for page-main');
assert(css.includes('.person-name-click-card'), 'Missing .person-name-click-card CSS selector');
console.log('  ✓ CSS selectors .btn-go, .person-name-click-card and full-screen layout are present');

// 6. Test student database resolution
const students = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'students_data.json'), 'utf8'));
assert(students.length >= 199, 'Expected at least 199 students');

const s501 = students.find(s => s.roll === '24QA1A0501');
assert(s501, 'Student 24QA1A0501 must exist');
console.log(`  ✓ Student 501 found: ${s501.name} (${s501.roll}), Section: ${s501.section}`);

const s561 = students.find(s => s.roll.endsWith('0561') || s.roll.endsWith('561'));
assert(s561, 'Student 561 must exist');
console.log(`  ✓ Student 561 found: ${s561.name} (${s561.roll}), Section: ${s561.section}`);

console.log('\nAll Hall Ticket Go Navigation tests PASSED successfully!\n');
