import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputText = document.querySelector('#datetime-picker');
const onClickBtnStart = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

onClickBtnStart.disabled = true;
let inputDateId = null;
onClickBtnStart.addEventListener('click', countdownStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      onClickBtnStart.disabled = true;
    } else {
      onClickBtnStart.disabled = false;
      inputDateId = selectedDates[0];
    }
    console.log(selectedDates[0]);
  },
};

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

flatpickr(inputText, options);

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function countdownStart() {
  let intervalId = setInterval(() => {
    let countdown = new Date(inputText.value) - new Date();
    onClickBtnStart.disabled = true;
    inputText.disabled = true;
    if (countdown >= 0) {
      const components = convertMs(countdown);
      days.textContent = addLeadingZero(components.days);
      hours.textContent = addLeadingZero(components.hours);
      minutes.textContent = addLeadingZero(components.minutes);
      seconds.textContent = addLeadingZero(components.seconds);
    } else {
      Notiflix.Notify.success('Countdown finished');
      timer.style.color = 'green';
      clearInterval(intervalId);
    }
  }, 1000);
}
