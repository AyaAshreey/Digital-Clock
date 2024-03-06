const containerclock = document.getElementById("containerclock");
const DigitalClock = () => {
  const now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hours = now.getHours();
  let date = now.toDateString();
  let pmam = "am";

  if(hours > 12){
    hours=hours-12
    pmam = "pm"
  }
  if(sec < 10 ){
    sec = `0${sec}`
  }
  if(min < 10 ){
    min = `0${sec}`
  }
  if(hours < 10 ){
    hours = `0${sec}`
  }
  if(hours == 0){
    hours = `12 `
  }

  const clock = ` 
  <h1> Digital Clock</h1>
   <div class="dateTime">

  <div class="date">
      ${date}
  </div>
  <div class="time">
      ${hours} : ${min} : ${sec} ${pmam}
  </div> `;

  containerclock.innerHTML = clock;
};
setInterval(() => {
  DigitalClock();
}, 1000);
