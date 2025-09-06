// MENU TOGGLE
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

// ACTIVE LINK
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  document.getElementById('nav-menu').classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200
});

sr.reveal('.home-title');
sr.reveal('.button', {delay: 400});
sr.reveal('.home-img', {delay: 600});
sr.reveal('.about-container', {interval: 200});
sr.reveal('.skills-card', {interval: 200});
sr.reveal('.work-img', {interval: 200});
sr.reveal('.contact-form', {interval: 200});