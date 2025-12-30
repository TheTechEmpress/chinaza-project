  const navbar = document.querySelector(".custom-navbar");
  const toggler = document.querySelector(".custom-toggler");
  const menu = document.querySelector("#mynavbar");
  const navLinks = document.querySelectorAll(".nav-animate");

  // Toggle menu
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    menu.classList.toggle("show");
  });

  // Scroll effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Active menu on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Active menu on scroll
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 120;

    navLinks.forEach(link => {
      const section = document.getElementById(link.dataset.section);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

//   hero section Scroll Reveal Animation

const heroText = document.querySelector(".hero-text");
const heroImage = document.querySelector(".hero-image");

  window.addEventListener("load", () => {
    heroText.classList.add("show");
    heroImage.classList.add("show");
  });


// typewriter effect
const roles = [
    "Scrum Master",
    "Executive Assistant",
    "Agile Project Manager",
    "Operations Support Specialist"
  ];

  const typewriter = document.getElementById("typewriter");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typewriter.textContent = currentRole.slice(0, charIndex++);
      typewriter.classList.add("type-cursor");

      if (charIndex > currentRole.length) {
        setTimeout(() => (isDeleting = true), 1200);
      }
    } else {
      typewriter.textContent = currentRole.slice(0, charIndex--);

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeEffect, speed);
  }

  typeEffect();

// about us scroll reveal animation

  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".about-image");

  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 1.2;
    const aboutTop = aboutText.getBoundingClientRect().top;
    const imageTop = aboutImage.getBoundingClientRect().top;

    if (aboutTop < triggerPoint) {
      aboutText.classList.add("show");
    }

    if (imageTop < triggerPoint) {
      aboutImage.classList.add("show");
    }
  });

// services scroll reveal animation
const serviceCards = document.querySelectorAll(".service-card");

  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 1.2;
    serviceCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerPoint) {
        card.classList.add("show");
      }
    });
  });


//  education and experience scroll reveal animation
  // Scroll reveal for left/right cards
  const leftCards = document.querySelectorAll(".left-card");
  const rightCards = document.querySelectorAll(".right-card");

  function revealCards(cards, directionClass) {
    const triggerPoint = window.innerHeight / 1.2;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if(top < triggerPoint){
        card.classList.add(directionClass);
      }
    });
  }

  window.addEventListener("scroll", () => {
    revealCards(leftCards, "show-left");
    revealCards(rightCards, "show-right");
  });

  // Expandable card details
  const expandButtons = document.querySelectorAll(".expand-btn");
  expandButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;
      if(details.style.maxHeight){
        details.style.maxHeight = null;
        btn.textContent = "More";
      } else {
        details.style.maxHeight = details.scrollHeight + "px";
        btn.textContent = "Less";
      }
    });
  });



// certifications
const certCards = document.querySelectorAll(".cert-card");

  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 1.2;

    certCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerPoint) {
        card.classList.add("show");
      }
    });
  });

  // get in touch
  const contactCards = document.querySelectorAll(".contact-card");

  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 1.2;

    contactCards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerPoint) {
        card.classList.add("show");
      }
    });
  });

// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// back to top
  const backToTopButton = document.getElementById("backToTop");

  // Show button after scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  