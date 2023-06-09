setInterval(function() {
  $('#currentDay').text(dayjs().format('MMM DD, YYYY'))
  $('#currentTime').text(dayjs().format('hh:mm:ssA')) 
  }, 1000);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(document).ready(function () {
    $('.saveBtn').on('click', function() {
      const value = $(this).siblings('.description').val();
      const time = $(this).parent().attr('id');
  
      localStorage.setItem(time, value);
      setTimeout(function(){
        $('.notification').removeClass('show');
        $('.notification')
    }, 3000);
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function plannerHourSlot() {
    const currentHour = dayjs().hour();
  $('.time-block').each(function() {
    const timeSlot = parseInt($(this).attr('id').split('-')[1]);


    if(timeSlot < currentHour) {
      $(this).addClass('past');
    } else if (timeSlot === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
  });
}
plannerHourSlot();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  setInterval(plannerHourSlot, 15000);

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  //
  // TODO: Add code to display the current date in the header of the page.//------DONE------
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
