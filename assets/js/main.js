// handling the menu switch
const body = document.querySelector("body");
const menu = document.querySelector("nav#menu");
const header = document.querySelector('header')
const logo = document.querySelector("img#logo");
const toggleButton = document.querySelector('#toggleButton')
const menuItems = document.querySelectorAll('.nav-link')

body.onscroll = () => {
  // switching the menu style if the scroll height is higher than from 0
  if (window.scrollY == 0 && window.scrollX == 0) {
      logo.src = './assets/img/logos/logo.png'
      toggleButton.style.filter = 'none'
      header.classList.add('bg-white');
      menu.classList.add('border-dark')
      menuItems.forEach(menuItem => {
          menuItem.classList.remove('text-white')
          menuItem.classList.add('text-dark')
      })
} else {
    logo.src = './assets/img/logos/logo-mono.png'
    toggleButton.style.filter = 'invert(1)'
    header.classList.remove('bg-white');
    header.style.backgroundColor = '#3E4F74'
    menu.classList.remove('border-dark')
    menuItems.forEach(menuItem => {
        menuItem.classList.remove('text-dark')
        menuItem.classList.add('text-white')
    })
  }
};

AOS.init()