const minute = document.getElementById("minute");
const second = document.getElementById("second");

const selectedMinute = document.getElementById("selected-minute");
const selectedSecond = document.getElementById("selected-second");

const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
let  stop = false;

selectedMinute.addEventListener("change", () =>{
           minute.textContent = selectedMinute.value;
});

selectedSecond.addEventListener("change", () =>{
     second.textContent = selectedSecond.value <10 ? "0" + selectedSecond.value : selectedSecond.value;
});

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", () =>{
    stop = true;
    minute.textContent = "00";
    second.textContent = "00";
    selectedMinute.value = "00";
    selectedSecond.value = "00";
})

function startTimer()
{
    let min =  minute.textContent;
    let sec = second.textContent;

    const interval =  setInterval(() => {
        sec--;
        sec=sec <10 ? "0" + sec : sec;
        if(sec == "0-1")
        {
            min--;
            sec=59;
        }
        if((min == 00 && sec== 00) ||(min == 0 && sec== 0))
        {
            clearInterval(interval);
            window.alert("time is up!");
            selectedMinute.value = "00";
            selectedSecond.value = "00";
        }
        if(stop)
        {
            clearInterval(interval);
            return;
        }

        minute.textContent = min;
        second.textContent = sec;
        
  },1000);
}


