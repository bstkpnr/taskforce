function questionName() {
  let name = document.querySelector("#myName");
  let userName = prompt("Lütfen Adınızı giriniz?");
  if (name) {
    userName.innerHTML = name;
  } else {
    userName.innerHTML = "Hello Stranger";
  }
}

function nowTime() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let day = date.getDay();

  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = `${hours}:${minute}:${second}:${day}`;
  document.querySelector("#myClock").innerHTML = time;

  setTimeout(nowTime, 1000);
}
nowTime();
questionName();

