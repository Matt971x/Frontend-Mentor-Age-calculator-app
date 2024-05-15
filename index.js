const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const inputResult = document.querySelector(".result");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

let user_date = new Date(1961, 4, 18);

let current_date = new Date();

let totalOfDayLeft = (current_date - user_date) / 86400000;

let totalMonthLeft = 12 - (user_date.getMonth() - current_date.getMonth());
let numberOfYear = Math.floor(totalOfDayLeft / 365);
let numberOfDay = current_date.getUTCDate() - user_date.getUTCDate();

if (numberOfDay <= 0) {
  document.querySelector(".days").textContent =
    daysInMonth(currentYear, currentMonth) + numberOfDay;
  numberOfYear--;
} else {
  document.querySelector(".days").textContent = numberOfDay;
}

document.querySelector(".years").innerHTML = numberOfYear;

document.querySelector(".months").textContent =
  totalMonthLeft >= 12 ? totalMonthLeft - 12 : totalMonthLeft;
