let button = document.getElementById("button");

button.addEventListener("click", () => {
  var bday = document.getElementById("bday").value;
  var answer = findStarSign(bday);
});

function findStarSign(bday) {
  var birthdate = new Date(bday);
  var month = getMonth(birthdate);
  var dayOfMonth = getDate(birthdate);
}
