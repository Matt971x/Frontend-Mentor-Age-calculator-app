let years;
let months;
let days;

const ageCalculator = () => {
  user_date = new Date(years, months - 1, days);
  let current_date = new Date();
  diff = current_date - user_date;
  let age = new Date(diff);
  let year = Math.abs(age.getUTCFullYear() - 1970);
  let month = age.getUTCMonth();
  let day = age.getUTCDate() - 1;

  document.querySelector(".years").textContent = year;
  document.querySelector(".months").textContent = month;
  document.querySelector(".days").textContent = day;
};

/* 
l'utilisateur rentre sa date de naissance.
recupérer sa date de naissance.
*/

const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");
const submitBtn = document.querySelector(".submitBtn");

inputYear.addEventListener("input", (e) => {
  years = parseInt(e.target.value);
  if (isNaN(years)) {
    document.querySelector(".error_year").textContent = "must be a valid date";
    console.log("error");
  } else {
    years > new Date().getFullYear()
      ? (document.querySelector(".error_year").textContent =
          "must be a valid paste")
      : (document.querySelector(".error_year").textContent = "");
    years = parseInt(e.target.value);
  }
});

inputMonth.addEventListener("input", (e) => {
  months = parseInt(e.target.value);
  if (isNaN(months)) {
    document.querySelector(".error_month").textContent =
      " must me a valid date";
  } else {
    months = parseInt(e.target.value);
    document.querySelector(".error_month").textContent = "";
  }
});

inputDay.addEventListener("input", (e) => {
  days = parseInt(e.target.value);
  if (isNaN(days)) {
    document.querySelector(".error_day").textContent = "must be a valid date";
  } else {
    days = parseInt(e.target.value);
    document.querySelector(".error_day").textContent = "";
  }
});

/*


faire la difference entre la date du jours et la date de naissance.
afficher le temps ecoulé depuis la naissance 


*/

submitBtn.addEventListener("click", ageCalculator);
