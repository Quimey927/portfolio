// About-me tab logic

const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

const addBorderBottom = (evt) => {
  tabLinks.forEach((link) => link.classList.remove('active-link'));
  evt.target.classList.add('active-link');

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

function removeImageInfo(evt) {
  const projectContainer = this.querySelector('.project__container');
  const projectDescription = this.querySelector('.project__description');

  projectContainer.classList.remove('dark-background');
  projectDescription.classList.add('hidden');
}

projects.forEach((image) => image.addEventListener('focus', addImageInfo));
projects.forEach((image) => image.addEventListener('mouseover', addImageInfo));

projects.forEach((image) =>
  image.addEventListener('focusout', removeImageInfo)
);
projects.forEach((image) =>
  image.addEventListener('mouseout', removeImageInfo)
);
