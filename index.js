const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
  body: document.querySelector('body'),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const chooseRandomColor = () => {
  return colors[randomIntegerFromInterval(0, 5)];
};

const runChangeBackgroundColor = () => {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = chooseRandomColor();
  }, 1000);

  refs.start.setAttribute('disabled', 'disabled');
};

const stopChangeBackgroundColor = () => {
  refs.start.removeAttribute('disabled');
  clearInterval(intervalId);
};

refs.start.addEventListener('click', runChangeBackgroundColor);
refs.stop.addEventListener('click', stopChangeBackgroundColor);
