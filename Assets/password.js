// list of lowercase letters
const lowAlpha = "abcdefghijklmnopqrstuvwxyz"
// list of uppercase letters
const upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"



// function
function password () {
    lower();
    upper();
    numb();
    spec();
}

function plength (lower, upper, numb, spec) {
    var passlength = prompt("How many characters do you want your password to be?");
    // provide a length for the password (8 - 128 characters)
    if ((passlength > "8") || passlength < "128") {
        var ran = alert
    } else {
        alert("That isn't a valid option");
        return plength();
    }
}

// make a lowercase letters function
function lower() {
    // list of lowercase letters
    const lowAlpha = "abcdefghijklmnopqrstuvwxyz";
    // ask the user if they want to add a lowercase
    var lower = prompt("Do you want to add a lowercase?")
    if (lower === "y"){
        return lowAlpha[Math.floor(Math.random() * lowAlpha.length)];
    } else if (lower === "n") {
    } else {
        alert("Not a valid choice. Pick again");
        lower();
    }
}

// make an uppercase letters function
function upper() {
    // list of uppercase letters
    const upAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // ask the user if they want to add an uppercase
    var upper = prompt("Do you want to add a lowercase?")
    if (upper === "y"){
        return upAlpha[Math.floor(Math.random() * upAlpha.length)];
    } else if (upper === "n") {
    } else {
        alert("Not a valid choice. Pick again");
        upper();
    }
}

// make a numbers function
function numb() {
    // list of numbers from 0 to 9
    const digit = "0123456789";
    // ask the user if they want to add a number
    var num = prompt("Do you want to add a number?")
    // if the user says yes or no
    if (num === "y") {
        return digit[Math.floor(Math.random() * 10)];
    } else if (num === "n") {
    } else {
        alert("Not a valid choice. Pick again");
        numb();
    }
}

// make a special characters function
function spec () {
    // list of special characters
    const char = "!@#$%^&*~<>?";
    // ask the user if they want to add a special character
    var special = prompt("Do you want to add a special character?")
    // if the user says yes or no
    if (special === "y") {
        return char[Math.floor(Math.random() * char.length)];
    } else if (special === "n") {       
    } else {
        alert("Not a valid choice. Pick again");
        spec();
    }
}

// input is validated

password ();

// password is shown
alert("Your randomized password is " + plength());