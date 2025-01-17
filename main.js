// main.js

// Navbar Scroll Effect
document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navigation-wrap");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // ScrollReveal Animations
  ScrollReveal().reveal(".hero h1", { delay: 300, origin: "bottom", distance: "50px", duration: 1000 });
  ScrollReveal().reveal(".text-bg", { delay: 300, origin: "left", distance: "50px", duration: 1000 });
  ScrollReveal().reveal(".container img", { delay: 300, origin: "right", distance: "50px", duration: 1000 });
  ScrollReveal().reveal(".container h2", { delay: 300, origin: "top", distance: "50px", duration: 1000 });
  ScrollReveal().reveal(".card", { delay: 300, interval: 100, origin: "bottom", distance: "50px", duration: 1000 });
  
  // Donation Button Animation
  const donateBtn = document.querySelector(".btn-warning");
  if (donateBtn) {
    donateBtn.addEventListener("mouseenter", () => {
      donateBtn.classList.add("btn-glow");
    });
    donateBtn.addEventListener("mouseleave", () => {
      donateBtn.classList.remove("btn-glow");
    });
  }
  
  // Form Validation
  const newsletterForm = document.querySelector("form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("first-name");
      const email = document.getElementById("email");
      if (firstName.value.trim() === "") {
        alert("Please enter your first name.");
        return;
      }
      if (email.value.trim() === "" || !validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Thank you for signing up for the newsletter!");
      newsletterForm.reset();
    });
  }
  
  // Email Validation Function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Google Maps Interactive Tooltip (Optional)
  const mapIframe = document.querySelector("iframe");
  if (mapIframe) {
    mapIframe.addEventListener("load", () => {
      console.log("Google Maps iframe loaded successfully.");
    });
  }
  // Add Animation on Button Hover and Click
const buttons = document.querySelectorAll(".animated-btn");

// Hover Animation
buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.classList.add("hovered");
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("hovered");
  });

  // Click Animation
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => {
      button.classList.remove("clicked");
    }, 300); // Duration of the click animation
  });
})





// JavaScript to trigger effects when hovering over the cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});








