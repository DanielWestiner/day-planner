// Setting up the current day of the week to show in the header using moment js

var today = moment();
var dayWeek = today.format("[Today is] dddd")
$("#currentDay").text(dayWeek);

//