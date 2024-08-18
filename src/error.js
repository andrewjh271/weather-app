const MESSAGES = {
  INPUT: 'No city was found that matched your query.',
  LOCATION: 'Your location could not be determined.',
  WEATHER: 'Weather data could not be retrieved.',
};

const container = document.querySelector('#error-container');
const close = container.querySelector('#close-icon');
const errorMessage = container.querySelector('#error-message');

const showError = () => container.classList.remove('hidden');
const hideError = () => container.classList.add('hidden');

close.addEventListener('click', hideError);

export default function handleError(error, code) {
  console.log(error);
  errorMessage.textContent = MESSAGES[code];
  showError();
  setTimeout(hideError, 5000);
}
