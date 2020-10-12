const header = document.querySelector('.header');
const aboutBtn = document.querySelector('#about-btn');
const navButtons = document.querySelectorAll('.nav-link');
const goToTopButton = document.querySelector('#toTop');
const typeWriterText = document.querySelector('.typewriter-text');
const seeMoreButton = document.querySelector('.see-more');

const toggleButton = document.querySelector('.toggle-button');
const navlinks = document.querySelectorAll('.nav-links')[0];
const removeHash = () => {
  history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search
  );
};

const handleScroll = (e) => {
  const { scrollY } = e.path[1];
  const header = document.querySelector('.header');
  if (scrollY === 0) header.style.backgroundColor = 'black';
  else {
    // header.style.backgroundColor = '#ecad0e';
    header.style.backgroundColor = 'black';
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

const typewriterOptions = [
  'Full-Stack Web Developer',
  'Thinker',
  'Imaginer',
  'Team Player'
];

const loopOverTypeWriter = (options) => {
  let count = 1;
  setInterval(() => {
    typeWriterText.innerHTML = options[count];
    typeWriterText.style.animation = 'none';
    typeWriterText.offsetHeight; /* trigger reflow */
    typeWriterText.style.animation = null;
    typeWriterText.style.animationDuration = '1s';
    count++;
    if (count >= options.length) count = 0;
  }, 5000);
};
// loopOverTypeWriter(typewriterOptions);

window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    goToTopButton.style.display = 'block';
  } else {
    goToTopButton.style.display = 'none';
  }
});
window.addEventListener('hashchange', removeHash);
window.addEventListener('load', () => window.scrollTo(0, 0));

goToTopButton.addEventListener('click', () => window.scrollTo(0, 0));

navButtons.forEach((navButton) => {
  navButton.addEventListener('click', () => {
    setSelected(navButton);
    if (header.classList.contains('active')) {
      header.classList.toggle('active');
      navlinks.classList.toggle('active');
    }
  });
});
seeMoreButton.addEventListener('click', () => setSelected(navButtons[1]));

toggleButton.addEventListener('click', () => {
  navlinks.classList.toggle('active');
  header.classList.toggle('active');
  header.style.backgroundColor = 'black';
});
