let timeStamp = document.getElementById('timestamp');
let localTime = document.getElementById('localTime');
let localDate = document.getElementById('localDate');

let test1 = Date.now();

timeStamp.innerHTML = test1.toString();

let test2 = Date();

localDate.innerHTML = test2;

localTime.innerHTML = test2.toLocaleTimeString();

