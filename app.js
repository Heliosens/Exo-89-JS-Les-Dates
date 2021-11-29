let timeStamp = document.getElementById('timestamp');
let localTime = document.getElementById('localTime');
let localDate = document.getElementById('localDate');

// 1
let test1 = Date.now();
timeStamp.innerHTML = test1.toString();

// 2
let test2 = Date();
localDate.innerHTML = test2;


// 3
let test3 = new Date();
localTime.innerHTML = test3.toLocaleTimeString();

// 4
// create 2 date
let test4 = new Date();
let test5 = new Date();

// set test 5 + 2 days & 6 hours
test5.setDate(test4.getDate() + 2 );
test5.setHours(test4.getHours() + 6);

// test
if(test5 > test4){
    let newDiv = document.createElement('div');

    // interval in second
    let interval = (test5.getTime() - test4.getTime()) / 1000;
    let interDay = Math.floor(interval / 60 / 60 / 24);
    let interHour = Math.floor((interval - (interDay * 60 * 60 * 24 )) / 60 / 60);

    newDiv.innerHTML = "Entre les deux dates, il s'est passé " + interDay + " jours et " + interHour + " heures";

    document.body.appendChild(newDiv);
}
