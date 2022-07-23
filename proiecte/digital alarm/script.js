//Selectam elementele html de care avem nevoie
const ceas = document.getElementById("clock-container")
const containerOra = document.getElementById("container-ora");
const containerMin = document.getElementById("container-min");
const containerSec = document.getElementById("container-sec");
const containerDate = document.getElementById("container-date");
const alarmOra = document.getElementById("alarm-ora");
const alarmMin = document.getElementById("alarm-min");
const alarmSec = document.getElementById("alarm-sec");

const week = ["SUN","MON", "TUE", "WED","THU","FRI","SAT"];

let alarmTime = '';

// Obiect Audio pt alarma
const alarmSound = new Audio("alarm.mp3");
alarmSound.loop =true;

function updateTime() {
    const date = new Date();
    
    const ora = addZero(date.getHours());
    const min = addZero(date.getMinutes());
    const sec = addZero(date.getSeconds());
    containerDate.textContent = date.getFullYear() + " - " + (date.getMonth() + 1) + " - " + week[date.getDay()];
    containerOra.textContent = ora ;
    containerMin.textContent = min;
    containerSec.textContent = sec;
    
    const currentTime = "" + ora + min + sec;
    if (alarmTime == currentTime){
        alarmSound.play();
        ceas.classList.add("alarm");
    }
}

function addZero(nr) {
    if (nr<10){
        return "0"+nr;
    }
    return nr;
}

function createAlarmOptions() {
    for(let i = 0; i <24; i++){
        alarmOra.options[alarmOra.options.length] = new Option((i), addZero(i));
    }

    for(let i = 0; i <60; i++){
        alarmMin.options[alarmMin.options.length] = new Option((i), addZero(i));
        alarmSec.options[alarmSec.options.length] = new Option((i), addZero(i));
    }

}

function setAlarm(){
    const selectedOra = alarmOra.options[alarmOra.selectedIndex].value;
    const selectedMin = alarmMin.options[alarmMin.selectedIndex].value;
    const selectedSec = alarmSec.options[alarmSec.selectedIndex].value;

    //Salvam ora alarmei 
    alarmTime = alarmTime + selectedOra + selectedMin + selectedSec;

    alarmOra.disabled = true;
    alarmMin.disabled = true;
    alarmSec.disabled = true;
}

function cancelAlarm() {
    //resetam valorile alarmei
    alarmTime = '';
    alarmOra.disabled = false;
    alarmMin.disabled = false;
    alarmSec.disabled = false;

    alarmSound.pause();
    ceas.classList.remove("alarm");
}

updateTime();
//Chemam functia updateTime la fiecare 1s
setInterval(updateTime, 1000);
createAlarmOptions();