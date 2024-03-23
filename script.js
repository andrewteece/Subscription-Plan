const download = [...document.querySelectorAll('.download')];
const plan = document.querySelector('plan__price');
const price = document.querySelector('span');

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
      default:
        plan.textContent = 'basic';
        price.textContent = '$25';
    }
  });
});
