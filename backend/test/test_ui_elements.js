'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..', '..');
const FRONTEND_DIR = path.join(ROOT_DIR, 'frontend');

const htmlPath = fs.existsSync(path.join(FRONTEND_DIR, 'fee-payment.html'))
  ? path.join(FRONTEND_DIR, 'fee-payment.html')
  : 'fee-payment.html';

const jsPath = fs.existsSync(path.join(FRONTEND_DIR, 'payment.js'))
  ? path.join(FRONTEND_DIR, 'payment.js')
  : 'payment.js';

const cssPath = fs.existsSync(path.join(FRONTEND_DIR, 'style.css'))
  ? path.join(FRONTEND_DIR, 'style.css')
  : 'style.css';

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

const requiredIds = [
  'cardFeeTuition', 'cardFeeJntu', 'cardFeeCombined',
  'radioTuition', 'radioJntu', 'radioCombined',
  'btnCardProceedTuition', 'btnCardProceedJntu', 'btnCardProceedCombined',
  'subOptTuitionSem', 'cardTuitionBtnAmt',
  'step2ProceedBanner', 'step2BannerTitle', 'step2BannerAmount', 'btnStep2Proceed'
];

requiredIds.forEach(id => {
  assert(html.includes(id), `Missing element id: ${id}`);
});

assert(js.includes('function proceedFromCard'), 'proceedFromCard missing');
assert(js.includes('function updateStep2ProceedBanner'), 'updateStep2ProceedBanner missing');
assert(css.includes('.step2-proceed-banner'), '.step2-proceed-banner CSS missing');
assert(css.includes('.btn-card-proceed'), '.btn-card-proceed CSS missing');

// Verify rightside instant payment card has been removed
assert(!html.includes('gateway-summary-card'), 'gateway-summary-card should be removed');
assert(!html.includes('Instant Payment Modes'), 'Instant Payment Modes header should be removed');
assert(css.includes('grid-template-columns: 1fr;'), 'portal-grid should be single-column 1fr');

console.log('ALL UI verification checks passed successfully!');
