// For NAVBAR
const toggleBtn= document.querySelector('.toggle');
const sideNav=document.querySelector('.toggle .navbar-side');
toggleBtn.addEventListener('click', (e) => {
  toggleBtn.classList.toggle('toggle-active');
  sideNav.classList.toggle('passive-links');
  sideNav.classList.toggle('active-links');
});
// For CARDS
const cards = document.querySelectorAll('.card');

cards.forEach( (item) => { item.addEventListener('mouseover', (e) => {
  const cardName = item.classList[1];
  const listPart = document.querySelector('.'+cardName+' .list-group');
  listPart.classList.remove('hidden-card-part');
});
});
cards.forEach( (item) => { item.addEventListener('mouseout', (e) => {
  const cardName = item.classList[1];
  const listPart = document.querySelector('.'+cardName+' .list-group');
  listPart.classList.add('hidden-card-part');
});
});
