const download = [...document.querySelectorAll('.download')];
const plan = document.querySelector('.plan__title');
const price = document.querySelector('span');
let selectedNum = '10';

download.forEach((d) => {
  d.addEventListener('click', (e) => {
    download.forEach((num) => {
      num.classList.remove('selected');
    });

    d.classList.add('selected');

    selectedNum = d.querySelector('.download__amount').textContent;

    switch (selectedNum) {
      case '10':
        plan.textContent = 'basic';
        price.textContent = '$25';
        break;
      case '25':
        plan.textContent = 'bronze';
        price.textContent = '$30';
        break;
      case '50':
        plan.textContent = 'silver';
        price.textContent = '$40';
        break;
      case '100':
        plan.textContent = 'gold';
        price.textContent = '$50';
        break;
      default:
        plan.textContent = 'basic';
        price.textContent = '$25';
    }
  });
});

const subscribe_btn = document.querySelector('.plan--btn');
const subscribe_wrapper = document.querySelector('.section__wrapper');
const subscribe = document.querySelector('.subscribed');

subscribe_btn.addEventListener('click', () => {
  subscribe_wrapper.style.display = 'none';

  subscribe.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg><p>You have successfully subscribed to the <span>${plan.textContent}</span> plan!</p>
    <p>You will get <span>${selectedNum}</span> downloads per month.</p>
    `;
  subscribe.style.display = 'flex';

  const close_btn = document.querySelector('.icon-tabler-x');

  close_btn.addEventListener('click', () => {
    subscribe.style.display = 'none';
    subscribe_wrapper.style.display = 'flex';
  });
});
