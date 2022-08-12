import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

// input
const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

// TIME
const RefsTimer = {
  seconds: document.querySelector('[data-seconds]'),
  minutes: document.querySelector('[data-minutes]'),
  hours: document.querySelector('[data-hours]'),
  days: document.querySelector('[data-days]'),
};

// Option calendar
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    console.log(selectedDates[0]);

    const selectedDate = new Date(input.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      Notiflix.Notify.failure('Sorry not current day')
    } else {
      btnStart.removeAttribute('disabled');
    }
  },
};

flatpickr(input, options);



btnStart.addEventListener('click', startTimer);

btnStart.setAttribute('disabled', true);

function startTimer() {

  btnStart.setAttribute('disabled', true);
  input.setAttribute('disabled', true);

  const selectedDate = new Date(input.value);
  const currentDate = new Date();

  let mlSeconds = selectedDate - currentDate;
  const interval = setInterval(() => {
    mlSeconds -= 1000;

    if (mlSeconds <= 0) {
      clearInterval(interval);
      input.removeAttribute('disabled');
      return;
    }

    const timerDuration = convertMs(mlSeconds);
    RefsTimer.days.textContent = timerDuration.days;
    RefsTimer.hours.textContent = timerDuration.hours;
    RefsTimer.minutes.textContent = timerDuration.minutes;
    RefsTimer.seconds.textContent = timerDuration.seconds;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
