var button = document.getElementById("button");
var result = document.getElementById("result");

button.addEventListener("click", () => {
    var input = document.getElementById("dateInput").value;
    var birthdate = new Date(input);
    var answer = findStarSign(birthdate);
});

function findStarSign(birthdate) {
    var month = birthdate.getMonth();
    var dayOfMonth = birthdate.getDate();
    if (month == 0) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p>Capricorn</p><img src= >";
        } else {
            result.innerHTML = "<p>Aquarius</p>";
        }
    }
    if (month == 1) {
        if (dayOfMonth <= 19) {
            result.innerHTML = "<p>Aquarius</p>";
        } else {
            result.innerHTML = "<p>Pisces</p>";
        }
    }
    if (month == 2) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p>Pisces</p>";
        } else {
            result.innerHTML = "<p>Aries</p>";
        }
    }
    if (month == 3) {
        if (dayOfMonth <= 19) {
            result.innerHTML = "<p>Aries</p>";
        } else {
            result.innerHTML = "<p>Taurus</p>";
        }
    }
    if (month == 4) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p>Taurus</p>";
        } else {
            result.innerHTML = "<p>Gemini</p>";
        }
    }
    if (month == 5) {
        if (dayOfMonth <= 21) {
            result.innerHTML = "<p>Gemini</p>";
        } else {
            result.innerHTML = "<p>Cancer</p>";
        }
    }
    if (month == 6) {
        if (dayOfMonth <= 23) {
            result.innerHTML = "<p>Cancer</p>";
        } else {
            result.innerHTML = "<p>Leo</p>";
        }
    }
    if (month == 7) {
        if (dayOfMonth <= 23) {
            result.innerHTML = "<p>Leo</p>";
        } else {
            result.innerHTML = "<p>Virgo</p>";
        }
    }
    if (month == 8) {
        if (dayOfMonth <= 22) {
            result.innerHTML = "<p>Virgo</p>";
        } else {
            result.innerHTML = "<p>Libra</p>";
        }
    }
    if (month == 9) {
        if (dayOfMonth <= 22) {
            result.innerHTML = "<p>Libra</p>";
        } else {
            result.innerHTML = "<p>Scorpio</p>";
        }
    }
    if (month == 10) {
        if (dayOfMonth <= 22) {
            result.innerHTML = "<p>Scorpio</p>";
        } else {
            result.innerHTML = "<p>Sagittarius</p>";
        }
    }
    if (month == 11) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p>Sagittarius</p>";
        } else {
            result.innerHTML = "<p>Capricorn</p>";
        }
    }
}

