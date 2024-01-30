
var initiate_clock = function() {
    var second_hand = document.getElementById("second");
    var minute_hand = document.getElementById("minute");
    var hour_hand = document.getElementById("hour");

    var updateClockHands = function() {
        var now = new Date();
        var seconds = now.getSeconds();
        var minutes = now.getMinutes();
        var hours = now.getHours() % 12;

        var secondsRotation = (seconds * 6 - 90); 
        var minutesRotation = (minutes * 6 - 90);
        var hoursRotation = (hours * 30 - 90) + Math.round(minutesRotation/12); 

        second_hand.style.transform = "rotate(" + secondsRotation + "deg)";
        minute_hand.style.transform = "rotate(" + minutesRotation + "deg)";
        hour_hand.style.transform = "rotate(" + hoursRotation + "deg)";
    };

    var tick_second = function() {
        updateClockHands();
    };

    var start_clock = setInterval(tick_second, 1000);
};

initiate_clock();

const button = document.querySelector("#leviosa");
var on = true;
button.addEventListener("click",function(){
    const container = document.querySelector("#container")
    if(on==true){
    container.classList.add("levitate")
    theme.pause()
    spell.play();
    theme.play();
    on = false;
    }
    else{
        container.classList.remove("levitate")
        on = true;
    }
})

theme.play();
// theme.pause();