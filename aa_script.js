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
            result.innerHTML = "<p></p> <img src=\"https://cdn.thinglink.me/api/image/755594044700098561/1240/10/scaletowidth\" alt=\"Capricorn\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://astrobutterfly.com/wp-content/uploads/2019/02/aquariu-waterbearer.jpg\" alt=\"Aquarius\">";
        }
    }
    if (month == 1) {
        if (dayOfMonth <= 19) {
            result.innerHTML = "<p></p> <img src=\"https://astrobutterfly.com/wp-content/uploads/2019/02/aquariu-waterbearer.jpg\" alt=\"Aquarius\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://alignedsigns.com/wp-content/uploads/2013/02/piscesrb.jpg\" alt=\"Pisces\">";
        }
    }
    if (month == 2) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p></p> <img src=\"https://alignedsigns.com/wp-content/uploads/2013/02/piscesrb.jpg\" alt=\"Pisces\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://www.crystalinks.com/ariesrb.jpg\" alt=\"Aries\">";
        }
    }
    if (month == 3) {
        if (dayOfMonth <= 19) {
            result.innerHTML = "<p></p> <img src=\"https://www.crystalinks.com/ariesrb.jpg\" alt=\"Aries\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://i.pinimg.com/originals/21/89/06/218906fae0537b5e2f57b0eaf68fdf99.jpg\" alt=\"Taurus\">";
        }
    }
    if (month == 4) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p></p> <img src=\"https://i.pinimg.com/originals/21/89/06/218906fae0537b5e2f57b0eaf68fdf99.jpg\" alt=\"Taurus\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://2.bp.blogspot.com/-V3hl4BUsj54/WKab_Pc3gJI/AAAAAAAAAYo/JxkGVVU_0Jsq6N6pg6aklz18OeEb0Vn3QCLcB/s1600/geminirb.jpg\" alt=\"Gemini\">";
        }
    }
    if (month == 5) {
        if (dayOfMonth <= 21) {
            result.innerHTML = "<p></p> <img src=\"https://2.bp.blogspot.com/-V3hl4BUsj54/WKab_Pc3gJI/AAAAAAAAAYo/JxkGVVU_0Jsq6N6pg6aklz18OeEb0Vn3QCLcB/s1600/geminirb.jpg\" alt=\"Gemini\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://www.andrewsmith.ie/wp-content/uploads/2018/07/cancerrb.jpg\" alt=\"Cancer\">";
        }
    }
    if (month == 6) {
        if (dayOfMonth <= 23) {
            result.innerHTML = "<p></p> <img src=\"https://www.andrewsmith.ie/wp-content/uploads/2018/07/cancerrb.jpg\" alt=\"Cancer\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://cdn.thinglink.me/api/image/755596593385701376/1240/10/scaletowidth\" alt=\"Leo\">";
        }
    }
    if (month == 7) {
        if (dayOfMonth <= 23) {
            result.innerHTML = "<p></p> <img src=\"https://cdn.thinglink.me/api/image/755596593385701376/1240/10/scaletowidth\" alt=\"Leo\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://kabbalahmetaphysics137.com/wp-content/uploads/2016/09/virgoNew.jpg\" alt=\"Virgo\">";
        }
    }
    if (month == 8) {
        if (dayOfMonth <= 22) {
            result.innerHTML = "<p></p> <img src=\"https://kabbalahmetaphysics137.com/wp-content/uploads/2016/09/virgoNew.jpg\" alt=\"Virgo\">";
        } else {
            result.innerHTML = "<img class=\"libra\" src=\"https://i.pinimg.com/originals/7e/f6/5e/7ef65ee60c3283be8863259c75321fcd.jpg\" alt=\"Libra\"> <p>Libra</p>";
        }
    }
    if (month == 9) {
        if (dayOfMonth <= 22) {
            result.innerHTML = "<img class=\"libra\" src=\"https://i.pinimg.com/originals/7e/f6/5e/7ef65ee60c3283be8863259c75321fcd.jpg\" alt=\"Libra\"> <p>Libra</p>";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://lh3.googleusercontent.com/proxy/INDWUE54w0B4mpLbSMN_SzpQx8SMBznmClC3mW3yh58bEbdNGsD7Fa2qb9v3VptkGHT60DObVsZoxdjpVK_T-dOiQGwN0mKijqNRd-PPAjFInadRvnp9XliyWtL7p1uepoN8KSX4\" alt=\"Scorpio\">";
        }
    }
    if (month == 10) {
        if (dayOfMonth <= 22) {
            result.innerHTML = "<p></p> <img src=\"https://lh3.googleusercontent.com/proxy/INDWUE54w0B4mpLbSMN_SzpQx8SMBznmClC3mW3yh58bEbdNGsD7Fa2qb9v3VptkGHT60DObVsZoxdjpVK_T-dOiQGwN0mKijqNRd-PPAjFInadRvnp9XliyWtL7p1uepoN8KSX4\" alt=\"Scorpio\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://4.bp.blogspot.com/-CHruO7NsjjI/WRp3_vU9IeI/AAAAAAAAC6Q/6t0xAMHaMFU0rMocOFMaDrgeTlXGO1ThQCLcB/s1600/Bintang%2BSagitarius.jpg\" alt=\"Sagittarius\">";
        }
    }
    if (month == 11) {
        if (dayOfMonth <= 20) {
            result.innerHTML = "<p></p> <img src=\"https://4.bp.blogspot.com/-CHruO7NsjjI/WRp3_vU9IeI/AAAAAAAAC6Q/6t0xAMHaMFU0rMocOFMaDrgeTlXGO1ThQCLcB/s1600/Bintang%2BSagitarius.jpg\" alt=\"Sagittarius\">";
        } else {
            result.innerHTML = "<p></p> <img src=\"https://cdn.thinglink.me/api/image/755594044700098561/1240/10/scaletowidth\" alt=\"Capricorn\">";
        }
    }
}

