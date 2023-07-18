var emailEntry = document.querySelector("#email");
var emailForm = document.querySelector("#emailForm");
var priorEmailsBelow = document.querySelector("#priorEmailsBelow")

var emails = [];

console.log (emailEntry);
console.log (emailForm) ;

function renderEmails () {
    priorEmailsBelow.innerHTML = "";
    for (var i = 0; i < emails.length; i++) {
        var userEmail = emails[i];

        var li = document.createElement("li");
        li.textContent = userEmail;
        li.setAttribute("data-index", i);

        priorEmailsBelow.appendChild(li);
    }
    console.log("render emails running")
}

function init() {
    var storedEmails = JSON.parse(localStorage.getItem("storedEmails"));
    if (storedEmails !== null) {
        emails = storedEmails;
        console.log("if statement triggered");
    }
    console.log("if statement not triggered")
    renderEmails();
}

function storeEmails() {
    localStorage.setItem("Emails entered: ", JSON.stringify(emails));
    console.log(JSON.stringify(emails));
}

console.log("no event listener?"); 

emailForm.addEventListener("submit", emailSubmitted);

function emailSubmitted (event) {
    event.preventDefault();
    console.log("event listener added");

    var emailEntered = emailEntry.value.trim();
    
    if (emailEntered === "") {
        console.log("other if statement triggered");
        return;
        
    }

    emails.push(emailEntered);
    // emailEntered.value = "";
    console.log ("Email added to array - " + emails)
    console.log ("Email pushed to local storage" + emailEntry.value)

    storeEmails();
    renderEmails();

}

// 
init();