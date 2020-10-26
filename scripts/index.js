// SITE IN DEVELOPMENT PROMPT
// alert('Hey! This site is still in development (October 2020)');

// Query selectors
const header = document.querySelector('.header');
const aboutBtn = document.querySelector('#about-btn');
const navButtons = document.querySelectorAll('.nav-link');
const goToTopButton = document.querySelector('#toTop');
const typeWriterText = document.querySelector('.typewriter-text');
const seeMoreButton = document.querySelector('.see-more');
const toggleButton = document.querySelector('.hamburger');
const bars = document.querySelectorAll('.hbar');
const navList = document.querySelector('.nav-list');
const form = document.querySelector('form');
const social = document.querySelector('.social');

// Modal query selectors
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close');
const images = document.querySelectorAll('.screenshot');
const modalImg = document.querySelector('#modal-image');
const captionText = document.querySelector('#caption');

const elementInViewport = (ele) => {
  let top = ele.offsetTop;
  let left = ele.offsetLeft;
  let width = ele.offsetWidth;
  let height = ele.offsetHeight;

  while (ele.offsetParent) {
    ele = ele.offsetParent;
    top += ele.offsetTop;
    left += ele.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    top + height <= window.pageYOffset + window.innerHeight &&
    left + width <= window.pageXOffset + window.innerWidth
  );
};

//  Make url always stay the same
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
    bars.forEach((bar) => bar.classList.remove('open'));
    navList.classList.toggle('active');
    header.classList.toggle('active');
    social.classList.toggle('active');
    header.style.backgroundColor = 'none';
  }

  // Show go to top button when scrolling down a bit.
  scrollY > 100
    ? (goToTopButton.style.display = 'block')
    : (goToTopButton.style.display = 'none');

  // Figure out which navbar link should be active and set it as active
  if (elementInViewport(document.querySelector('.about-title'))) {
    setSelected(navButtons[1]);
  } else if (elementInViewport(document.querySelector('.project-title'))) {
    setSelected(navButtons[2]);
  } else if (elementInViewport(document.querySelector('.contact-title'))) {
    setSelected(navButtons[3]);
  } else if (elementInViewport(document.querySelector('.hey'))) {
    setSelected(navButtons[0]);
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

const handleNavButtonClick = (navButton) => {
  setSelected(navButton);

  if (header.classList.contains('active')) {
    bars.forEach((bar) => bar.classList.remove('open'));
    header.classList.toggle('active');
    navList.classList.toggle('active');
    social.classList.toggle('active');
  }
};

const handleToggleButtonClick = () => {
  if (navList.classList.contains('active')) {
    navList.classList.toggle('active');
    social.classList.toggle('active');
  } else {
    timeout = setTimeout(() => {
      navList.classList.toggle('active');
      social.classList.toggle('active');
    }, 300);
  }
  bars.forEach((bar) => bar.classList.toggle('open'));
  header.classList.toggle('active');
};

function handleModal() {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  header.style.visibility = 'hidden';
}

// Event Listeners
navButtons.forEach((navButton) => {
  navButton.addEventListener('click', () => handleNavButtonClick(navButton));
});
seeMoreButton.addEventListener('click', () => setSelected(navButtons[1]));
goToTopButton.addEventListener('click', () => window.scrollTo(0, 0));
toggleButton.addEventListener('click', handleToggleButtonClick);

images.forEach((image) => {
  image.addEventListener('click', handleModal);
});

form.addEventListener('submit', (e) => {
  if (e.target[5].value) {
    e.preventDefault();
  }
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
  header.style.visibility = 'visible';
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
  header.style.visibility = 'visible';
});

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
//     typeWriterText.offsetHeight;
//     typeWriterText.style.animation = null;
//     typeWriterText.style.animationDuration = '1s';
//     count++;
//     if (count >= options.length) count = 0;
//   }, 5000);
// };
