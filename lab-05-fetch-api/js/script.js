// =========================================================
// SEU Tech Event - Lab 04 JavaScript
// Forms, Validation, JSON and Local Storage
// =========================================================


// =========================================================
// EXISTING LAB 03 CODE
// =========================================================

let availableSeats = 12;


// Existing Lab 03 function
function checkRegistration() {

    document.getElementById("registrationStatus").textContent =
        "Registration is currently open.";

}


// Existing Lab 03 function
function checkSeats() {

    if (availableSeats > 0) {

        document.getElementById("seatMessage").textContent =
            "Seats are available. " + availableSeats +
            " seats are currently remaining.";

    } else {

        document.getElementById("seatMessage").textContent =
            "Sorry, no seats are currently available.";

    }

}


// =========================================================
// LAB 04 NEW
// REGISTER FORM
// =========================================================

function submitRegistration() {


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Read the values from the form
    // -----------------------------------------------------

    let name =
        document.getElementById("studentName").value;

    let studentId =
        document.getElementById("studentId").value;

    let email =
        document.getElementById("studentEmail").value;

    let workshop =
        document.getElementById("workshop").value;


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Find the element where validation messages
    // will be displayed
    // -----------------------------------------------------

    let message =
        document.getElementById("formMessage");


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Check Full Name
    // -----------------------------------------------------

    if (name === "") {

        message.textContent =
            "Please enter your full name.";

        return;
    }


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Check Student ID
    // -----------------------------------------------------

    if (studentId === "") {

        message.textContent =
            "Please enter your Student ID.";

        return;
    }


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Check Email
    // -----------------------------------------------------

    if (email === "") {

        message.textContent =
            "Please enter your email address.";

        return;
    }


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Check Workshop
    // -----------------------------------------------------

    if (workshop === "") {

        message.textContent =
            "Please select a workshop.";

        return;
    }


    // =====================================================
    // LAB 04 NEW:
    // Create registration object
    // =====================================================

    let registration = {

        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop

    };


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Convert JavaScript object into JSON text
    // -----------------------------------------------------

    let jsonData =
        JSON.stringify(registration);


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Save JSON data in browser localStorage
    // -----------------------------------------------------

    localStorage.setItem(
        "registration",
        jsonData
    );


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Display JSON data on webpage
    // -----------------------------------------------------

    document.getElementById("jsonOutput").textContent =
        jsonData;


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Show successful registration message
    // -----------------------------------------------------

    message.textContent =
        "Registration saved successfully.";

}


// =========================================================
// LAB 04 NEW
// SHOW SAVED REGISTRATION
// =========================================================

function showSavedRegistration() {


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Get saved JSON data from localStorage
    // -----------------------------------------------------

    let savedData =
        localStorage.getItem("registration");


    // Find the output element
    let output =
        document.getElementById("savedMessage");


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Check whether saved data exists
    // -----------------------------------------------------

    if (savedData === null) {

        output.textContent =
            "No saved registration was found.";

        return;
    }


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Convert JSON text back into a JavaScript object
    // -----------------------------------------------------

    let registration =
        JSON.parse(savedData);


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Display the saved registration
    // -----------------------------------------------------

    output.textContent =
        registration.name +
        " (Student ID: " +
        registration.studentId +
        ") registered with " +
        registration.email +
        " for " +
        registration.workshop +
        ".";

}


// =========================================================
// LAB 04 NEW
// CLEAR SAVED REGISTRATION
// =========================================================

function clearRegistration() {


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Remove registration from localStorage
    // -----------------------------------------------------

    localStorage.removeItem("registration");


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Reset JSON output
    // -----------------------------------------------------

    document.getElementById("jsonOutput").textContent =
        "No registration saved yet.";


    // -----------------------------------------------------
    // LAB 04 NEW:
    // Show confirmation
    // -----------------------------------------------------

    document.getElementById("savedMessage").textContent =
        "Saved registration cleared.";

}


// =========================================================
// EXISTING LAB 03 FUNCTION
// =========================================================

function showGreeting() {

    let studentName =
        document.getElementById("studentName").value;

    if (studentName === "") {

        document.getElementById("greetingMessage").textContent =
            "Please enter your full name first.";

    } else {

        document.getElementById("greetingMessage").textContent =
            "Welcome, " + studentName +
            "! We look forward to seeing you at the SEU Tech Event.";

    }

}


// =========================================================
// EXISTING LAB 03 FUNCTION
// =========================================================

function showReminder() {

    document.getElementById("reminderMessage").textContent =
        "Reminder: SEU Tech Event is scheduled for 10 October, 2026.";

}


// Added Lab 05 Fetch function to load workshop JSON data.
async function loadWorkshop() {

    document.getElementById("loadMessage").textContent =
        "Loading workshop information...";

    const response = await fetch("data/workshop.json");

    if (response.status === 200) {

        const workshop = await response.json();

        document.getElementById("workshopTitle").textContent =
            workshop.title;

        document.getElementById("workshopDate").textContent =
            workshop.date;

        document.getElementById("workshopVenue").textContent =
            workshop.venue;

        document.getElementById("workshopSeats").textContent =
            workshop.seats;

        document.getElementById("workshopInstructor").textContent =
            workshop.instructor;

        document.getElementById("workshopDuration").textContent =
            workshop.duration;

        document.getElementById("loadMessage").textContent =
            "Workshop data loaded successfully.";

    } else {

        document.getElementById("loadMessage").textContent =
            "Could not load workshop data.";

    }

}


// Added Lab 05 public API practice function using JSONPlaceholder.
async function loadSampleUser() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (response.status === 200) {

        const user = await response.json();

        document.getElementById("apiUser").textContent =
           "Student Name: Abid | API Data Loaded Successfully";

    } else {

        document.getElementById("apiUser").textContent =
            "Could not load API data.";

    }

}