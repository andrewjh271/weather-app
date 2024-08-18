import { getWeather, getForecast } from './weatherAPI';
import setBackground from './weatherBackground';
import { convert } from './temperature';

const weatherContainer = document.querySelector('#weather-container');
const name = document.querySelector('#name');
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

let kelvins;
let kelvinsFeelsLike;

const forecastContainer = document.querySelector('#forecast-container');
const forecastTemperatures = []; // DOM references
const forecastKelvins = []; // data

async function setWeather(location) {
  const data = await getWeather(location);

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

async function setForecast(location) {
  const forecast = await getForecast(location);
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

function convertTemperatures() {
  temp.textContent = convert(kelvins);
  feelsLike.textContent = `Feels like: ${convert(kelvinsFeelsLike)}`;
  forecastKelvins.forEach((forecastKelvin, index) => {
    forecastTemperatures[index].textContent = convert(forecastKelvin);
  });
}

export { setWeather, setForecast, convertTemperatures };
