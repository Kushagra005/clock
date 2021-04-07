const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

setInterval(() => {
    const date = new Date();
  const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12;
  second.style.transform = `rotate(${seconds * 6 - 90}deg)`;
  minute.style.transform = `rotate(${minutes * 6 - 90}deg)`;
  hour.style.transform = `rotate(${hour * 30 - 90}deg)`;
}, 1000);
