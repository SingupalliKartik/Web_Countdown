const dday = document.querySelector('.day');
const dhr = document.querySelector('.hrs');
const dmin = document.querySelector('.min');
const dsec = document.querySelector('.sec');
const dmsec = document.querySelector('.msec');
const start = document.querySelector('.starte');
const stope = document.querySelector('.stope');
const reset = document.querySelector('.resete');
let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;
let day = 0;
var isstop;
var once = true;

function timer() {
    msec++;

    if (msec >= 100) {
        sec = sec + Number.parseInt(msec / 100)
        msec = msec % 100;

    }
    if (sec >= 60) {
        min = min + Number.parseInt(sec / 60)
        sec = sec % 60;


    }
    if (min >= 60) {
        hr = hr + Number.parseInt(min / 60)
        min = min % 60;

    }
    if (hr >= 24) {
        day = day + Number.parseInt(hr / 24)
        hr = hr % 24;

    }

    var arr = [day, hr, min, sec];
    var arr2 = [dday, dhr, dmin, dsec];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr2[i].innerHTML = '0' + arr[i];
        }
        else {
            arr2[i].innerHTML = arr[i]
        }
    }

    dmsec.innerHTML = msec;

}

var tostartandstop = true;
start.onclick = function () {
    if (tostartandstop) {
        
        isstop = setInterval(timer, 10);
        tostartandstop=false;
    }
}
stope.onclick = function () {

    clearInterval(isstop);
    tostartandstop=true;
}
reset.onclick = function () {
    clearInterval(isstop)
    msec = 0;
    sec = 0;
    min = 0;
    hr = 0;
    day = 0;
    dmsec.innerHTML = '0' + msec; dsec.innerHTML = '0' + sec; dmin.innerHTML = '0' + min; dhr.innerHTML = '0' + hr;
    dday.innerHTML = '0' + day;
    tostartandstop=true;
}
