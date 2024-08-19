import { setWeather, setForecast, convertTemperatures } from './weatherDOM';
import { toggle } from './temperature';
import { byCity, byUserLocation } from './location';
import { handleError } from './error';
import './height';

const searchBar = document.querySelector('#search');
const searchIcon = document.querySelector('#search-icon');
const locationIcon = document.querySelector('#location-icon');
const slider = document.querySelector('.slider');

searchIcon.addEventListener('click', searchByInput);
locationIcon.addEventListener('click', searchByLocation);
slider.addEventListener('click', toggleUnit);

searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchByInput();
  }
});

function searchByInput() {
  byCity(searchBar.value)
    .then(search)
    .catch((error) => handleError(error, 'INPUT'));
}

function searchByLocation() {
  byUserLocation()
    .then(search)
    .catch((error) => handleError(error, 'LOCATION'));
}

function search(coords) {
  Promise.all([setWeather(coords), setForecast(coords)])
    .then(convertTemperatures)
    .catch((error) => handleError(error, 'WEATHER'));
}

function toggleUnit() {
  slider.classList.toggle('celsius');
  toggle();
  convertTemperatures();
}
