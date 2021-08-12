

var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#549DA0"]; // создаем массив с цветами фона
var i = 0; 

function changeColor(){
    document.getElementById("work").style.backgroundColor = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
};

$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
    });
});

function clockTimer(){
   var date = new Date();
   var time = [date.getHours(),date.getMinutes(),date.getSeconds()];
   var dayOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
   var days = date.getDay();
  
   if(time[0] < 10){time[0] = "0"+ time[0];}
   if(time[1] < 10){time[1] = "0"+ time[1];}
   if(time[2] < 10){time[2] = "0"+ time[2];}
  
   var current_time = [time[0],time[1],time[2]].join(':');
   var clock = document.getElementById("clock");
   let day = document.getElementById("dayOfWeek");
   clock.innerHTML = current_time;
   day.innerHTML = dayOfWeek[days];
   setTimeout("clockTimer()", 1000);
};

