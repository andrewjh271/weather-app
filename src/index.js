import { getWeather, getForecast, setUnit } from './weather';

const searchBar = document.querySelector("#search");
const searchIcon = document.querySelector("#search-icon");

const weatherContainer = document.querySelector('#weather-container');
const name = document.querySelector('#name');
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    search();
  }
});
searchIcon.addEventListener('click', search);


async function setWeather(city) {
  const data = await getWeather(city);
  if (data instanceof Error) return;
  console.log(data);

  name.textContent = data.name;
  temp.textContent = data.temp;
  description.textContent = data.description;
  feelsLike.textContent = `Feels like: ${data.feelsLike}°`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  sunrise.textContent = `Sunrise: ${data.sunrise}`;
  sunset.textContent = `Sunset: ${data.sunset}`;

  weatherContainer.classList.remove('hidden');
}

async function setForecast(city) {
  const forecast = await getForecast(city);
  const icon = document.querySelector('#icon-test');
  icon.src = forecast[1].iconURL;
}

function search() {
  console.log(searchBar.value);
  setWeather(searchBar.value);
}

// setWeather('san diego');
// setForecast('san diego');