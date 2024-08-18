import { Kelvin } from '@khanisak/temperature-converter';

let isFahrenheit = true;

function toggle() {
  isFahrenheit = !isFahrenheit;
}

function convert(value) {
  const converter = isFahrenheit ? 'toFahrenheit' : 'toCelcius';
  const symbol = isFahrenheit ? '°F' : '°C';
  return `${Math.round(new Kelvin(value)[converter]().value)}${symbol}`;
}

export { convert, toggle };
