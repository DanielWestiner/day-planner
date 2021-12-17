// Setting up the current day of the week to show in the header using moment js

var today = moment();
var dayWeek = today.format("[Today is] dddd, MMMM Do,");
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



let nine = $('#9AM')

var saveButton = $(".btn");
saveButton.on("click", function populateStorage() {
//   localStorage.setItem("9AM", JSON.stringify());
    localStorage.setItem = ("nine", ($('9AM').val()));


});
// console.log(populateStorage);

$("9AM").appendTo(localStorage.getItem("nine"));

// Event Listener



if (localStorage.getItem($('nine')) !== null) {
    console.log(`storage exists`);
} else {
    console.log(`storage not found`);
}
