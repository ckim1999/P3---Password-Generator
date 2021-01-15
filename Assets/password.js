// function
function password () {
    // ask the user if they want to add a lowercase
    var lower = prompt("Do you want to add a lowercase?")
    // if the user says yes or no
    if (lower === "y") {
        // ask the user if they want to add an uppercase
        var upper = prompt("Do you want to add an uppercase?")
        // if the user says yes or no
        if (upper === "y") {
            // ask the user if they want to add a number
            var num = prompt("Do you want to add a number?")
            // if the user says yes or no
            if (num === "y") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            } else if (num === "n") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            }
        } else if (upper === "n") {
            // ask the user if they want to add a number
            var num = prompt("Do you want to add a number?")
            // if the user says yes or no
            if (num === "y") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            } else if (num === "n") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            }
        }
    } else if (lower === "n") {
        // ask the user if they want to add an uppercase
        var upper = prompt("Do you want to add an uppercase?")
        // if the user says yes or no
        if (upper === "y") {
            // ask the user if they want to add a number
            var num = prompt("Do you want to add a number?")
            // if the user says yes or no
            if (num === "y") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            } else if (num === "n") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            }
        } else if (upper === "n") {
            // ask the user if they want to add a number
            var num = prompt("Do you want to add a number?")
            // if the user says yes or no
            if (num === "y") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    var passlength = prompt("How many characters do you want your password to be?");
                }
            } else if (num === "n") {
                // ask the user if they want to add a special character
                var special = prompt("Do you want to add a special character?")
                // if the user says yes or no
                if (special === "y") {
                    var passlength = prompt("How many characters do you want your password to be?");
                } else if (special === "n") {
                    alert("You need to pick at least one of the characters");
                    return password ();
                }
            }
        }
    }
}

// provide a length for the password (8 - 128 characters)

// input is validated

// password is shown

password ();