
var future = new Date("Mar 22, 2024 11:30:00").getTime();
function timer() {
    var current = new Date().getTime();
    var remaining = Math.floor((future - current)/1000);

    var days = Math.floor(remaining / (3600 * 24));
    var hours = Math.floor((remaining % (3600 * 24))/3600);
    var mins = Math.floor((remaining % 3600)/60);
    var secs = Math.floor(remaining % 60);

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#mins").innerHTML = mins;
    document.querySelector("#secs").innerHTML = secs;
}

setInterval(timer, 1000);