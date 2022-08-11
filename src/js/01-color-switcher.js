function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let timerId = null;

btnStop.addEventListener('click', hanleClickStopColor);
btnStart.addEventListener('click', handleClickStart);

btnStop.setAttribute('disabled', true);


function handleClickStart() {
  
  timerId = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );

  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

function hanleClickStopColor() {
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);

  clearInterval(timerId);
}
