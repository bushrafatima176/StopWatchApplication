var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;
// now get elements
var minhdg = document.getElementById("min");
var sechdg = document.getElementById("sec");
var msechdg = document.getElementById("msec");
var hourhdg = document.getElementById("hour");

function Timer(){
    msec++;
    msechdg.innerHTML = msec;
    if(msec >= 100){
        sec++;
        sechdg.innerHTML = sec;
    msec = 0;

    }
    else if(sec>=60){
        min++;
        minhdg.innerHTML = min;
        sec=0;
    }
   
}
function Start(){
    interval = setInterval(Timer,10);
}

// msec = 10
// 10*100 = 1000 (converted in seconds)

function Stop(){
    clearInterval(interval);
}
function Reset(){
    msec = 0;
    msechdg.innerHTML = msec;
    sec = 0;
    sechdg.innerHTML = sec;
    min=0;
    minhdg.innerHTML = min;
    Stop();
}