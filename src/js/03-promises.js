import Notiflix from 'notiflix';
const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
const onSuccess = ({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onError = ({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

function onFormSubmit(event) {
  event.preventDefault();

  let step = Number(event.currentTarget.step.value);
  let delay = Number(event.currentTarget.delay.value);
  let amount = Number(event.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay).then(onSuccess).catch(onError);
    delay += step;
  }
}
