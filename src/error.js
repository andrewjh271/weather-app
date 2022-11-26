const container = document.querySelector('#error-container');
const close = container.querySelector('#close-icon');

close.addEventListener('click', hideError);

function hideError() {
  container.classList.add('hidden');
}

export default function showError() {
  container.classList.remove('hidden');
  setTimeout(() => container.classList.add('hidden'), 5000);
}