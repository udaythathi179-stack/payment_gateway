/**
 * Test Hall Ticket Auto-Populate in Provided Space and Verify & Proceed Flow
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT_DIR, 'fee-payment.html'), 'utf8');
const js = fs.readFileSync(path.join(ROOT_DIR, 'payment.js'), 'utf8');
const css = fs.readFileSync(path.join(ROOT_DIR, 'style.css'), 'utf8');

console.log('Testing Hall Ticket Auto-Populate & Verify and Proceed Workflow...');

// 1. Check HTML Elements in Provided Space
const requiredHtmlElements = [
    'studentProvidedSpace',
    'studentFormDetails',
    'studentRoll',
    'studentRollDisplay',
    'studentName',
    'academicProgram',
    'studentSection',
    'studentQuota',
    'studentMobile',
    'studentEmail',
    'verifyRollBtn',
    'btnProvidedSpaceProceed',
    'studentVerifiedCard',
    'rollMatchStatus',
    'psStatusBadge'
];

requiredHtmlElements.forEach(id => {
    assert(html.includes(`id="${id}"`), `Missing HTML element: #${id}`);
    console.log(`  ✓ HTML element #${id} is present`);
});

// 2. Check Verify & Proceed button labels and handlers
assert(html.includes('Verify &amp; Proceed') || html.includes('Verify & Proceed'), 'Button must say Verify & Proceed');
assert(html.includes('handleVerifyAndProceed()'), 'handleVerifyAndProceed() must be called on click');
console.log('  ✓ Button contains "Verify & Proceed" and triggers handleVerifyAndProceed()');

// 3. Check JavaScript Functions
const requiredJsFunctions = [
    'function handleVerifyAndProceed',
    'function handleVerifyContinue',
    'function resetStudentFields',
    'function selectStudent',
    'function findMatchingStudent'
];

requiredJsFunctions.forEach(fn => {
    assert(js.includes(fn), `Missing JavaScript function: ${fn}`);
    console.log(`  ✓ JavaScript function ${fn} is present`);
});

// 4. Check CSS Styles for Provided Space
const requiredCssSelectors = [
    '.student-provided-space',
    '.provided-fields-grid',
    '.ps-field-group',
    '.ps-input',
    '.badge-waiting',
    '.badge-matched',
    '.btn-verify-proceed-main'
];

requiredCssSelectors.forEach(sel => {
    assert(css.includes(sel), `Missing CSS selector: ${sel}`);
    console.log(`  ✓ CSS selector ${sel} is present`);
});

// 5. Test mock execution of student lookup and selection
const students = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'students_data.json'), 'utf8'));
assert(students.length >= 199, 'Expected at least 199 students');

// Test 501
const s501 = students.find(s => s.roll === '24QA1A0501');
assert(s501, 'Student 24QA1A0501 must exist');
assert.strictEqual(s501.tuitionFee, 72000);
assert.strictEqual(s501.jntuFee, 6500);
console.log(`  ✓ Student 501 found: ${s501.name} (${s501.roll}), Section: ${s501.section}`);

// Test 561 (Section B)
const s561 = students.find(s => s.roll.endsWith('0561') || s.roll.endsWith('561'));
assert(s561, 'Student 561 must exist');
console.log(`  ✓ Student 561 found: ${s561.name} (${s561.roll}), Section: ${s561.section}`);

// Test 5D4 (Section C)
const s5D4 = students.find(s => s.roll.toUpperCase().endsWith('5D4') || s.roll.toUpperCase().endsWith('05D4'));
assert(s5D4, 'Student 5D4 must exist');
console.log(`  ✓ Student 5D4 found: ${s5D4.name} (${s5D4.roll}), Section: ${s5D4.section}`);

console.log('\nAll Hall Ticket Auto-Populate & Verify and Proceed tests PASSED successfully!\n');
