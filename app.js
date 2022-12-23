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
