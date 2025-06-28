// luxy.js Initialization
window.addEventListener("DOMContentLoaded", () => {
  luxy.init();
});

//aos.js Initializaton
window.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

// Navbar Section
const navToggler = document.querySelector(".nav-toggler");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const sidebarClose = document.querySelector(".sidebar-close");
const body = document.body;

// Function to open sidebar
function openSidebar() {
  navToggler.classList.add("active");
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
  body.style.overflow = "hidden";
}

// Function to close sidebar
function closeSidebar() {
  navToggler.classList.remove("active");
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  body.style.overflow = "";
}

// Event listeners
navToggler.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (sidebar.classList.contains("active")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarClose.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  closeSidebar();
});

sidebarOverlay.addEventListener("click", (e) => {
  if (e.target === sidebarOverlay) {
    closeSidebar();
  }
});

// Prevent sidebar from closing when clicking inside sidebar
sidebar.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close sidebar when clicking on sidebar links
const sidebarLinks = document.querySelectorAll(".sidebar-nav a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    closeSidebar();
  });
});

// Close sidebar on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sidebar.classList.contains("active")) {
    closeSidebar();
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && sidebar.classList.contains("active")) {
    closeSidebar();
  }
});

// Close sidebar when clicking anywhere outside (fallback)
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !navToggler.contains(e.target)
  ) {
    closeSidebar();
  }
});

//Counter Section
const counters = document.querySelectorAll(".counter");
let started = false;

function runCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const speed = 200;
  const increment = Math.max(1, Math.ceil(target / speed));
  let count = 0;

  const update = () => {
    if (count < target) {
      count += increment;
      counter.innerText = count;
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
}
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        counters.forEach((counter) => runCounter(counter));
        started = true;
        observer.disconnect(); // remove if you want it to run only once
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector(".stats-section"));


//our-team-slider-section
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, //mobile screen
  centeredSlides: false,
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1025: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
  },
});

//clients-review-slider
const swiperClient = new Swiper(".swiperClient", {
  slidesPerView: 1, //mobile screen
  centeredSlides: false,
  spaceBetween: 30,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
//accordian section
$(document).ready(function () {
  $(".header1").click(function () {
    $(".content1").slideToggle();
    $(".arrow1").toggleClass("rotated");
  });
  $(".header2").click(function () {
    $(".content2").slideToggle();
    $(".arrow2").toggleClass("rotated");
  });
  $(".header3").click(function () {
    $(".content3").slideToggle();
    $(".arrow3").toggleClass("rotated");
  });
  $(".header4").click(function () {
    $(".content4").slideToggle();
    $(".arrow4").toggleClass("rotated");
  });
  $(".header5").click(function () {
    $(".content5").slideToggle();
    $(".arrow5").toggleClass("rotated");
  });
});
