import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', createPromises);

function createPromises(ev) {
  ev.preventDefault();

  let { amount: amountEl, step: stepEl, delay: delayEl } = ev.target.elements;

  const delay = Number(delayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);

  let count = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, count)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    count += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
