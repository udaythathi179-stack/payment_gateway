/**
 * ===================================================================
 * BRIL ONLINE FEE PAYMENT GATEWAY ENGINE
 * Brilliant Institute of Engineering & Technology, Hyderabad
 * Supports: PhonePe, Google Pay, Paytm, BHIM UPI, Cards, NetBanking
 * ===================================================================
 */

// Global Application State
const PaymentState = {
    currentCategory: 'tuition',
    amount: 35000,
    purpose: 'B.Tech Annual Tuition Fee - Sem I/II',
    student: {
        roll: '22BR1A0501',
        name: 'Uday Kiran Thathi',
        program: 'B.Tech - Computer Science & Engineering (CSE)',
        mobile: '9908810491',
        email: 'uday.thathi@example.com'
    },
    orderId: '',
    selectedPaymentMode: 'UPI',
    countdownInterval: null
};

// UPI Merchant Configuration (Brilliant Institute of Engineering & Technology)
const UPI_CONFIG = {
    vpa: 'brilcollege@sbi',
    name: 'Brilliant Institute of Engineering and Technology',
    merchantCode: '8220' // Educational Services
};

// Pre-packaged Sample Students for Instant Testing
const SAMPLE_STUDENTS = [
    {
        roll: '22BR1A0501',
        name: 'Uday Kiran Thathi',
        program: 'B.Tech - Computer Science & Engineering (CSE)',
        mobile: '9908810491',
        email: 'udaykiran@example.com'
    },
    {
        roll: '23BR1A6612',
        name: 'Ananya Sharma',
        program: 'B.Tech - CSE (AI & Machine Learning)',
        mobile: '9848022338',
        email: 'ananya.sharma@example.com'
    },
    {
        roll: '21BR1A0445',
        name: 'K. Sai Teja',
        program: 'B.Tech - Electronics & Communication (ECE)',
        mobile: '9701234567',
        email: 'saiteja.k@example.com'
    }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initSubOptions('tuition');
    generateOrderReference();
    updateLiveQrCode();
    attachEventListeners();
    prefillDefaultStudent();
});

// Generate Unique Order Reference
function generateOrderReference() {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(1000 + Math.random() * 9000);
    PaymentState.orderId = `BRIL-ORD-${timestamp}-${random}`;

    const orderRefEl = document.getElementById('modalOrderRef');
    if (orderRefEl) orderRefEl.textContent = PaymentState.orderId;
}

// Prefill default sample data
function prefillDefaultStudent() {
    const sample = SAMPLE_STUDENTS[0];
    document.getElementById('studentRoll').value = sample.roll;
    document.getElementById('studentName').value = sample.name;
    document.getElementById('academicProgram').value = sample.program;
    document.getElementById('studentMobile').value = sample.mobile;
    document.getElementById('studentEmail').value = sample.email;
    syncStudentState();
}

// Attach Event Listeners
function attachEventListeners() {
    // Quick Demo Autofill button
    document.getElementById('quickFillDemoBtn').addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * SAMPLE_STUDENTS.length);
        const sample = SAMPLE_STUDENTS[randomIndex];
        document.getElementById('studentRoll').value = sample.roll;
        document.getElementById('studentName').value = sample.name;
        document.getElementById('academicProgram').value = sample.program;
        document.getElementById('studentMobile').value = sample.mobile;
        document.getElementById('studentEmail').value = sample.email;
        syncStudentState();
        showNotification(`Loaded student profile: ${sample.name} (${sample.roll})`);
    });

    // Inputs Sync
    ['studentRoll', 'studentName', 'academicProgram', 'studentMobile', 'studentEmail'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', syncStudentState);
    });

    // Amount input sync
    const amountInput = document.getElementById('payableAmount');
    if (amountInput) {
        amountInput.addEventListener('input', (e) => {
            const val = parseFloat(e.target.value) || 0;
            PaymentState.amount = val;
            updateAmountDisplays();
            updateLiveQrCode();
        });
    }

    // Receipt Lookup
    document.getElementById('lookupReceiptBtn').addEventListener('click', openLookupModal);
}

// Synchronize Student Details to State and Summary
function syncStudentState() {
    PaymentState.student.roll = document.getElementById('studentRoll').value || '22BR1A0501';
    PaymentState.student.name = document.getElementById('studentName').value || 'Student Name';
    PaymentState.student.program = document.getElementById('academicProgram').value || 'B.Tech';
    PaymentState.student.mobile = document.getElementById('studentMobile').value || '+91-XXXXXXXXXX';
    PaymentState.student.email = document.getElementById('studentEmail').value || '';

    // Update Summary Box
    document.getElementById('summaryRoll').textContent = PaymentState.student.roll;
}

// Handle Category Change (Radio buttons)
function handleCategoryChange(category) {
    PaymentState.currentCategory = category;

    // Toggle active card class
    document.querySelectorAll('.fee-cat-card').forEach(card => {
        const input = card.querySelector('input');
        if (input && input.value === category) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    initSubOptions(category);
}

// Initialize Dynamic Suboptions per Category
function initSubOptions(category) {
    const container = document.getElementById('dynamicSubOptions');
    if (!container) return;

    let html = '';

    switch (category) {
        case 'tuition':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label>Academic Year & Semester</label>
                        <select id="subOptTuitionSem" onchange="updateTuitionPreset(this.value)">
                            <option value="annual">Full Academic Year 2026-27 (Annual: ₹70,000)</option>
                            <option value="sem1" selected>Semester I (₹35,000)</option>
                            <option value="sem2">Semester II (₹35,000)</option>
                            <option value="dues">Part Payment / Remaining Dues</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Quota Category</label>
                        <select id="subOptQuota">
                            <option value="Convenor (EAMCET / ECET)">Convenor Quota (EAMCET / ECET)</option>
                            <option value="Management Quota">Management Quota</option>
                            <option value="NRI Quota">NRI Quota</option>
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateTuitionPreset('sem1');
            break;

        case 'exam':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label>Examination / Document Service</label>
                        <select id="subOptExamService" onchange="updateExamPreset(this.value)">
                            <option value="transcript" selected>Official Transcripts (₹60 per copy - Replaces SBI Challan)</option>
                            <option value="reg_exam">Autonomous Regular Semester Exam Fee (₹1,500)</option>
                            <option value="supply_exam">Supplementary Exam Fee (₹500 / subject)</option>
                            <option value="revaluation">Paper Revaluation / Recounting (₹1,000 / subject)</option>
                            <option value="condonation">Attendance Condonation Fee (₹300)</option>
                            <option value="verification">Certificate Attestation / Student Verification (₹500)</option>
                        </select>
                    </div>
                    <div class="form-group" id="transcriptCountGroup">
                        <label>Number of Transcript Copies</label>
                        <input type="number" id="subOptTranscriptQty" min="1" max="20" value="1" oninput="calculateTranscriptTotal(this.value)">
                        <span class="input-hint">₹60 per copy. Instant electronic payment slip generated.</span>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateExamPreset('transcript');
            break;

        case 'admission':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label>Admission Service</label>
                        <select id="subOptAdmService" onchange="updateAdmissionPreset(this.value)">
                            <option value="app_fee" selected>B.Tech / MBA / Diploma Application Form Fee (₹1,000)</option>
                            <option value="seat_confirm">Seat Confirmation / Token Advance (₹10,000)</option>
                            <option value="provisional">Provisional Registration Charge (₹2,500)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Academic Year</label>
                        <input type="text" readonly value="2026-2027 Admissions Open">
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateAdmissionPreset('app_fee');
            break;

        case 'transport':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label>Select Bus Route (Hyderabad / Secunderabad)</label>
                        <select id="subOptBusRoute" onchange="updateTransportPreset(this.value)">
                            <option value="Route 1: Dilsukhnagar - Kothapet - LB Nagar - BRIL">Route 1: Dilsukhnagar & LB Nagar (₹18,000 / yr)</option>
                            <option value="Route 2: Uppal - Nagole - Hayathnagar - BRIL">Route 2: Uppal & Nagole (₹18,000 / yr)</option>
                            <option value="Route 3: ECIL - Malkajgiri - Tarnaka - BRIL">Route 3: ECIL & Tarnaka (₹21,000 / yr)</option>
                            <option value="Route 4: Mehdipatnam - Chandrayangutta - BRIL">Route 4: Mehdipatnam & Old City (₹20,000 / yr)</option>
                            <option value="Route 5: Secunderabad - Ramanthapur - BRIL">Route 5: Secunderabad & Amberpet (₹20,000 / yr)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Pass Duration</label>
                        <select id="subOptBusDuration" onchange="updateTransportDuration(this.value)">
                            <option value="annual" selected>Full Year (Annual Bus Pass)</option>
                            <option value="semester">One Semester Only (50% Cost)</option>
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateTransportPreset(document.getElementById('subOptBusRoute').value);
            break;

        case 'hostel':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label>Hostel Accommodation Type</label>
                        <select id="subOptHostelRoom" onchange="updateHostelPreset(this.value)">
                            <option value="Non-AC Standard Room with Mess (₹50,000 / Year)" selected>Non-AC Room + Food & Mess (₹50,000 / Year)</option>
                            <option value="AC Premium Room with Mess (₹75,000 / Year)">AC Premium Room + Food & Mess (₹75,000 / Year)</option>
                            <option value="Hostel Caution Deposit / Admission (₹5,000)">Hostel Caution Deposit (Refundable: ₹5,000)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Installment Term</label>
                        <select id="subOptHostelTerm" onchange="updateHostelTerm(this.value)">
                            <option value="full" selected>Full Annual Payment</option>
                            <option value="term1">Term 1 (Semester I - 50%)</option>
                        </select>
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateHostelPreset('Non-AC Standard Room with Mess (₹50,000 / Year)');
            break;

        case 'custom':
            html = `
                <div class="form-row-2">
                    <div class="form-group">
                        <label>Specify Custom Purpose</label>
                        <input type="text" id="subOptCustomTitle" placeholder="e.g. AI/ML Certification Workshop Fee" oninput="updateCustomPurpose(this.value)">
                    </div>
                    <div class="form-group">
                        <label>Enter Amount</label>
                        <input type="number" id="subOptCustomAmt" placeholder="Amount in ₹" min="50" value="500" oninput="updateCustomAmount(this.value)">
                    </div>
                </div>
            `;
            container.innerHTML = html;
            updateCustomPurpose('Department Certification / Workshop Fee');
            updateCustomAmount(500);
            break;
    }
}

// Preset Updaters
function updateTuitionPreset(type) {
    let amt = 35000;
    let desc = 'B.Tech Annual Tuition Fee - Sem I';
    if (type === 'annual') {
        amt = 70000;
        desc = 'B.Tech Full Year Tuition Fee (2026-27)';
    } else if (type === 'sem2') {
        amt = 35000;
        desc = 'B.Tech Annual Tuition Fee - Sem II';
    } else if (type === 'dues') {
        amt = 15000;
        desc = 'B.Tech Remaining Tuition Balance Dues';
    }
    setFeeDetails(desc, amt);
}

function updateExamPreset(service) {
    const qtyGroup = document.getElementById('transcriptCountGroup');
    if (service === 'transcript') {
        if (qtyGroup) qtyGroup.style.display = 'block';
        calculateTranscriptTotal(document.getElementById('subOptTranscriptQty')?.value || 1);
    } else {
        if (qtyGroup) qtyGroup.style.display = 'none';
        let amt = 1500;
        let desc = 'Autonomous Regular Semester Exam Fee';
        if (service === 'supply_exam') {
            amt = 500;
            desc = 'Supplementary Exam Fee (Per Subject)';
        } else if (service === 'revaluation') {
            amt = 1000;
            desc = 'Exam Answer Script Revaluation Fee';
        } else if (service === 'condonation') {
            amt = 300;
            desc = 'Exam Attendance Condonation Fee';
        } else if (service === 'verification') {
            amt = 500;
            desc = 'Official Student Certificate Verification Fee';
        }
        setFeeDetails(desc, amt);
    }
}

function calculateTranscriptTotal(qty) {
    const count = parseInt(qty) || 1;
    const rate = 60; // BRIL transcript procedure states Rs. 60 per transcript
    const total = count * rate;
    const desc = `Official Exam Transcripts (${count} ${count > 1 ? 'Copies' : 'Copy'} @ ₹60/copy)`;
    setFeeDetails(desc, total);
}

function updateAdmissionPreset(type) {
    let amt = 1000;
    let desc = 'BRIL Admission Application Form Fee (2026-27)';
    if (type === 'seat_confirm') {
        amt = 10000;
        desc = 'Seat Confirmation Token Advance - B.Tech/MBA';
    } else if (type === 'provisional') {
        amt = 2500;
        desc = 'Provisional Admission Registration Charge';
    }
    setFeeDetails(desc, amt);
}

function updateTransportPreset(route) {
    const duration = document.getElementById('subOptBusDuration')?.value || 'annual';
    let baseAmt = 18000;
    if (route.includes('ECIL')) baseAmt = 21000;
    else if (route.includes('Mehdipatnam') || route.includes('Secunderabad')) baseAmt = 20000;

    const finalAmt = duration === 'semester' ? (baseAmt / 2) : baseAmt;
    const desc = `College Bus Transport Fee: ${route.split(':')[0]} (${duration.toUpperCase()})`;
    setFeeDetails(desc, finalAmt);
}

function updateTransportDuration(duration) {
    const route = document.getElementById('subOptBusRoute')?.value || '';
    updateTransportPreset(route);
}

function updateHostelPreset(room) {
    const term = document.getElementById('subOptHostelTerm')?.value || 'full';
    let baseAmt = 50000;
    if (room.includes('75,000')) baseAmt = 75000;
    else if (room.includes('5,000')) baseAmt = 5000;

    const finalAmt = (term === 'term1' && baseAmt > 5000) ? (baseAmt / 2) : baseAmt;
    const desc = `Hostel & Mess Charges: ${room.split('(')[0]}`;
    setFeeDetails(desc, finalAmt);
}

function updateHostelTerm(term) {
    const room = document.getElementById('subOptHostelRoom')?.value || '';
    updateHostelPreset(room);
}

function updateCustomPurpose(title) {
    const amt = parseFloat(document.getElementById('subOptCustomAmt')?.value) || 500;
    setFeeDetails(title || 'Miscellaneous College Dues', amt);
}

function updateCustomAmount(val) {
    const title = document.getElementById('subOptCustomTitle')?.value || 'Miscellaneous College Dues';
    setFeeDetails(title, parseFloat(val) || 100);
}

// Master Setter for Fee Details
function setFeeDetails(purpose, amount) {
    PaymentState.purpose = purpose;
    PaymentState.amount = amount;

    const purposeInput = document.getElementById('feePurpose');
    const amtInput = document.getElementById('payableAmount');

    if (purposeInput) purposeInput.value = purpose;
    if (amtInput) amtInput.value = amount;

    updateAmountDisplays();
    updateLiveQrCode();
}

// Update all amount labels across the page
function updateAmountDisplays() {
    const formatted = '₹' + PaymentState.amount.toLocaleString('en-IN');
    const formattedWithDecimals = '₹' + PaymentState.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });

    document.getElementById('btnPayAmount').textContent = formatted;
    document.getElementById('qrAmountDisplay').textContent = formatted;
    document.getElementById('summaryBase').textContent = formattedWithDecimals;
    document.getElementById('summaryTotal').textContent = formattedWithDecimals;
    document.getElementById('summaryHead').textContent = PaymentState.purpose;

    // Modal elements
    const modalFeeValue = document.getElementById('modalFeeValue');
    const modalFeeTitle = document.getElementById('modalFeeTitle');
    if (modalFeeValue) modalFeeValue.textContent = formatted;
    if (modalFeeTitle) modalFeeTitle.textContent = PaymentState.purpose;
}

// Generate Standard National UPI URI String
function generateUpiString() {
    const encodedName = encodeURIComponent(UPI_CONFIG.name);
    const encodedNote = encodeURIComponent(`${PaymentState.student.roll} - ${PaymentState.purpose}`);
    return `upi://pay?pa=${UPI_CONFIG.vpa}&pn=${encodedName}&mc=${UPI_CONFIG.merchantCode}&tid=${PaymentState.orderId}&tr=${PaymentState.orderId}&tn=${encodedNote}&am=${PaymentState.amount}&cu=INR`;
}

// Helper to safely render QR code regardless of library variation
function safeRenderQr(container, text, size, darkColor, callback) {
    if (!container) return;
    container.innerHTML = '';

    if (window.QRCode && typeof window.QRCode.toCanvas === 'function') {
        window.QRCode.toCanvas(text, {
            width: size,
            margin: 1,
            color: {
                dark: darkColor || '#0000cc',
                light: '#ffffff'
            }
        }, function (error, canvas) {
            if (!error && canvas) {
                container.appendChild(canvas);
                if (callback) callback(null, canvas);
            }
        });
    } else if (typeof window.QRCode === 'function') {
        const qr = new window.QRCode(container, {
            text: text,
            width: size,
            height: size,
            colorDark: darkColor || '#0000cc',
            colorLight: '#ffffff'
        });
        if (callback) {
            setTimeout(() => {
                const el = container.querySelector('canvas') || container.querySelector('img');
                callback(null, el);
            }, 100);
        }
    } else {
        // Fallback placeholder image via Google Chart / QR Server
        const img = document.createElement('img');
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
        img.style.width = '100%';
        img.style.height = '100%';
        container.appendChild(img);
        if (callback) callback(null, img);
    }
}

// Update Dynamic Live QR Code
function updateLiveQrCode() {
    const qrHolder = document.getElementById('dynamicQRElement');
    if (!qrHolder) return;
    const upiString = generateUpiString();
    safeRenderQr(qrHolder, upiString, 170, '#0a0a2e');
}

// Quick UPI App Selector (PhonePe, GPay, Paytm chips on the right side)
function selectQuickUpiApp(appName) {
    // Validate required fields
    if (!validateFormFields()) return;

    openPaymentModal();
    switchGatewayTab('upi');

    // Simulate clicking that app
    showNotification(`Selected ${appName}. Click 'Pay with ${appName}' to complete transaction.`);
}

// Form validation
function validateFormFields() {
    const roll = document.getElementById('studentRoll');
    const name = document.getElementById('studentName');
    const prog = document.getElementById('academicProgram');
    const mobile = document.getElementById('studentMobile');
    const email = document.getElementById('studentEmail');

    if (!roll.value.trim()) {
        roll.focus();
        alert('Please enter Hall Ticket / Roll Number');
        return false;
    }
    if (!prog.value) {
        prog.focus();
        alert('Please select Course / Department');
        return false;
    }
    if (!name.value.trim()) {
        name.focus();
        alert('Please enter Student Name');
        return false;
    }
    if (!mobile.value.trim() || mobile.value.length < 10) {
        mobile.focus();
        alert('Please enter a valid 10-digit Mobile Number');
        return false;
    }
    if (!email.value.trim() || !email.value.includes('@')) {
        email.focus();
        alert('Please enter a valid Email ID for e-Receipt delivery');
        return false;
    }

    syncStudentState();
    return true;
}

// Main Flow Trigger: "Proceed to Payment Gateway"
function initiatePaymentFlow() {
    if (!validateFormFields()) return;
    openPaymentModal();
}

// Open Payment Modal
function openPaymentModal() {
    generateOrderReference();
    updateAmountDisplays();
    renderModalQrCode();
    startModalTimer();

    document.getElementById('paymentGatewayModal').classList.add('open');
}

// Close Payment Modal
function closePaymentModal() {
    document.getElementById('paymentGatewayModal').classList.remove('open');
    if (PaymentState.countdownInterval) clearInterval(PaymentState.countdownInterval);
}

// Switch Gateway Tabs
function switchGatewayTab(tabKey) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    const activeContent = document.getElementById(`tab-${tabKey}`);
    if (activeContent) activeContent.classList.add('active');

    const clickedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick')?.includes(tabKey));
    if (clickedBtn) clickedBtn.classList.add('active');

    if (tabKey === 'qr') {
        renderModalQrCode();
    }
}

// Render QR inside modal
function renderModalQrCode() {
    const modalQrHolder = document.getElementById('modalDynamicQR');
    if (!modalQrHolder) return;
    const upiString = generateUpiString();
    safeRenderQr(modalQrHolder, upiString, 190, '#0000cc');
}

// Modal Countdown Timer
function startModalTimer() {
    if (PaymentState.countdownInterval) clearInterval(PaymentState.countdownInterval);

    let timeLeft = 300; // 5 minutes
    const timerDisplay = document.getElementById('qrCountdown');

    PaymentState.countdownInterval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        if (timerDisplay) {
            timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }

        if (timeLeft <= 0) {
            clearInterval(PaymentState.countdownInterval);
            alert('Payment session expired. Refreshing order reference.');
            generateOrderReference();
            startModalTimer();
        }
    }, 1000);
}

// Execute Payment with Specific App (PhonePe, Google Pay, Paytm)
function executeAppPayment(appName) {
    PaymentState.selectedPaymentMode = `${appName} UPI`;

    // Check if on mobile device to trigger UPI Intent
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const upiUri = generateUpiString();

    if (isMobile) {
        // App-specific intent scheme triggers
        let appScheme = upiUri;
        if (appName === 'PhonePe') {
            appScheme = upiUri.replace('upi://', 'phonepe://');
        } else if (appName === 'Paytm') {
            appScheme = upiUri.replace('upi://', 'paytmmp://');
        }

        // Attempt opening app
        window.location.href = appScheme;

        // Also show processing modal in case student returns
        setTimeout(() => {
            showProcessingModal(`Waiting for approval on ${appName}...`, `Please approve the payment request of ₹${PaymentState.amount.toLocaleString('en-IN')} on ${appName}`);
            setTimeout(() => {
                simulatePaymentSuccess(`${appName} App`);
            }, 3500);
        }, 1000);
    } else {
        // Desktop flow: Simulate gateway transaction
        showProcessingModal(`Connecting to ${appName} Gateway...`, `Forwarding authorization request for ₹${PaymentState.amount.toLocaleString('en-IN')}`);
        setTimeout(() => {
            simulatePaymentSuccess(`${appName} UPI`);
        }, 2200);
    }
}

// Execute VPA Collect Request
function executeVpaPayment() {
    const vpa = document.getElementById('customVpa').value.trim();
    if (!vpa || !vpa.includes('@')) {
        alert('Please enter a valid UPI ID (e.g., student@oksbi, user@ybl)');
        document.getElementById('customVpa').focus();
        return;
    }

    PaymentState.selectedPaymentMode = `UPI (${vpa})`;
    showProcessingModal(`Sending UPI Collect to ${vpa}...`, `Please open your UPI app and authorize the payment within 5 minutes.`);

    setTimeout(() => {
        simulatePaymentSuccess(`UPI (${vpa})`);
    }, 2800);
}

// Card Payment Handler
function executeCardPayment() {
    const cardNum = document.getElementById('cardNumber').value.replace(/\s+/g, '');
    const expiry = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCvv').value;

    if (cardNum.length < 15) {
        alert('Please enter a valid 16-digit card number');
        return;
    }
    if (!expiry || expiry.length < 5) {
        alert('Please enter card expiry (MM/YY)');
        return;
    }
    if (!cvv || cvv.length < 3) {
        alert('Please enter a valid CVV');
        return;
    }

    PaymentState.selectedPaymentMode = `Debit / Credit Card (ending ${cardNum.slice(-4)})`;
    showProcessingModal('Authenticating with Bank 3D-Secure...', 'Verifying card credentials with payment gateway...');

    setTimeout(() => {
        simulatePaymentSuccess('Card Payment');
    }, 2500);
}

// Net Banking Payment Handler
function executeNetBankingPayment() {
    const selectedBank = document.querySelector('input[name="bankOption"]:checked')?.value || document.getElementById('otherBankSelect')?.value;
    if (!selectedBank) {
        alert('Please select a bank');
        return;
    }

    PaymentState.selectedPaymentMode = `Net Banking - ${selectedBank}`;
    showProcessingModal(`Redirecting to ${selectedBank}...`, 'Connecting securely to institutional banking gateway...');

    setTimeout(() => {
        simulatePaymentSuccess(`Net Banking (${selectedBank})`);
    }, 2500);
}

// Card Number Formatter
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = formatted.substring(0, 19);
}

// Processing Modal Show / Hide
function showProcessingModal(title, subtitle) {
    closePaymentModal();
    const modal = document.getElementById('processingModal');
    document.getElementById('processingTitle').textContent = title;
    document.getElementById('processingSubtitle').textContent = subtitle;
    modal.classList.add('open');
}

function hideProcessingModal() {
    document.getElementById('processingModal').classList.remove('open');
}

// Payment Success Simulation & Receipt Generation
function simulatePaymentSuccess(methodUsed) {
    hideProcessingModal();

    // Trigger celebratory confetti
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    // Generate unique Receipt and Transaction details
    const timestamp = Date.now();
    const dateObj = new Date();
    const dateFormatted = dateObj.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }) + ' ' + dateObj.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const receiptNo = `BRIL-REC-2026-${timestamp.toString().slice(-4)}`;
    const txnId = `TXN-${(methodUsed || 'UPI').toUpperCase().replace(/[^A-Z]/g, '')}-${timestamp.toString().slice(-10)}`;

    const record = {
        receiptNo,
        txnId,
        date: dateFormatted,
        mode: methodUsed || PaymentState.selectedPaymentMode,
        roll: PaymentState.student.roll,
        name: PaymentState.student.name,
        branch: PaymentState.student.program,
        mobile: PaymentState.student.mobile,
        email: PaymentState.student.email,
        purpose: PaymentState.purpose,
        amount: PaymentState.amount
    };

    // Save to localStorage for permanent retrieval
    saveReceiptToHistory(record);

    // Populate Receipt Modal
    document.getElementById('rcptNo').textContent = record.receiptNo;
    document.getElementById('rcptTxnId').textContent = record.txnId;
    document.getElementById('rcptDate').textContent = record.date;
    document.getElementById('rcptMode').textContent = record.mode;
    document.getElementById('rcptName').textContent = record.name;
    document.getElementById('rcptRoll').textContent = record.roll;
    document.getElementById('rcptBranch').textContent = record.branch;
    document.getElementById('rcptMobile').textContent = record.mobile;
    document.getElementById('rcptParticulars').textContent = record.purpose;

    const formattedAmount = '₹' + record.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });
    document.getElementById('rcptTableAmount').textContent = formattedAmount;
    document.getElementById('rcptTotalPaid').textContent = formattedAmount;
    document.getElementById('rcptAmountWords').textContent = numberToWordsIndian(record.amount) + ' Only';

    // Generate Verification QR for the receipt
    renderReceiptQr(record);

    // Open Receipt Modal
    document.getElementById('receiptModal').classList.add('open');
}

// Generate Receipt Verification QR Code
function renderReceiptQr(record) {
    const holder = document.getElementById('receiptQrCodeHolder');
    if (!holder) return;
    const verifyUrl = `https://b-iet.ac.in/verify-receipt?no=${record.receiptNo}&txn=${record.txnId}&amt=${record.amount}&roll=${record.roll}`;
    safeRenderQr(holder, verifyUrl, 65, '#0000cc');
}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.remove('open');
}

// Convert Number to Words (Indian Numbering System)
function numberToWordsIndian(n) {
    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    function numToWordsUnder1000(num) {
        let str = '';
        if (num >= 100) {
            str += units[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }
        if (num >= 20) {
            str += tens[Math.floor(num / 10)] + ' ';
            num %= 10;
        }
        if (num > 0) {
            str += units[num] + ' ';
        }
        return str.trim();
    }

    if (n === 0) return 'Rupees Zero';

    let result = '';
    const crore = Math.floor(n / 10000000);
    n %= 10000000;
    const lakh = Math.floor(n / 100000);
    n %= 100000;
    const thousand = Math.floor(n / 1000);
    n %= 1000;
    const remaining = n;

    if (crore > 0) result += numToWordsUnder1000(crore) + ' Crore ';
    if (lakh > 0) result += numToWordsUnder1000(lakh) + ' Lakh ';
    if (thousand > 0) result += numToWordsUnder1000(thousand) + ' Thousand ';
    if (remaining > 0) result += numToWordsUnder1000(remaining);

    return 'Rupees ' + result.trim();
}

// Local Storage Receipt Management
function saveReceiptToHistory(record) {
    try {
        let history = JSON.parse(localStorage.getItem('bril_fee_receipts') || '[]');
        history.unshift(record);
        // keep last 50 receipts
        if (history.length > 50) history = history.slice(0, 50);
        localStorage.setItem('bril_fee_receipts', JSON.stringify(history));
    } catch (e) {
        console.error('Storage error:', e);
    }
}

// Past Receipt Lookup Modal
function openLookupModal() {
    document.getElementById('receiptLookupModal').classList.add('open');
    searchPastReceipt(); // Show all available by default
}

function closeLookupModal() {
    document.getElementById('receiptLookupModal').classList.remove('open');
}

function searchPastReceipt() {
    const query = document.getElementById('lookupQuery').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('lookupResults');
    const history = JSON.parse(localStorage.getItem('bril_fee_receipts') || '[]');

    if (!history.length) {
        resultsContainer.innerHTML = '<p class="text-muted" style="padding:10px;">No past receipts saved on this browser yet. Make a payment to generate one!</p>';
        return;
    }

    const filtered = query ? history.filter(r =>
        r.roll.toLowerCase().includes(query) ||
        r.receiptNo.toLowerCase().includes(query) ||
        r.txnId.toLowerCase().includes(query) ||
        r.mobile.includes(query)
    ) : history;

    if (!filtered.length) {
        resultsContainer.innerHTML = `<p class="text-danger" style="padding:10px;">No receipts found matching "${query}".</p>`;
        return;
    }

    let html = '';
    filtered.forEach((r, idx) => {
        html += `
            <div class="lookup-result-item">
                <div>
                    <strong>${r.receiptNo} &bull; ₹${r.amount.toLocaleString('en-IN')}</strong>
                    <div style="font-size:12px;color:#64748b;">${r.name} (${r.roll}) &bull; ${r.purpose}</div>
                    <div style="font-size:11px;color:#94a3b8;">${r.date} &bull; ${r.mode}</div>
                </div>
                <button type="button" class="btn-app-pay" onclick="reprintSavedReceipt(${idx})">
                    <i class="fas fa-print"></i> View
                </button>
            </div>
        `;
    });
    resultsContainer.innerHTML = html;
}

function reprintSavedReceipt(index) {
    const history = JSON.parse(localStorage.getItem('bril_fee_receipts') || '[]');
    const record = history[index];
    if (!record) return;

    closeLookupModal();

    // Populate Receipt
    document.getElementById('rcptNo').textContent = record.receiptNo;
    document.getElementById('rcptTxnId').textContent = record.txnId;
    document.getElementById('rcptDate').textContent = record.date;
    document.getElementById('rcptMode').textContent = record.mode;
    document.getElementById('rcptName').textContent = record.name;
    document.getElementById('rcptRoll').textContent = record.roll;
    document.getElementById('rcptBranch').textContent = record.branch;
    document.getElementById('rcptMobile').textContent = record.mobile;
    document.getElementById('rcptParticulars').textContent = record.purpose;

    const formattedAmount = '₹' + record.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 });
    document.getElementById('rcptTableAmount').textContent = formattedAmount;
    document.getElementById('rcptTotalPaid').textContent = formattedAmount;
    document.getElementById('rcptAmountWords').textContent = numberToWordsIndian(record.amount) + ' Only';

    renderReceiptQr(record);
    document.getElementById('receiptModal').classList.add('open');
}

// Notification Toast Helper
function showNotification(msg) {
    let toast = document.getElementById('brilPortalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'brilPortalToast';
        toast.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: #0f172a;
            color: #ffffff;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            font-size: 13.5px;
            font-weight: 600;
            z-index: 99999;
            transition: all 0.3s;
            border-left: 4px solid #10b981;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
    }, 3000);
}
