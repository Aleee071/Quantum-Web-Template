//Tracks the link of an active page:
let currentURL = window.location.href;

//Fixed Navbar:
window.addEventListener('scroll', function () {
    let nav = document.querySelector("nav");
    const e = window.matchMedia("(max-width: 992px)");
    if (this.window.scrollY > 30) {
        if (!e.matches) {
            nav.classList.add("stickyNav");
        } else if (e.matches) {
            nav.style.position = "fixed";
            nav.style.zIndex = '18';
            nav.style.boxShadow = '4px 0 20px -5px rgba(0, 0, 0, 0.1)';
        }
    } else if (this.window.scrollY < 30) {
        nav.classList.remove("stickyNav");
    }
})

//Navigation bar search and close button:
let search_btn = document.getElementById("btn-search");
search_btn.addEventListener("click", () => {
    document.getElementById("searchBar").style.display = 'flex';
})

let close_btn = document.getElementById("close-btn");
close_btn.addEventListener('click', () => {
    document.getElementById("searchBar").style.display = 'none';
})

//Effects for active link:
let navLinks = document.querySelectorAll(".navbar a");
for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].href === currentURL && (!currentURL.includes("elements.html"))) {
        navLinks[i].classList.add("active");
        break;
    }
}

if (currentURL.includes("elements.html")) {
    navLinks[3].classList.add("active");
    navLinks[4].classList.remove("active");
}

//VideoPlayer settings:
const videoPlayer = document.getElementById("VideoPlayer");
function playBtn() {
    const closeBtn = document.getElementById("closeBtn");
    videoPlayer.style.display = 'block';
    document.body.style.overflowY = "hidden";
    closeBtn.style.display = 'block';
    videoPlayer.style.animation = 'video-fade-in 0.5s ease';
}

function closeBtn() {
    // const videoPlayer = document.getElementById("VideoPlayer");
    const closeBtn = document.getElementById("closeBtn");
    videoPlayer.style.animation = 'video-fade-out 0.5s ease';
    document.body.style.overflowY = "auto";
    closeBtn.style.display = 'none';
    setTimeout(() => {
        videoPlayer.style.display = 'none';
    }, 500);
}

//Accordion:
let accordion = document.querySelectorAll(".accordion-custom");
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle("collapse-hidden");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.animation = "accordion-collapse 0.5s ease";
            setTimeout(() => {
                panel.style.display = "none";
            }, 480);
        } else {
            panel.style.display = "block";
            panel.style.animation = "accordion-expand 0.5s ease";
        }
    });
}

//Functionality of Some Buttons for Aside:
function service_dropdownToggle() {
    let dropdown = document.getElementById("dropdown");
    dropdown.style.animation = ' none';
    if (dropdown.style.display == 'block') {
        dropdown.style.animation = "fade-out-aside-dropdown 0.4s ease";
        setTimeout(() => {
            dropdown.style.display = "none";
        }, 280);
    } else {
        dropdown.style.display = 'block';
        dropdown.style.animation = "fade-in 0.4s ease";
    }
}

function web_dropdownToggle() {
    let dropdown = document.getElementById("dropdown-2");
    dropdown.style.animation = ' none';
    if (dropdown.style.display == 'block') {
        dropdown.style.animation = "fade-out-aside-dropdown 0.4s ease";
        setTimeout(() => {
            dropdown.style.display = "none";
        }, 280);
    } else {
        dropdown.style.display = 'block';
        dropdown.style.animation = "fade-in 0.4s ease";
    }
}

function aside_toggle() {
    //fade bg for Aside:
    let aside = document.getElementById("aside");
    let asideFade = document.getElementById("aside-overlay")
    asideFade.style.display = 'block';
    asideFade.style.animation = "aside-overlay 0.5s ease";
    aside.style.animation = "aside-animation 0.5s ease";
    aside.style.display = 'block';
    document.body.style.overflow = "hidden";
}

function aside_closeBtn() {
    let aside = document.getElementById("aside");
    let asideFade = document.getElementById("aside-overlay");
    aside.style.animation = "aside-out-animation 0.6s ease";
    asideFade.style.animation = "aside-overlay-out 0.6s ease";
    setTimeout(() => {
        aside.style.display = 'none';
        asideFade.style.display = 'none';
    }, 500);
    document.body.style.overflow = "auto";
}

//Testimonial Slider:
if (currentURL.includes("elements.html")) {

    const sliderBtn = document.getElementsByClassName("slider-btn");
    const slider = document.getElementById("testimonal-slider");

    sliderBtn[0].onclick = function () {
        slider.style.transform = "translateX(0px)";
        for (let i = 0; i < 4; i++) {
            sliderBtn[i].classList.remove("slider-btn-active")
        }
        this.classList.add("slider-btn-active");
    }

    sliderBtn[1].onclick = function () {

        if (window.innerWidth <= 1399.98 && window.innerWidth >= 1200) {
            slider.style.transform = "translateX(-540px)";
        } else if (window.innerWidth <= 1198.99 && window.innerWidth >= 992) {
            slider.style.transform = "translateX(-440px)";
        } else if (window.innerWidth <= 991.98 && window.innerWidth >= 768) {
            slider.style.transform = "translateX(-696px)";
        } else if (window.innerWidth <= 767.98 && window.innerWidth >= 576) {
            slider.style.transform = "translateX(-500px)";
        } else if (window.innerWidth <= 575.98) {
            slider.style.transform = "translateX(-94vw)";
        }
        for (let i = 0; i < 4; i++) {
            sliderBtn[i].classList.remove("slider-btn-active")
        }
        this.classList.add("slider-btn-active");
    }

    sliderBtn[2].onclick = function () {
        if (window.innerWidth <= 1399.98 && window.innerWidth >= 1200) {
            slider.style.transform = "translateX(-1080px)";
        } else if (window.innerWidth <= 1198.99 && window.innerWidth >= 992) {
            slider.style.transform = "translateX(-875px)";
        } else if (window.innerWidth <= 991.98 && window.innerWidth >= 768) {
            slider.style.transform = "translateX(-1378px)";
        } else if (window.innerWidth <= 767.98 && window.innerWidth >= 576) {
            slider.style.transform = "translateX(-1526px)";
        } else if (window.innerWidth <= 575.98) {
            slider.style.transform = "translateX(-187.5vw)";
        }
        for (let i = 0; i < 4; i++) {
            sliderBtn[i].classList.remove("slider-btn-active")
        }
        this.classList.add("slider-btn-active");
    }

    sliderBtn[3].onclick = function () {
        if (window.innerWidth <= 1399.98 && window.innerWidth >= 1200) {
            slider.style.transform = "translateX(-1620px)";
        } else if (window.innerWidth <= 1198.99 && window.innerWidth >= 992) {
            slider.style.transform = "translateX(-1318px)";
        } else if (window.innerWidth <= 991.98 && window.innerWidth >= 768) {
            slider.style.transform = "translateX(-2067px)";
        } else if (window.innerWidth <= 767.98 && window.innerWidth >= 576) {
            slider.style.transform = "translateX(-1526px)";
        } else if (window.innerWidth <= 575.98) {
            slider.style.transform = "translateX(-281vw)";
        }
        for (let i = 0; i < 4; i++) {
            sliderBtn[i].classList.remove("slider-btn-active")
        }
        this.classList.add("slider-btn-active");
    }
}

//Counters:
if (currentURL.includes("about.html")) {

    function primaryCounter() {
        let counter = document.querySelector(".primaryCounter");
        const target = parseInt(counter.getAttribute("data-value"));
        const add = 5;
        let innertext = parseInt(counter.innerHTML);
        innertext += add;
        counter.innerHTML = innertext;

        if (counter.innerHTML < target) {
            setTimeout(primaryCounter, 1);
        } else {
            clearTimeout(primaryCounter);
        }
    }
    primaryCounter();

    let counters = document.querySelectorAll(".counter");
    function counterAnimation(counter) {
        const target = parseInt(counter.getAttribute("data-value"));
        let innertext = parseInt(counter.innerHTML);
        const add = 1;
        innertext += add;
        counter.innerHTML = innertext;

        if (innertext < target) {
            setTimeout(function () {
                counterAnimation(counter);
            }, 70); // Delay in milliseconds, you can adjust this as needed
        }
    }

    counters.forEach(function (counter) {
        counterAnimation(counter);
    });
}