const details = document.querySelectorAll('details');

const detailsList = Array.from(details);

function toggleQuestionImg(e) {
  const detail = e.currentTarget;
  const image = detail.querySelector('.faq-card__question-logo');

  if (detail.open) {
    image.src = '/assets/images/icon-minus.svg';
    image.alt = 'Collapse Question';
  } else {
    image.src = '/assets/images/icon-plus.svg';
    image.alt = 'Expand Question';
  }
}

detailsList.forEach(detail => {
  detail.addEventListener('toggle', toggleQuestionImg);
});
