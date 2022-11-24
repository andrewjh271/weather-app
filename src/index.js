import { Kelvin } from '@khanisak/temperature-converter';
import { getWeather, getForecast } from './weather';
import setBackground from './weatherBackground';
import './height';

const searchBar = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');

const weatherContainer = document.querySelector('#weather-container');
const name = document.querySelector('#name');
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

let isFahrenheit = true;
let kelvins;
let kelvinsFeelsLike;
const forecastKelvins = [];
const forecastTemperatures =  [];

const locationIcon = document.querySelector('#location-icon');

locationIcon.addEventListener('click', searchUserLocation);

searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    search();
  }
});
searchIcon.addEventListener('click', search);

async function setWeather(location) {
  const data = await getWeather(location);
  if (data instanceof Error) return;

  kelvins = data.temp;
  kelvinsFeelsLike = data.feelsLike;

  name.textContent = data.name;
  description.textContent = data.description;
  humidity.textContent = `Humidity: ${data.humidity}%`;
  sunrise.textContent = `Sunrise: ${data.sunrise}`;
  sunset.textContent = `Sunset: ${data.sunset}`;

  setBackground(data.code);

  weatherContainer.classList.remove('hidden');
}

const forecastContainer = document.querySelector('#forecast-container');

async function setForecast(location) {
  const forecast = await getForecast(location);
  if (forecast instanceof Error) return;
  forecastContainer.innerHTML = '';

  forecast.forEach((window, index) => {
    const box = document.createElement('div');
    const time = document.createElement('p');
    const icon = document.createElement('img');
    forecastTemperatures[index] = document.createElement('h4');

    time.textContent = window.time;
    icon.src = window.iconURL;
    icon.classList.add('forecast-icon');
    forecastKelvins[index] = window.temp;

    box.appendChild(time);
    box.appendChild(icon);
    box.appendChild(forecastTemperatures[index]);

    forecastContainer.appendChild(box);
    forecastContainer.classList.remove('hidden');
  });
}

async function search() {
  setWeather({city: searchBar.value});
  await setForecast({city: searchBar.value});
  convertTemperatures();
}

async function searchUserLocation() {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      setWeather({coords: userCoords});
      await setForecast({coords: userCoords});
      convertTemperatures();
    },
    (error) => console.error(error));
}

const slider = document.querySelector('.slider');
slider.addEventListener('click', toggleUnit);


function toggleUnit() {
  // default is Fahrenheit
  slider.classList.toggle('celsius');
  isFahrenheit = !isFahrenheit;
  convertTemperatures();
}

function convertTemperatures() {
  if (isFahrenheit) {
    temp.textContent = `${Math.round(new Kelvin(kelvins).toFahrenheit().value)}°F`;
    feelsLike.textContent = `Feels like: ${Math.round(new Kelvin(kelvinsFeelsLike).toFahrenheit().value)}°F`;
    forecastKelvins.forEach((forecastKelvin, index) => {
      forecastTemperatures[index].textContent = `${Math.round(new Kelvin(forecastKelvin).toFahrenheit().value)}°F`;
    })
  } else {
    temp.textContent = `${Math.round(new Kelvin(kelvins).toCelcius().value)}°C`;
    feelsLike.textContent = `Feels like: ${Math.round(new Kelvin(kelvinsFeelsLike).toCelcius().value)}°C`;
    forecastKelvins.forEach((forecastKelvin, index) => {
      forecastTemperatures[index].textContent = `${Math.round(new Kelvin(forecastKelvin).toCelcius().value)}°C`;
    })
  }
}