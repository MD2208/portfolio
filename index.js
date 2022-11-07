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

let isScrolling;
const sideBarElements = document.querySelectorAll('.sidebar a');
// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
  //add animation class when scroll start
  sideBarElements.forEach( (element) => {
    if(!element.classList.contains('sidebar-animation')){
        element.classList.add('sidebar-animation');
     }
  });
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		console.log( 'Scrolling has stopped.' );
    //remove animation class when scroll stops
    sideBarElements.forEach( (element) => {
      console.log('animation class removed');
      element.classList.remove('sidebar-animation');
    })

	}, 125);

}, false);
