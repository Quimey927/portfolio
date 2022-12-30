// Nav-links active logic

const navLinks = document.querySelectorAll('.nav-list a');

const sections = document.querySelectorAll('section');

function debounce(func, wait, immediate) {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}

const addActiveClass = debounce(() => {
  const windowVerticalMiddlePoint = window.scrollY + window.innerHeight / 2;

  const sectionsStartPoints = [];

  let currentSection = 'Inicio';

  const sectionsIndex = {
    0: 'Inicio',
    1: 'Sobre mí',
    2: 'Proyectos',
    3: 'Contactame',
  };

  for (let section of sections) {
    sectionsStartPoints.push(section.offsetTop);
  }

  for (let value of sectionsStartPoints) {
    const index = sectionsStartPoints.indexOf(value);

    if (windowVerticalMiddlePoint < sectionsStartPoints[index]) {
      currentSection = sectionsIndex[index - 1];
      break;
    }

    currentSection = 'Contactame';
  }

  for (let link of navLinks) {
    if (link.innerText === currentSection) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
}, 20);

window.addEventListener('scroll', addActiveClass);

// About-me tab logic

const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

const addBorderBottom = (evt) => {
  tabLinks.forEach((link) => {
    link.classList.remove('active-link');
    link.classList.add('not-active-link');
  });

  evt.target.classList.add('active-link');
  evt.target.classList.remove('not-active-link');

  tabContents.forEach((tabContent) =>
    tabContent.classList.remove('active-tab')
  );

  const activeTab = document.getElementById(evt.target.innerText);

  activeTab.classList.add('active-tab');
};

tabLinks.forEach((link) => link.addEventListener('click', addBorderBottom));

// Projects images logic

const projects = document.querySelectorAll('.project');

function addImageInfo(evt) {
  const projectContainer = this.querySelector('.project__container');
  const projectDescription = this.querySelector('.project__description');

  projectContainer.classList.add('dark-background');
  projectDescription.classList.remove('hidden');
}

function rmvImageInfo(evt) {
  const projectContainer = this.querySelector('.project__container');
  const projectDescription = this.querySelector('.project__description');

  projectContainer.classList.remove('dark-background');
  projectDescription.classList.add('hidden');
}

projects.forEach((image) => image.addEventListener('focus', addImageInfo));
projects.forEach((image) => image.addEventListener('mouseover', addImageInfo));
projects.forEach((image) => image.addEventListener('focusout', rmvImageInfo));
projects.forEach((image) => image.addEventListener('mouseout', rmvImageInfo));

// E-mail confirmation logic and Animation logic

const submitButton = document.querySelector('.submit-button');
const confirmationParagraph = document.querySelector('.email-confirmation');
const loadingParagraph = document.querySelector('.loading');

const sendEmail = () => {
  loadingParagraph.classList.add('animation');
  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_akoynia';
  const templateID = 'template_fkv1krc';

  emailjs.send(serviceID, templateID, params).then((res) => {
    loadingParagraph.classList.remove('animation');
    confirmationParagraph.classList.add('animation');
    setTimeout(() => {
      confirmationParagraph.classList.remove('animation');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    }, 4000);
  });
};

submitButton.addEventListener('click', sendEmail);
