let randomColor = Math.floor(Math.random()*16777215).toString(16);
let divi = document.getElementById('clockdisplay')
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      divi.style.color = "#"+randomColor;
   
    },1000);
function setTime(){
    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockdisplay").innerText = time;
    document.getElementById("clockdisplay").textContent = time;
    
    setTimeout(setTime, 1000);
    
}

setTime();