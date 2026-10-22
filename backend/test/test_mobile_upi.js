/**
 * Test Mobile UPI Deep Linking, Android Intents, and Safe Launch Logic
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');

const html = fs.readFileSync(path.join(FRONTEND_DIR, 'fee-payment.html'), 'utf8');
const js = fs.readFileSync(path.join(FRONTEND_DIR, 'payment.js'), 'utf8');
const css = fs.readFileSync(path.join(FRONTEND_DIR, 'style.css'), 'utf8');

console.log('Testing Mobile UPI Integration & Intent Handling...');

// 1. Verify HTML elements for PhonePe, GPay, Paytm, and Any UPI App
assert(html.includes("executeAppPayment('PhonePe')"), 'PhonePe payment button must exist');
assert(html.includes("executeAppPayment('Google Pay')"), 'Google Pay payment button must exist');
assert(html.includes("executeAppPayment('Paytm')"), 'Paytm payment button must exist');
assert(html.includes("executeAppPayment('Any UPI App')"), 'Any UPI App payment button must exist');
assert(html.includes('id="mobileUpiStatusCard"'), 'Mobile UPI status card element must exist');
assert(html.includes('id="upiStatusTitle"'), 'upiStatusTitle element must exist');
assert(html.includes('id="upiStatusDesc"'), 'upiStatusDesc element must exist');
assert(html.includes('confirmMobilePaymentSuccess()'), 'confirmMobilePaymentSuccess handler must exist');
console.log('  ✓ All HTML UPI options and mobile status elements are present');

// 2. Verify CSS styles for mobile UPI status & fallback
assert(css.includes('.mobile-upi-status-card'), '.mobile-upi-status-card CSS must exist');
assert(css.includes('.any-color'), '.any-color CSS must exist');
assert(css.includes('.btn-upi-fallback'), '.btn-upi-fallback CSS must exist');
assert(css.includes('.btn-upi-complete'), '.btn-upi-complete CSS must exist');
console.log('  ✓ All CSS styles for mobile UPI fallback and status card are present');

// 3. Verify JavaScript logic
assert(js.includes('function buildAppDeepLink'), 'buildAppDeepLink function must exist');
assert(js.includes('function safeLaunchUri'), 'safeLaunchUri function must exist');
assert(js.includes('function showMobileUpiStatus'), 'showMobileUpiStatus function must exist');
assert(js.includes('function handleMobileUpiFallback'), 'handleMobileUpiFallback function must exist');
assert(js.includes('function confirmMobilePaymentSuccess'), 'confirmMobilePaymentSuccess function must exist');
assert(js.includes('function generateUpiQueryParams'), 'generateUpiQueryParams function must exist');
console.log('  ✓ All JavaScript mobile UPI functions are present');

// 4. Verify package-targeted intents for Android
assert(js.includes('com.phonepe.app'), 'PhonePe Android package intent must be configured');
assert(js.includes('com.google.android.apps.nbu.paisa.user'), 'Google Pay Android package intent must be configured');
assert(js.includes('net.one97.paytm'), 'Paytm Android package intent must be configured');
console.log('  ✓ Android package intent targets verified for PhonePe, GPay, and Paytm');

// 5. Verify absence of unsafe direct window.location.href assignment for app schemes
assert(!js.includes('window.location.href = appScheme;'), 'Direct window.location.href = appScheme must not exist (causes ERR_UNKNOWN_URL_SCHEME)');
console.log('  ✓ Unsafe window.location.href = appScheme has been eliminated');

console.log('\nALL Mobile UPI tests PASSED successfully!');
