//SITE IN DEVELOPMENT PROMPT
// alert('Hey! This site is still in development (October 2020)');

// Query selectors
const header = document.querySelector('.header');
const aboutBtn = document.querySelector('#about-btn');
const navButtons = document.querySelectorAll('.nav-link');
const goToTopButton = document.querySelector('#toTop');
const typeWriterText = document.querySelector('.typewriter-text');
const seeMoreButton = document.querySelector('.see-more');
const toggleButton = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const form = document.querySelector('form');
// Modal query selectors
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close');
const images = document.querySelectorAll('.screenshot');
const modalImg = document.querySelector('#modal-image');
const captionText = document.querySelector('#caption');

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
    navList.classList.toggle('active');
    header.classList.toggle('active');
    header.style.backgroundColor = 'none';
  }

  // Show go to top button when scrolling down a bit.
  scrollY > 100
    ? (goToTopButton.style.display = 'block')
    : (goToTopButton.style.display = 'none');

  // Figure out which navbar link should be active based on scrollY
  // if (scrollY < 200) {
  //   setSelected(navButtons[0]);
  // } else if (scrollY >= 200 && scrollY < 800) {
  //   setSelected(navButtons[1]);
  // } else if (scrollY >= 800 && scrollY < 1500) {
  //   setSelected(navButtons[2]);
  // } else {
  //   setSelected(navButtons[3]);
  // }
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

function handleModal() {
  modal.style.display = 'block';
  modalImg.src = this.dataset.url;
  captionText.innerHTML = this.alt;
  header.style.visibility = 'hidden';
}

// get the form elements defined in your form HTML above

var button = document.getElementById('input-submit');
const status = document.getElementById('form-status');

// Success and Error functions for after the form is submitted

function success() {
  form.reset();
  status.innerHTML = 'Message Sent! Thank You!';
}

function error() {
  status.innerHTML = 'Oops! There was a problem.';
}

// handle the form submission event

form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  var data = new FormData(form);
  ajax(form.method, form.action, data, success, error);
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
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

// When the user clicks on (x), close the modal
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
// window.addEventListener('load', () => window.scrollTo(0, 0));

// Get the image and insert it inside the modal - use its "alt" text as a caption

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
