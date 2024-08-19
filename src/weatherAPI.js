import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { KEY } from './key';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

async function getWeather(coords) {
  const [lat, long] = coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}`
  );
  const parsed = await response.json();
  const sunrise = dayjs.unix(parsed.sys.sunrise + parsed.timezone).tz();
  const sunset = dayjs.unix(parsed.sys.sunset + parsed.timezone).tz();
  return {
    name: `${parsed.name}, ${parsed.sys.country}`,
    temp: parsed.main.temp,
    description: parsed.weather[0].description,
    feelsLike: parsed.main.feels_like,
    humidity: parsed.main.humidity,
    sunrise: sunrise.format('h:mma'),
    sunset: sunset.format('h:mma'),
    code: parsed.weather[0].id,
  };
}

async function getForecast(coords) {
  const [lat, long] = coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${KEY}&cnt=6`
  );
  const parsed = await response.json();
  const localTime = parsed.city.timezone;
  return parsed.list.map((forecast) => ({
    temp: forecast.main.temp,
    iconURL: `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`,
    time: dayjs
      .unix(forecast.dt + localTime)
      .tz()
      .format('hA'),
  }));
}

export { getWeather, getForecast };
