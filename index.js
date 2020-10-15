// Query selectors
const header = document.querySelector('.header');
const aboutBtn = document.querySelector('#about-btn');
const navButtons = document.querySelectorAll('.nav-link');
const goToTopButton = document.querySelector('#toTop');
const typeWriterText = document.querySelector('.typewriter-text');
const seeMoreButton = document.querySelector('.see-more');
const toggleButton = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

//  make url always stay the same
const removeHash = () => {
  history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search
  );
};

const handleScroll = (e) => {
  // Hide mobile menu on scroll
  if (header.classList.contains('active')) {
    navList.classList.toggle('active');
    header.classList.toggle('active');
    header.style.backgroundColor = 'none';
  }

  // Show go to top button when scrolling down a bit.
  scrollY > 100
    ? (goToTopButton.style.display = 'block')
    : (goToTopButton.style.display = 'none');

  // Figure out which navbar link should be active based on scrollY
  if (scrollY < 200) {
    setSelected(navButtons[0]);
  } else if (scrollY >= 200 && scrollY < 800) {
    setSelected(navButtons[1]);
  } else if (scrollY >= 800 && scrollY < 1500) {
    setSelected(navButtons[2]);
  } else {
    setSelected(navButtons[3]);
  }
};

const setSelected = (toSelect) => {
  navButtons.forEach((navButton) => {
    navButton.classList.remove('selected');
    navButton.classList.add('not-selected');
  });
  toSelect.classList.remove('not-selected');
  toSelect.classList.add('selected');
};

const handleNavButtonClick = () => {
  setSelected(navButton);
  if (header.classList.contains('active')) {
    header.classList.toggle('active');
    navList.classList.toggle('active');
  }
};

const handleToggleButtonClick = () => {
  setTimeout(() => {
    navList.classList.toggle('active');
  }, 300);
  header.classList.toggle('active');
  header.style.backgroundColor = 'black';
};

// Event Listeners
navButtons.forEach((navButton) => {
  navButton.addEventListener('click', handleNavButtonClick);
});
seeMoreButton.addEventListener('click', () => setSelected(navButtons[1]));
goToTopButton.addEventListener('click', () => window.scrollTo(0, 0));
toggleButton.addEventListener('click', handleToggleButtonClick);

window.addEventListener('scroll', handleScroll);
window.addEventListener('hashchange', removeHash);
window.addEventListener('load', () => window.scrollTo(0, 0));

// const typewriterOptions = [
//   'Full-Stack Web Developer',
//   'Thinker',
//   'Imaginer',
//   'Team Player'
// ];

// const loopOverTypeWriter = (options) => {
//   let count = 1;
//   setInterval(() => {
//     typeWriterText.innerHTML = options[count];
//     typeWriterText.style.animation = 'none';
//     typeWriterText.offsetHeight; /* trigger reflow */
//     typeWriterText.style.animation = null;
//     typeWriterText.style.animationDuration = '1s';
//     count++;
//     if (count >= options.length) count = 0;
//   }, 5000);
// };

// Get the modal
var modal = document.querySelector('.modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll('.screenshot');
var modalImg = document.querySelector('#modal-image');
var captionText = document.getElementById('caption');
imgs.forEach((img) => {
  img.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    header.style.visibility = 'hidden';
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  header.style.visibility = 'visible';
};
