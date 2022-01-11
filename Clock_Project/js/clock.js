const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  let hour = document.querySelector("#hour");
  let minute = document.querySelector("#minute");
  let second = document.querySelector("#second");
  let ampm = document.querySelector("#ampm");

  // for Day, Month, Date and Year
  let dname = new Date().getDay();
  let mo = new Date().getMonth();
  let dnum = new Date().getDate();
  let yr = new Date().getFullYear();

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let ids = ["dayname", "month", "daynum", "year"];
  let values = [week[dname], months[mo], dnum, yr];
  for(var i = 0; i < ids.length; i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];

  // for Time in Hours, Minutes and Seconds
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";

  if(h > 12){
      h = h - 12;
      am = "PM";
  }

  // Add zero before single digit number
  h = (h < 10) ? "0" + h : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s

  hour.innerHTML = h+"&nbsp:&nbsp";
  minute.innerHTML = m+"&nbsp:&nbsp";
  second.innerHTML = s+"&nbsp&nbsp";
  ampm.innerHTML = am;
});
