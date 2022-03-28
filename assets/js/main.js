/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

var typed = new Typed(".typing", {
    strings: ["Developer", "Student", "Athlete"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Developer", "Student", "Athlete"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
//---------------------------------------

// 'use strict';

// const modal= document.querySelector('.modal');

// const btnshowmodal = document.querySelectorAll('.show-modal');
// const btnclosemodal = document.querySelector('.close-modal');

// const overlay = document.querySelector('.overlay');

// const openmodal = function(){
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }

// const closemodal = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }

// for (let i=0; i<btnshowmodal.length ; i++){
//     //console.log(btnshowmodal[i]);

//     btnshowmodal[i].addEventListener('click',openmodal);
    
// }

// btnclosemodal.addEventListener('click', closemodal);
// overlay.addEventListener('click', closemodal);


// document.addEventListener('keydown', function(e){
//     //console.log('a key pressed');
//     console.log(e);

//     if(e.key=='Escape'){
//         // hidden not then
//         closemodal();
//     }
// });

// $(document).ready(function(){
//     $(window).scroll(function(){
//         // sticky navbar on scroll script
//         if(this.scrollY > 20){
//             $('.navbar').addClass("sticky");
//         }else{
//             $('.navbar').removeClass("sticky");
//         }
        
//         // scroll-up button show/hide script
//         if(this.scrollY > 500){
//             $('.scroll-up-btn').addClass("show");
//         }else{
//             $('.scroll-up-btn').removeClass("show");
//         }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function(){
//         $('html').animate({scrollTop: 0});
//         // removing smooth scroll on slide-up button click
//         $('html').css("scrollBehavior", "auto");
//     });

//     $('.navbar .menu li a').click(function(){
//         // applying again smooth scroll on menu items click
//         $('html').css("scrollBehavior", "smooth");
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function(){
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");
//     });

//     // typing text animation script
//     var typed = new Typed(".typing", {
//         strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     var typed = new Typed(".typing-2", {
//         strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
//         typeSpeed: 100,
//         backSpeed: 60,
//         loop: true
//     });

//     // owl carousel script
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });