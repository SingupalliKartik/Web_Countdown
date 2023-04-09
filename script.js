const dday = document.querySelector('.day');
const iday = document.getElementById('iday');
const dhr = document.querySelector('.hrs');
const ihr = document.querySelector('#ihours');
const dmin = document.querySelector('.min');
const imin = document.querySelector('#iminute');
const dsec = document.querySelector('.sec');
const isec = document.querySelector('#isecond');
const remainder = document.querySelector('.reminder');
const remainderi = document.querySelector('.reminder i');
const start = document.querySelector('.starte');
const stope = document.querySelector('.stope');
const submit = document.querySelector('.submit');
const reser = document.querySelector('.resete');
let day = 0;
let hr =0;
let min =0;
let sec = 0;
submit.onclick = function () {
    console.log(iday.value.length);
    day = (iday.value);
    hr = (ihr.value);
    min = (imin.value);
    sec = (isec.value);
    var arr = [day, hr, min, sec];
    var arr2 = [dday, dhr, dmin, dsec];
    var arr3 = [iday, ihr, imin, isec];
    for (var i = 0; i < arr.length; i++) {
        if (arr3[i].value.length == 0) {
            arr2[i].innerHTML = '00'
        }
        else {
            if (arr[i] < 10) {
                arr2[i].innerHTML = '0' + arr[i];
            }
            else {
                arr2[i].innerHTML = arr[i]
            }
        }
    }

}
var isreminder = false;
remainder.onclick = function () {
    isreminder = true;
    remainder.style.backgroundColor = 'black'
    remainder.innerHTML = 'You will be notified '
    remainder.style.color = 'white'
    remainder.style.color = 'white'
    remainderi.style.color = 'white'
}
var isstop;
function timer() {
    if (sec >= 60) {
        min = Number.parseInt( min)+ Number.parseInt(sec / 60)
        sec = sec % 60;
    }
    if (min >= 60) {
        hr = Number.parseInt( hr) + Number.parseInt(min / 60)
        min = min % 60;
    }
    if (hr >= 24) {
        day = Number.parseInt( day) + Number.parseInt(hr / 24)
        hr = hr % 24;
    }
    sec--;
    if (sec <= 0) {
        if (min <= 0) {
            if (hr == 0) {
                if (day == 0) {
                    clearInterval(isstop)
                    if (isreminder) {
                        alert('Times is up')
                    }
                }
                else {
                    day = day - 1;
                    hr = 23;
                }
            }
            else {
                hr = hr - 1;
                min = 59;
            }
        }
        else {
            min = min - 1;
            sec = 59;
        }
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
}

start.onclick = function () {
    isstop = setInterval(timer, 1000);
}
stope.onclick = function () {
    clearInterval(isstop);
}