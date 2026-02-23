// STEP 1: Emergency Call
// --------------------------
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = true; // partial results
recognition.lang = "en-US";

const speakBtn = document.getElementById("speak-btn");
const outputDiv = document.getElementById("output");

// Preset numbers
const numbers = {
    son: "03001234567",
    daughter: "03007654321",
    emergency: "1122"
};

// Flexible keyword detection
const sonKeywords = ["son", "sun", "san", "sen"];

// Detect commands
function detectCommand(speechText) {
    const text = speechText.toLowerCase().trim();

    if (text.includes("call") && sonKeywords.some(word => text.includes(word))) {
        return "callSon";
    } else if (text.includes("call") && text.includes("daughter")) {
        return "callDaughter";
    } else if (text.includes("help") || text.includes("emergency")) {
        return "callEmergency";
    } else {
        return null;
    }
}

// Speak response & open dialer / WhatsApp
function speakResponse(command) {
    let message = "";
    let numberToCall = "";
    let openWhatsApp = false;

    if (command === "callSon") {
        message = "Opening WhatsApp chat with your son!";
        numberToCall = "923001234567";
        openWhatsApp = true;
    } else if (command === "callDaughter") {
        message = "Opening WhatsApp chat with your daughter!";
        numberToCall = "923007654321";
        openWhatsApp = true;
    } else if (command === "callEmergency") {
        message = "Calling emergency number now!";
        numberToCall = numbers.emergency;
        openWhatsApp = false;
    } else {
        message = "Sorry, I didn't understand.";
    }

    // Speak message
    const utter = new SpeechSynthesisUtterance(message);
    utter.lang = "en-US";
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);

    // Open dialer or WhatsApp after 1 second
    if (numberToCall) {
        setTimeout(() => {
            if (openWhatsApp) {
                window.location.href = `whatsapp://send?phone=${numberToCall}&text=Hello`;
            } else {
                window.location.href = `tel:${numberToCall}`;
            }
        }, 1000);
    }
}

// Smart timeout for faster response
let typingTimeout;
recognition.onresult = function (event) {
    let transcript = "";
    for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }

    outputDiv.innerText = transcript;

    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        const command = detectCommand(transcript);
        speakResponse(command);
    }, 600); // 0.6 sec after last word
};

recognition.onend = function () {
    speakBtn.disabled = false;
};

speakBtn.addEventListener("click", function () {
    recognition.start();
    speakBtn.disabled = true;
});

// Emergency button function
function callEmergency() {
    speakResponse("callEmergency");
}

// --------------------------
// STEP 2: Medicine Reminder
// --------------------------
let reminders = JSON.parse(localStorage.getItem("medReminders") || "[]");
const remindersDiv = document.getElementById("reminders");

// Display reminders
function displayReminders() {
    remindersDiv.innerHTML = "";
    for (let i = 0; i < reminders.length; i++) {
        let r = reminders[i];
        remindersDiv.innerHTML += `
            <div class="reminder">
                <span>${r.name} at ${r.time}</span>
                <button onclick="markTaken(${i})">✅ Taken</button>
                <button onclick="removeReminder(${i})">❌ Remove</button>
                <span class="taken">${r.taken ? "✅ Taken" : ""}</span>
            </div>
        `;
    }
}

// Mark as taken
function markTaken(index) {
    reminders[index].taken = true;
    localStorage.setItem("medReminders", JSON.stringify(reminders));
    displayReminders();
}

// Remove reminder
function removeReminder(index) {
    reminders.splice(index, 1);
    localStorage.setItem("medReminders", JSON.stringify(reminders));
    displayReminders();
}

// Add new reminder
const addBtn = document.getElementById("add-med");
addBtn.addEventListener("click", function () {
    const name = document.getElementById("med-name").value.trim();
    const time = document.getElementById("med-time").value;
    if (!name || !time) {
        alert("Please enter medicine name and time");
        return;
    }

    reminders.push({ name: name, time: time, taken: false });
    localStorage.setItem("medReminders", JSON.stringify(reminders));
    displayReminders();

    document.getElementById("med-name").value = "";
    document.getElementById("med-time").value = "";
});

displayReminders();

// Check every 30 seconds for due medicine
setInterval(function () {
    let now = new Date();
    let currentTime = now.toTimeString().slice(0, 5);

    for (let i = 0; i < reminders.length; i++) {
        let r = reminders[i];
        if (!r.taken && r.time === currentTime) {
            let msg = new SpeechSynthesisUtterance(`Time to take your medicine: ${r.name}`);
            msg.lang = "en-US";
            speechSynthesis.speak(msg);
        }
    }
}, 30000);