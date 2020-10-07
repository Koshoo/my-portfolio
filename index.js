const header = document.querySelector('.header');
const aboutBtn = document.querySelector('#about-btn');
const navButtons = document.querySelectorAll('.nav-link');
const goToTopButton = document.querySelector('#toTop');

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
  if (scrollY === 0) header.style.backgroundColor = '';
  else {
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
  navButton.addEventListener('click', () => setSelected(navButton));
});
