// =========================================================
// SEU Tech Event - Lab 03 JavaScript
// Uses the concepts required by the lab manual:
// let, operators, if...else, functions, onclick,
// document.getElementById(), .textContent and .value.
// =========================================================

let availableSeats = 12;

function checkRegistration() {
    document.getElementById("registrationStatus").textContent =
        "Registration is currently open.";
}

function checkSeats() {
    if (availableSeats > 0) {
        document.getElementById("seatMessage").textContent =
            "Seats are available. " + availableSeats + " seats are currently remaining.";
    } else {
        document.getElementById("seatMessage").textContent =
            "Sorry, no seats are currently available.";
    }
}

function showGreeting() {
    let studentName = document.getElementById("studentName").value;

    if (studentName === "") {
        document.getElementById("greetingMessage").textContent =
            "Please enter your full name first.";
    } else {
        document.getElementById("greetingMessage").textContent =
            "Welcome, " + studentName + "! We look forward to seeing you at the SEU Tech Event.";
    }
}

// Additional simple interaction required for the weekly practical task.
function showReminder() {
    document.getElementById("reminderMessage").textContent =
        "Reminder: SEU Tech Event is scheduled for 10 October, 2026.";
}
