// HTML items
var emailEntry = document.querySelector("#email");
var emailForm = document.querySelector("#emailForm");
var priorEmailsBelow = document.querySelector("#priorEmailsBelow")

// array of submitted emails
var emails = [];

// function to print emails to the page
function renderEmails() {
    // this keeps the emails from doubling up in the for loop
    priorEmailsBelow.innerHTML = "";

    for (var i = 0; i < emails.length; i++) {
        var userEmail = emails[i];

        var li = document.createElement("li");
        li.textContent = userEmail;
        li.setAttribute("data-index", i);
        li.style.borderRadius = "5px";
        li.style.marginBottom = "5px";
        li.style.color = "white";
        li.style.padding = "5px";

        // currently appending emails as list items
        priorEmailsBelow.appendChild(li);
    }
}

// function to initiate the whole program
function init() {
    var storedEmails = JSON.parse(localStorage.getItem("Emails entered: "));
    if (storedEmails !== null) {
        emails = storedEmails;
    }
    renderEmails();
}

// stores the emails to local storage
function storeEmails() {
    localStorage.setItem("Emails entered: ", JSON.stringify(emails));
}

// listens to when a user clicks subscribe and then saves their email in the following function
emailForm.addEventListener("submit", emailSubmitted);

function emailSubmitted(event) {
    event.preventDefault();
    console.log("event listener added");

    var emailEntered = emailEntry.value.trim();

    if (emailEntered === "") {
        console.log("other if statement triggered");
        return;

    }
    // adds the newly entered email to the emails array
    emails.push(emailEntered);

    // every time the user clicks submit, the emails are stored locally and rendered to the page
    storeEmails();
    renderEmails();

}

// start it up
init();