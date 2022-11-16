let now = new Date();
let calendar = document.querySelector("#calendars");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
calendar.innerHTML = `${day}, ${month}, ${date}, ${hours}:${minutes}, ${year}`;

function search() {
  event.preventDefault();
  let searchInput = document.querySelector("#submit-city");
  let newCity = document.querySelector("#city-weather");
  newCity.innerHTML = `${searchInput.value}`;
}

let change = document.querySelector("form");
change.addEventListener("submit", handleTemperature);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let newCity = document.querySelector("#city-weather");
  let ct = document.querySelector(".temp");
  ct.innerHTML = `${temperature}°C`;
  newCity.innerHTML = `${response.data.name}`;
}
function handleTemperature(e) {
  e.preventDefault();
  let searchInput = document.querySelector("#submit-city");
  let apiKey = "d1a86552de255334f6117b348c4519bd";
  let units = "metric";
  let city = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
