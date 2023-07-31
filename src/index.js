function actualDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayCurrent = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[dayCurrent];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityNow = document.querySelector("#city");
  let cityInput = document.querySelector("#input");
  cityNow.innerHTML = cityInput.value;
}
function showTemperature(response) {
  console.log(response);

  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}°C.`;
}

let apiKey = "25fad9f7e87157d33dde0f82ab269ee8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

let dateNow = document.querySelector("#date");
let actualTime = new Date();
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

dateNow.innerHTML = actualDate(actualTime);
