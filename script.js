const hamburger = document.querySelector('.hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation')
const shadow = document.querySelector('.shadow');
const largeScreenNavigation = document.querySelector('.largescreen-navigation');

hamburger.addEventListener('click',() =>{
    console.log('hello');
    hamburger.classList.toggle('active');
    mobileNavigation.classList.toggle('active');
    largeScreenNavigation.classList.toggle('active');
    shadow.classList.toggle('active');
});
shadow.addEventListener('click',() =>{
    hamburger.classList.remove('active');
    mobileNavigation.classList.remove('active');
    largeScreenNavigation.classList.remove('active');
    shadow.classList.remove('active');
})



const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = { threshold: 0.8 };

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



