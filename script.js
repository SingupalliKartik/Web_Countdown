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
let day = '00';
let hr = '00';
let min = '00';
let sec = '00';
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
 // day < 10 ? day = '0' + day : day = day;
    // hr < 10 ? hr = '0' + hr : hr = hr;
    // min < 10 ? min = '0' + min : min = min;
    // sec < 10 ? sec = '0' + sec : sec = sec;
// reset.onclick = function () {
//     clearInterval(isstop)
//     msec =0;
//     sec =  0;
//     min =  0;
//     hr = 0;
//     day = 0;
//     dmsec.innerHTML = '0'+msec; dsec.innerHTML ='0'+ sec; dmin.innerHTML ='0'+ min; dhr.innerHTML ='0'+ hr;
//     dday.innerHTML = '0'+ day;}






// console.log('hello');

// // function nil(value) {
// //     value = Nan ? value = '00' : value= value;
// //     return value;
// // }
// // alert('Enter values for timer in interger');
// var day = Number.parseInt('5')
// day < 10 ? day = '0' + day : day = day;
// var hr = Number.parseInt('5')

// hr < 10 ? hr = '0' + hr : hr = hr;
// var min = Number.parseInt('5')

// min < 10 ? min = '0' + min : min = min;
// var sec = Number.parseInt('5')

// sec < 10 ? sec = '0' + sec : sec = sec;



// if (sec > 60) {
//     min = min + Number.parseInt(sec / 60)
//     sec = sec % 60;

// }
// if (min > 60) {
//     hr = hr + Number.parseInt(min / 60)
//     min = min % 60;

// }
// if (hr > 24) {
//     day = day + Number.parseInt(hr / 24)
//     hr = hr % 24;

// }







// const dday = document.querySelector('.day')

// dday.innerHTML = day;
// const dhr = document.querySelector('.hrs')

// dhr.innerHTML = hr;
// const dmin = document.querySelector('.min')

// dmin.innerHTML = min;
// const dsec = document.querySelector('.sec')

// dsec.innerHTML = sec;
// const start = document.querySelector("#start")

// const stop = document.querySelector("#stop")




// function counreperat() {
//     var second = sec;



//     var timiner = setInterval(() => {
//         if (second != 0) {

//             second = second - 1;
//             second < 10 ? second = '0' + second : second = second;
//             dsec.innerHTML = second;


//         }

//     }, 1000);


//     var minute = min;



//     setInterval(() => {
//         if (minute != 0) {

//             minute = minute - 1;
//             minute < 10 ? minute = '0' + minute : minute = minute;
//             dmin.innerHTML = minute;
//         }
//     }, 60000 + sec);
//     var hours = hr;



//     setInterval(() => {
//         if (hours != 0) {

//             hours = hours - 1;
//             hours < 10 ? hours = '0' + hours : hours = hours;
//             dhr.innerHTML = hours;
//         }
//     }, 3600000); var dayss = day;



//     setInterval(() => {
//         if (dayss != 0) {

//             dayss = dayss - 1;
//             dayss < 10 ? dayss = '0' + dayss : dayss = dayss;
//             dday.innerHTML = dayss;
//         }
//     }, 86400000);

//  function stope() {
//     console.log('clicked');
//     clearInterval(timiner);
// }

//     // setTimeout(() => {
//     //         while (minute != 0) {
//     //             let forever = 60;
//     //             setInterval(() => {
//     //                 if (forever != 0) {

//     //                     forever = forever - 1;
//     //                     forever < 10 ? forever = '0' + forever : forever = forever;
//     //                     dsec.innerHTML = forever;
//     //                 }
//     //             }, 1000);
//     //         }

//     //     }, sec);
//     //
// }

