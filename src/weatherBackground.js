document.body.style.backgroundImage = "url('images/landing.jpg')";

export default function setBackground(code) {
  let keyword;
  switch (true) {
    case code < 300:
      keyword = 'thunder';
      break;
    case code < 400:
      keyword = 'drizzle';
      break;
    case code < 600:
      keyword = 'rain';
      break;
    case code < 700:
      keyword = 'snow';
      break;
    case code === 741:
      keyword = 'fog';
      break;
    case code < 800:
      keyword = 'atmosphere';
      break;
    case code === 800:
      keyword = 'clear';
      break;
    case code === 804:
      keyword = 'overcast';
      break;
    default:
      keyword = 'clouds';
      break;
  }
  document.body.style.backgroundImage = `url('images/${keyword}.jpg')`;
}
