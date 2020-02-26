var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", () => {
    var input = document.getElementById("dateInput").value;
    var birthdate = new Date("input");
    var answer = findStarSign(input);
});

function findStarSign() {
    var month = birthdate.getMonth();
    var dayOfMonth = birthdate.getDate();
    if (month == 0) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p>Capricorn</p>";
        } else {
            aquarius
        }
    }
    if (month == 1) {
        if (dayOfMonth <= 19) {
            aquarius
        } else {
            pisces
        }
    }
    if (month == 2) {
        if (dayOfMonth <= 20) {
            pisces
        } else {
            aries
        }
    }
    if (month == 3) {
        if (dayOfMonth <= 19) {
            aries
        } else {
            taurus
        }
    }
    if (month == 4) {
        if (dayOfMonth <= 20) {
            taurus
        } else {
            gemini
        }
    }
    if (month == 5) {
        if (dayOfMonth <= 21) {
            gemini
        } else {
            cancer
        }
    }
    if (month == 6) {
        if (dayOfMonth <= ) {
            capricon
        } else {
            aquarius
        }
    }
    if (month == 7) {
        if (dayOfMonth <= 22) {
            return "leo";
        } else {
            return "virgo";
        }
    }
    if (month == 8) {
        if (dayOfMonth <= 22) {
            return "virgo";
        } else {
            return "libra";
        }
    }
    if (month == 9) {
        if (dayOfMonth <= 22) {
            return "libra";
        } else {
            return "scorpio"
        }
    }
    if (month == 10) {
        if (dayOfMonth <= 21) {
            return "scorpio";
        } else {
            result.innerHTML = "<p>Capricorn</p>";
        }
    }
    if (month == 11) {
        if (dayOfMonth <= 21) {
            result.innerHTML = "<p>Capricorn</p>";
        } else {
            return "capricorn";
        }
    }
}

