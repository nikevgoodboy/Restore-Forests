document.addEventListener("DOMContentLoaded", () => {
  // Animate Navbar
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("show");

  // Animate Hero Section
  const hero = document.querySelector(".hero");
  setTimeout(() => {
    hero.classList.add("show");
  }, 500); // Add delay for hero section animation
});
document.querySelector(".btn-success").addEventListener("click", () => {
  document.querySelector("#target-section").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Add animation class when cards are in the viewport
  const animateCards = () => {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("animate");
      }
    });
  };

  // Event listeners
  window.addEventListener("scroll", animateCards);
  window.addEventListener("resize", animateCards);

  // Initial check
  animateCards();
});

document.querySelectorAll(".hover-image img").forEach((image) => {
  // Add mouseover effect
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.2)";
    image.style.transition = "transform 0.3s ease-in-out";
    image.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.2)";
  });

  // Remove mouseover effect
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
    image.style.boxShadow = "";
  });
});

// Function to trigger animations when cards are in view
function animateCardsOnScroll() {
  const cards = document.querySelectorAll(".animate-on-scroll");

  const options = {
    threshold: 0.3, // Trigger when 30% of the card is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // Add the 'visible' class to trigger the animation
        observer.unobserve(entry.target); // Stop observing once the animation is triggered
      }
    });
  }, options);

  cards.forEach((card) => {
    observer.observe(card); // Observe each card
  });
}

// Run the animation function when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  animateCardsOnScroll();
});

// Add smooth scrolling behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Lazy load images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-src]");

  const loadImage = (image) => {
    image.src = image.getAttribute("data-src");
    image.removeAttribute("data-src");
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  images.forEach((image) => imageObserver.observe(image));
});
// Function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add the animation class when in the viewport
function addAnimationOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  elements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
}

// Initial check
window.addEventListener("load", addAnimationOnScroll);
// On scroll event
window.addEventListener("scroll", addAnimationOnScroll);
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle the dropdown menu
  dropdown.addEventListener("mouseenter", () => {
    dropdownMenu.classList.add("show");
  });

  dropdown.addEventListener("mouseleave", () => {
    dropdownMenu.classList.remove("show");
  });
});
// JavaScript for navigation scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navigation-wrap");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});

// Alert when a "Call to action" button is clicked
const ctaButton = document.querySelector(".btn-success");
ctaButton.addEventListener("click", () => {
  alert("Thank you for your interest! Let's reforest the globe together.");
});

// Handle "Add More" button clicks
const addMoreButtons = document.querySelectorAll(".btn-success");
addMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("Feature coming soon! Stay tuned.");
  });
});

// Dropdown language selection
const languageSelect = document.querySelector(".form-select");
languageSelect.addEventListener("change", (event) => {
  alert(`Language changed to: ${event.target.value}`);
});

// Smooth scrolling for internal links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

// Dark mode toggle (optional feature)
const darkModeButton = document.createElement("button");
darkModeButton.textContent = "Toggle Dark Mode";
darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "10px";
darkModeButton.style.right = "10px";
darkModeButton.style.zIndex = "1000";
darkModeButton.className = "btn btn-dark";
document.body.appendChild(darkModeButton);

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Add CSS for dark mode (append dynamically)
const darkModeStyle = document.createElement("style");
darkModeStyle.textContent = `
  body.dark-mode {
    background-color: #121212;
    color: #ffffff;
  }
  body.dark-mode .card, body.dark-mode .btn {
    background-color: #1e1e1e;
    color: #ffffff;
  }
`;
document.head.appendChild(darkModeStyle);
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const addAnimation = () => {
    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("animate-card");
      }
    });
  };

  window.addEventListener("scroll", addAnimation);
  window.addEventListener("resize", addAnimation);

  // Initial animation trigger
  addAnimation();
});

