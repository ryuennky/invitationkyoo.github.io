let attempts = 0;

function yes() {

    document.getElementById("question").innerHTML =
        "YAY! ❤️";

    document.getElementById("message").innerHTML =
        "Application accepted!<br><br>" +
        "Now we just need to figure out where we're going. 😊";

    document.querySelector(".buttons").style.display = "none";
}


function no() {

    attempts++;

    if (attempts === 1) {

        document.getElementById("question").innerHTML =
            "Why not? 🥺";

    }

    else if (attempts === 2) {

        document.getElementById("question").innerHTML =
            "Are you sure? 😭";

    }

    else if (attempts === 3) {

        document.getElementById("question").innerHTML =
            "Think about it one more time... 👀";

    }

    else {

        document.getElementById("question").innerHTML =
            "Okay... I respect your decision. 😔";

        document.getElementById("message").innerHTML =
            "Application declined.<br>" +
            "Thank you for considering my application.";

        document.querySelector(".buttons").style.display = "none";
    }
}