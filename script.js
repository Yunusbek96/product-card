
const cards = document.querySelectorAll('.product-card');

let activeCard = null;
let startX, startY, originX, originY;
let isDragging = false;

cards.forEach(card => {
  card.addEventListener('mousedown', (e) => {
    e.preventDefault(); 
    if (activeCard && activeCard !== card) {
      resetCard(activeCard);
    }
    activeCard = card;
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;

    const matrix = new DOMMatrix(getComputedStyle(card).transform);
    originX = matrix.m41;
    originY = matrix.m42;

    card.classList.add('dragging');
    card.classList.remove('snapping');
  });
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging || !activeCard) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  activeCard.style.transform = `translate(${originX + dx}px, ${originY + dy}px) scale(1.05) rotate(1.5deg)`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging || !activeCard) return;
  const card = activeCard;
  card.classList.remove('dragging');
  card.classList.add('snapping');
  card.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';

  const onFinish = () => {
    card.classList.remove('snapping');
    card.style.transform = '';
    card.removeEventListener('transitionend', onFinish);
  };
  card.addEventListener('transitionend', onFinish, { once: true });

  isDragging = false;
  activeCard = null;
});

function resetCard(card) {
  card.classList.remove('dragging');
  card.classList.add('snapping');
  card.style.transform = 'translate(0, 0) scale(1) rotate(0deg)';
  setTimeout(() => {
    card.classList.remove('snapping');
    card.style.transform = '';
  }, 500);
}