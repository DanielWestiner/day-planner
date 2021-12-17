// Setting up the current day of the week to show in the header using moment js

var today = moment();
var dayWeek = today.format("[Today is] dddd, MMMM Do");
$("#currentDay").text(dayWeek);

// Setting up each hour variable as array. 24hr time to make it easier to calculate

let hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Creating colorized note blocks - use jQuery .each to iterate and execute function over textarea

let currentHour = parseInt(moment().format("H"));

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



//  Setting up variable to easily store into local storage and append
let nine = $("#9AM");
let ten = $("#10AM");
let eleven = $("#11AM");
let twelve = $("#12PM");
let one = $("#1PM");
let two = $("#2PM");
let three = $("#3PM");
let four = $("#4PM");
let five = $("#5PM");


let row1 = $(".row1");
let row2 = $(".row2");
let row3 = $(".row3");
let row4 = $(".row4");
let row5 = $(".row5");
let row6 = $(".row6");
let row7 = $(".row7");
let row8 = $(".row8");
let row9 = $(".row9");


// jQuery Event Listener on click
var saveButton = $(".btn");
saveButton.on("click", function () {
  localStorage.setItem = ("nine", "nine.val()");
  localStorage.setItem = ("ten", "ten.val()");
  localStorage.setItem = ("eleven", "eleven.val()");
  localStorage.setItem = ("twelve", "twelve.val()");
  localStorage.setItem = ("one", "one.val()");
  localStorage.setItem = ("two", "two.val()");
  localStorage.setItem = ("three", "three.val()");
  localStorage.setItem = ("four", "four.val()");
  localStorage.setItem = ("five", "five.val()");


//   if (localStorage.getItem("nine") !== null) {
//     let savedNote = localStorage.getItem("nine");
//     nineAM.text(savedNote);
//     row1.append(nineAM);
//   }
});

$(".row1").append(localStorage.getItem("nine"));


