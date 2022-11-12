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

  name.textContent = data.name;
  temp.textContent = data.temp;
  description.textContent = data.description;
  feelsLike.textContent = `Feels like: ${data.feelsLike}°`;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  sunrise.textContent = `Sunrise: ${data.sunrise}`;
  sunset.textContent = `Sunset: ${data.sunset}`;

  weatherContainer.classList.remove('hidden');
}

const forecastContainer = document.querySelector('#forecast-container');


async function setForecast(city) {
  const forecast = await getForecast(city);
  if (forecast instanceof Error) return;
  forecastContainer.innerHTML = '';

  forecast.forEach((window) => {
    const box = document.createElement('div');
    const time = document.createElement('p');
    const icon = document.createElement('img');
    const temperature = document.createElement('h4');

    time.textContent = window.time;
    icon.src = window.iconURL;
    icon.classList.add('forecast-icon');
    temperature.textContent = window.temp;

    box.appendChild(time);
    box.appendChild(icon);
    box.appendChild(temperature);

    forecastContainer.appendChild(box);
    forecastContainer.classList.remove('hidden');
  })
}

function search() {
  console.log(searchBar.value);
  setWeather(searchBar.value);
  setForecast(searchBar.value);
  searchBar.value = '';
}
