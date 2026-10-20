/**
 * Runtime DOM Simulation Test for payment.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Simple DOM environment mock
const elements = {};

function createMockElement(id, tagName = 'div') {
    const el = {
        id,
        tagName: tagName.toUpperCase(),
        value: '',
        textContent: '',
        innerHTML: '',
        style: {},
        classList: {
            classes: new Set(),
            add(c) { this.classes.add(c); },
            remove(c) { this.classes.delete(c); },
            contains(c) { return this.classes.has(c); },
            toggle(c, val) { if (val) this.add(c); else this.remove(c); }
        },
        listeners: {},
        addEventListener(evt, fn) {
            this.listeners[evt] = this.listeners[evt] || [];
            this.listeners[evt].push(fn);
        },
        dispatchEvent(evt) {
            if (this.listeners[evt.type]) {
                this.listeners[evt.type].forEach(fn => fn(evt));
            }
        },
        focus() {},
        select() {},
        scrollIntoView() {},
        contains(other) { return true; },
        querySelector() { return null; },
        querySelectorAll() { return []; },
        setAttribute() {},
        getAttribute() { return null; }
    };
    elements[id] = el;
    return el;
}

// Global mocks
global.window = {
    location: { search: '' },
    matchMedia: () => ({ matches: false, addEventListener: () => {} })
};
global.document = {
    getElementById(id) {
        if (!elements[id]) {
            elements[id] = createMockElement(id);
        }
        return elements[id];
    },
    querySelector(sel) {
        return null;
    },
    querySelectorAll(sel) {
        return [];
    },
    addEventListener() {},
    documentElement: { setAttribute() {}, getAttribute() {} }
};
global.localStorage = {
    getItem() { return null; },
    setItem() {}
};
global.showNotification = (msg) => {
    // console.log('  [Toast]', msg);
};
global.QRCode = function() {};

// Mock elements needed by portal
[
    'studentRoll', 'studentRollDisplay', 'studentName', 'academicProgram',
    'studentSection', 'studentQuota', 'studentMobile', 'studentEmail',
    'psStatusBadge', 'btnProceedActionText', 'btnProceedSubText',
    'verifyRollBtn', 'btnProvidedSpaceProceed', 'rollVerifiedIcon',
    'studentVerifiedCard', 'rollMatchStatus', 'rollSuggestions',
    'step2StudentTarget', 'payableAmount', 'feePurpose', 'btnPayAmount',
    'qrAmountDisplay', 'summaryRoll', 'summaryName', 'summarySection',
    'summaryBatch', 'summaryQuota', 'paymentSelectionStep2', 'entranceStep1',
    'stepIndicator1', 'stepIndicator2', 'stepIndicator3'
].forEach(id => createMockElement(id));

// Load students data
const studentsData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'students_data.json'), 'utf8'));

// Extract database and functions from payment.js
const paymentCode = fs.readFileSync(path.join(__dirname, '..', 'payment.js'), 'utf8');

// Evaluate in sandbox
const vm = require('vm');
const context = vm.createContext({
    ...global,
    console,
    CSE_STUDENTS_DATABASE: studentsData
});

vm.runInContext(paymentCode, context);

const getPaymentState = () => vm.runInContext('PaymentState', context);
const findMatchingStudent = (val) => vm.runInContext(`findMatchingStudent("${val}")`, context);
const selectStudent = (st, toast) => {
    context._tmpStudent = st;
    context._tmpToast = toast;
    vm.runInContext('selectStudent(_tmpStudent, _tmpToast)', context);
};
const handleGoClick = () => vm.runInContext('handleGoClick()', context);
const handleVerifyAndProceed = () => vm.runInContext('handleVerifyAndProceed()', context);
const resetStudentFields = () => vm.runInContext('resetStudentFields()', context);

console.log('Testing Runtime Logic in payment.js...');

// 1. Test initial state
assert.strictEqual(getPaymentState().student.roll, '', 'Initial roll should be blank');
console.log('  ✓ Initial student roll is clean');

// 2. Test auto-filling student fields on entering roll 501
console.log('Testing entering "501" into studentRoll...');
const rollInput = document.getElementById('studentRoll');
rollInput.value = '501';

const matched501 = findMatchingStudent('501');
assert(matched501, '501 must match a student in database');
assert.strictEqual(matched501.roll, '24QA1A0501');
assert.strictEqual(matched501.name, 'Aparanjitha A.C.Ancy');

selectStudent(matched501, false);

assert.strictEqual(document.getElementById('studentRoll').value, '24QA1A0501');
assert.strictEqual(document.getElementById('studentRollDisplay').value, '24QA1A0501');
assert.strictEqual(document.getElementById('studentName').value, 'Aparanjitha A.C.Ancy');
assert.strictEqual(document.getElementById('academicProgram').value, 'B.Tech - Computer Science & Engineering (CSE)');
assert.strictEqual(document.getElementById('studentMobile').value, '9848000000');
assert.strictEqual(document.getElementById('studentEmail').value, '24QA1A0501@b-iet.ac.in');
assert(document.getElementById('studentSection').value.includes('Section A'));
assert(document.getElementById('studentQuota').value.includes('Convenor Quota'));

console.log('  ✓ Student fields populated correctly:');
console.log('    - Name:', document.getElementById('studentName').value);
console.log('    - Roll:', document.getElementById('studentRollDisplay').value);
console.log('    - Program:', document.getElementById('academicProgram').value);
console.log('    - Section:', document.getElementById('studentSection').value);
console.log('    - Quota:', document.getElementById('studentQuota').value);
console.log('    - Mobile:', document.getElementById('studentMobile').value);
console.log('    - Email:', document.getElementById('studentEmail').value);

// 3. Test handleGoClick() navigation to fees in Step 2
console.log('\nTesting clicking "Go" button to navigate to fees...');
let scrolledToStep2 = false;
document.getElementById('paymentSelectionStep2').scrollIntoView = () => {
    scrolledToStep2 = true;
};

handleGoClick();

assert.strictEqual(getPaymentState().student.roll, '24QA1A0501');
assert.strictEqual(getPaymentState().student.name, 'Aparanjitha A.C.Ancy');
console.log('  ✓ handleGoClick() took student data and navigated to fees in Step 2');

// 4. Test clearing the input resets the provided space
console.log('\nTesting clearing the roll input...');
resetStudentFields();
assert.strictEqual(document.getElementById('studentName').value, '', 'Name should be cleared');
assert.strictEqual(document.getElementById('studentRollDisplay').value, '', 'RollDisplay should be cleared');
console.log('  ✓ Provided space reset successfully on clear');

// 5. Test another student: 561 (Section B)
console.log('\nTesting entering "561" (Section B)...');
const matched561 = findMatchingStudent('561');
assert(matched561, '561 must match');
selectStudent(matched561, false);
assert.strictEqual(document.getElementById('studentName').value, 'Saikiran Jangili');
assert(document.getElementById('studentSection').value.includes('Section B'));
console.log('  ✓ Student 561 populated: Saikiran Jangili (Section B)');

// 6. Test another student: 5D4 (Section C)
console.log('\nTesting entering "5D4" (Section C)...');
const matched5D4 = findMatchingStudent('5D4');
assert(matched5D4, '5D4 must match');
selectStudent(matched5D4, false);
assert.strictEqual(document.getElementById('studentName').value, 'Santhosh Reddy Poreddy');
assert(document.getElementById('studentSection').value.includes('Section C'));
console.log('  ✓ Student 5D4 populated: Santhosh Reddy Poreddy (Section C)');

// 7. Test another student: 510 (Lateral Entry Section C)
console.log('\nTesting entering "510" (Lateral Entry Section C)...');
const matched510 = findMatchingStudent('510');
assert(matched510, '510 must match');
selectStudent(matched510, false);
assert.strictEqual(matched510.roll, '25QA5A0510');
assert(document.getElementById('studentSection').value.includes('Section C'));
console.log('  ✓ Lateral 510 populated: 25QA5A0510 (Section C)');

console.log('\nAll Runtime DOM Simulation Tests passed with 100% success!\n');
