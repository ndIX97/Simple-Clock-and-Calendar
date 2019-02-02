let hours = document.getElementById("hours");
let hlabel = document.getElementById("label");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let month = document.getElementById("month");
let monthlabel = document.getElementById("label-month");
let day = document.getElementById("day");
let daylabel = document.getElementById("label-date");
let year = document.getElementById("year");

let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
let weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    hours.textContent = (hour > 12 ? hour - 12 : hour);
    label.textContent = (hour > 12 ? 'pm' : 'am');
    minutes.textContent = date.getMinutes();
    seconds.textContent = date.getSeconds();
    month.textContent = date.getMonth();
    monthlabel.textContent = months[date.getMonth()];
    day.textContent = date.getDate();
    daylabel.textContent = weekdays[date.getDay()];
    let getyear = date.getUTCFullYear();
    getyear = String(getyear).split("").slice(2).join("");
    year.textContent = getyear;
}, 1000)