const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('fee-payment.html', 'utf8');
const js = fs.readFileSync('payment.js', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

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
