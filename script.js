var currentDayEl = $('#currentDay');
var currentWeekDayEl = $('#currentWeekDay');
var timeBlockEl = $('.row time-block');
var currentTimeEl = $('#currentTime');
var saveButton = document.querySelector(".btn saveBtn col-2 col-md-1");

//function to display the current date
  function displayDate() {
    var rightNow = dayjs().format('MMM DD, YYYY');
    currentDayEl.text(rightNow);
  }
//functin to display the day of the week 
  function displayWeekDay () {
    var weekDay = dayjs().format('dddd');
    currentWeekDayEl.text(weekDay);
  }
//functin to display the current time
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentTimeEl.text(rightNow);
  }
  displayWeekDay();
  displayDate();
  displayTime();

   //event listener for save button
$(".saveBtn").on("click", function () {
    
    console.log(this);
    var text = $(this).siblings(".description").val(); 
    var time = $(this).parent().attr("id"); 

   //save items to the local storage.
    localStorage.setItem(time, text);
})
//keep already saved tasks on the scheduler.//
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

//identify the current time
//make the number an Int
//compare the Int to current hour with if/else statements 
//add class dependent on the hour
//css will then be applied
 
function hourChange() {

$('.time-block').each (function () { 
    var currentHour = dayjs().hour(); 
    var blockHour = parseInt($(this).attr('id'));
    
    console.log(blockHour, currentHour)
    if (currentHour === blockHour) {
        $(this).addClass('present');
    }  else if (currentHour > blockHour) {
        $(this).addClass('past');
    }  else {
        $(this).addClass('future');
    }    
})};

hourChange()