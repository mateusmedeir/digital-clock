var hour = document.querySelector('div.hour')
var minute = document.querySelector('div.minute')
var seconds = document.querySelector('div.seconds')

var clock = setInterval(
    function time(){
        var date = new Date()
        var hr = date.getHours()
        var min = date.getMinutes()
        var sec = date.getSeconds()

        if(hr < 10){
            hr = '0' + hr
        }
        if(min < 10){
            min = '0' + min
        }
        if(sec < 10){
            sec = '0' + sec
        }

        hour.innerHTML = hr
        minute.innerHTML = min
        seconds.innerHTML = sec
    },1000
)