const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

const key = 'dcee472b5a49e727dac8badc44404b52';
let unit = 'celsius';
unit = 'imperial';

async function getCoords(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}&limit=1`,
      { mode: 'cors' }
    );
    const parsed = await response.json();
    return [parsed[0].lat, parsed[0].lon];
  } catch (error) {
    return error;
  }
}

async function getCurrent(city) {
  const [lat, long] = await getCoords(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=${unit}`
  );
  const parsed = await response.json();
  const sunrise = dayjs.unix(parsed.sys.sunrise + parsed.timezone).tz();
  const sunset = dayjs.unix(parsed.sys.sunset + parsed.timezone).tz();
  return {
    temp:  Math.round(parsed.main.temp),
    description: parsed.weather[0].description,
    feelsLike: Math.round(parsed.main.feels_like),
    humidity: parsed.main.humidity,
    sunrise: sunrise.format('h:mma'),
    sunset: sunset.format('h:mma')
  };
}

async function getForecast(city) {
  const [lat, long] = await getCoords(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=${unit}&cnt=6`
  );
  const parsed = await response.json();
  const localTime = parsed.city.timezone;
  const data = parsed.list.map((forecast) => ({
    temp: Math.round(forecast.main.temp),
    iconURL: `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
    time: dayjs
      .unix(forecast.dt + localTime)
      .tz()
      .format('hA')
  }));
  return data;
}

async function consume(city) {
  const current = await getCurrent(city);
  console.log(current);

  const forecast = await getForecast(city);
  const icon = document.querySelector('#icon-test');
  icon.src = forecast[1].iconURL;
}

consume('san diego');