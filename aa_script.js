let button = document.getElementById("button");

button.addEventListener("click", () => {
    var bday = document.getElementById("bday").value;
    var answer = findStarSign(bday);
});

function findStarSign(bday) {
    var birthdate = new Date(bday);
    var month = getMonth(birthdate);
    var dayOfMonth = getDate(birthdate);
    if (month == 1) {
        if (dayOfMonth <= 20) {
            capricon
        } else {
            aquarius
        }
    }
    if (month == 2) {
        if (dayOfMonth <= 19) {
            aquarius
        } else {
            pisces
        }
    }
  if (month == 3) {
      if (dayOfMonth <= 20){
          pisces
      } else {
          aries
      }
  }
  if (month == 4) {
      if (dayOfMonth <= 19){
          aries
      } else {
          taurus
      }
  }
  if (month == 5) {
      if (dayOfMonth <= 20){
          taurus
      } else {
          gemini
      }
  }
  if (month == 6) {
      if (dayOfMonth <= 21){
          gemini
      } else {
          cancer
      }
  }
  if (month == 7) {
      if (dayOfMonth <= ){
          capricon
      } else {
          aquarius
      }
  }
  if (month == 8) {
      if (dayOfMonth <= 22){
          return "leo";
      } else {
          return "virgo";
      }
  }
   if (month == 9) {
      if (dayOfMonth <= 22){
          return "virgo";
      } else {
          return "libra";
      }
  }
   if (month == 10) {
      if (dayOfMonth <= 22){
          return "libra";
      } else {
          return "scorpio"
      }
  }
   if (month == 11) {
      if (dayOfMonth <= 21){
         return "scorpio";
      } else {
          return "sagittarius";
      }
  }
   if (month == 12) {
      if (dayOfMonth <= 21){
          return "sagittarius";
      } else {
          return "capricorn";
      }
  }
}
