// Setting up the current day of the week to show in the header using moment js

var today = moment();
var dayWeek = today.format("[Today is] dddd, MMMM Do");
$("#currentDay").text(dayWeek);

// Creating colorized note blocks - use jQuery .each to iterate and execute function over textarea

let currentHour = parseInt(moment().format("H"));

// Compares current time hour to name in text area

// Set up the name in text area in 24hr time to make it easier to calculate

$("textarea").each(function () {
  let color = parseInt($(this).attr("name"));
  if (color === currentHour) {
    $(this).addClass("present");
  }
  if (color > currentHour) {
    $(this).addClass("future");
  }
  if (color < currentHour) {
    $(this).addClass("past");
  }
});

// jQuery Event Listener on click and added items to local storage when save button is clicked
let saveButton = $(".btn");
saveButton.on("click", function save() {
  let fieldValue1 = document.getElementById("9AM").value;
  localStorage.setItem("9notes", fieldValue1);

  let fieldValue2 = document.getElementById("10AM").value;
  localStorage.setItem("10notes", fieldValue2);

  let fieldValue3 = document.getElementById("11AM").value;
  localStorage.setItem("11notes", fieldValue3);

  let fieldValue4 = document.getElementById("12PM").value;
  localStorage.setItem("12notes", fieldValue4);

  let fieldValue5 = document.getElementById("1PM").value;
  localStorage.setItem("1notes", fieldValue5);

  let fieldValue6 = document.getElementById("2PM").value;
  localStorage.setItem("2notes", fieldValue6);

  let fieldValue7 = document.getElementById("3PM").value;
  localStorage.setItem("3notes", fieldValue7);

  var fieldValue8 = document.getElementById("4PM").value;
  localStorage.setItem("4notes", fieldValue8);

  var fieldValue9 = document.getElementById("5PM").value;
  localStorage.setItem("5notes", fieldValue9);
});
