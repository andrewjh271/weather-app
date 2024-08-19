import { KEY } from './key';

async function byCity(city) {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${KEY}&limit=1`,
    { mode: 'cors' }
  );
  const parsed = await response.json();
  return [parsed[0].lat, parsed[0].lon];
}

function byUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        resolve([data.coords.latitude, data.coords.longitude]);
      },
      (error) => reject(error)
    );
  });
}

export { byCity, byUserLocation };
