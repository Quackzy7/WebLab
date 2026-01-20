
function digiClock(){
let time=new Date();

let seconds=time.getSeconds();
let minutes=time.getMinutes();
let hours=time.getHours();
let dateStr=hours+':'+minutes+':'+seconds;

const timeScreen=document.getElementsByClassName('time')[0];

timeScreen.textContent= dateStr;
};



function startTimer(e){
    let inputTime=Number(document.getElementById("timerInput").value);

     if(!inputTime || inputTime<=0){
            let error=document.getElementsByClassName("error")[0];
            error.textContent="Please enter a valid time";
        return;
        }
    const now=Date.now();
    let later=Date.now();

    const interval = setInterval(() => {
        inputTime--;

       

        if (inputTime <= 0) {
            clearInterval(interval);
            alert("⏰ The timer has expired!");
        }
    }, 1000);}

const btn=document.querySelector('.btn')
btn.addEventListener("click",startTimer)


setInterval(digiClock, 1000);
digiClock();




