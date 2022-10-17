// /moment timer element
var timeDisplay = $('#currentDay')
var today = moment().format('MMMM Do YYYY, h:mm:ss a')

function displayTime(){
    var today = moment().format('MMMM Do YYYY, [at] h:mm:ss a')
    timeDisplay.text(today)
}

setInterval(displayTime, 1000)

$('.saveBtn').on('click', function(){
    var time = $(this).parent().attr('id')
    var text = $(this).siblings('textarea').val()
    localStorage.setItem(time, text)
})

//coloring the time blocks
var currentHour = moment().hour()
$('.time-block').each(function(){
    var blockHour = parseInt($(this).attr("id"));
    if (currentHour > blockHour){
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future');
    }
    else if(currentHour < blockHour){
        $(this).removeClass('present')
        $(this).removeClass('past')
        $(this).addClass('future');
    }
    else if (currentHour === blockHour){
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
    }
});

//stores text area inputs
$(document).ready(function(){
    $('#hour8 textarea').val(localStorage.getItem('hour8'))
    $('#hour9 textarea').val(localStorage.getItem('hour9'))
    $('#hour10 textarea').val(localStorage.getItem('hour10'))
    $('#hour11 textarea').val(localStorage.getItem('hour11'))
    $('#hour12 textarea').val(localStorage.getItem('hour12'))
    $('#hour1 textarea').val(localStorage.getItem('hour1'))
    $('#hour2 textarea').val(localStorage.getItem('hour2'))
    $('#hour3 textarea').val(localStorage.getItem('hour3'))
    $('#hour4 textarea').val(localStorage.getItem('hour4'))
    $('#hour5 textarea').val(localStorage.getItem('hour5'))

})