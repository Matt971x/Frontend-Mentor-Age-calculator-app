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

const inputYear = document.querySelector("#year");
const inputMonth = document.querySelector("#month");
const inputDay = document.querySelector("#day");
const submitBtn = document.querySelector(".submitBtn");

inputYear.addEventListener("input", (e) => {
  if (
    isNaN(e.target.value) ||
    e.target.value > new Date().getFullYear() ||
    e.target.value === ""
  ) {
    e.target.value > new Date().getFullYear()
      ? (document.querySelector(".error_year").textContent =
          "must be a valid paste")
      : (document.querySelector(".error_year").textContent =
          "must be a valid date");
    console.log("error");
    years = null;
  } else {
    document.querySelector(".error_year").textContent = "";
    years = parseInt(e.target.value);
  }
});

inputMonth.addEventListener("input", (e) => {
  if (
    isNaN(e.target.value) ||
    e.target.value > 12 ||
    e.target.value < 1 ||
    e.target.value === ""
  ) {
    e.target.value > 12
      ? (document.querySelector(".error_month").textContent =
          "Must be a valid month")
      : (document.querySelector(".error_month").textContent =
          " must me a valid date");
    months = null;
  } else {
    months = parseInt(e.target.value);
    document.querySelector(".error_month").textContent = "";
  }
});

inputDay.addEventListener("input", (e) => {
  if (
    isNaN(e.target.value) ||
    e.target.value > 31 ||
    e.target.value < 1 ||
    e.target.value === ""
  ) {
    document.querySelector(".error_day").textContent = "must be a valid date";
    days = null;
  } else {
    days = parseInt(e.target.value);
    document.querySelector(".error_day").textContent = "";
  }
});

submitBtn.addEventListener("click", (e) => {
  if (years === undefined || months === undefined || days === undefined) {
    document.querySelector(".error_day").textContent =
      "This filed is requiered";
    document.querySelector(".error_month").textContent =
      "This filed is requiered";
    document.querySelector(".error_year").textContent =
      "This filed is requiered";
  } else {
    if (years === null || months === null || days === null) {
      alert("Please enter a valid date.");
    } else {
      ageCalculator();
    }
  }
});
