// Ensure ScrollReveal is loaded first
// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    origin: "top", // The origin of the reveal (top, bottom, left, right)
    distance: "50px", // How far the element will travel
    duration: 1000, // Duration of the animation (in milliseconds)
    delay: 200, // Delay between the animations of each element
    reset: true, // Reset the animation when scrolling up
    easing: "ease-out", // Animation easing
  });

  // Reveal elements as they come into view
  sr.reveal(".hero h1", {
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 500,
    easing: "ease-out",
  });

  sr.reveal(".accordion-item", {
    interval: 200, // Delay between each item in the accordion
    duration: 1000,
    distance: "40px",
    easing: "ease-out",
  });

  sr.reveal(".container img", {
    duration: 1200,
    distance: "100px",
    easing: "ease-out",
  });

  sr.reveal(".cloumn", {
    duration: 1200,
    distance: "100px",
    easing: "ease-out",
  });

  sr.reveal(".footer", {
    origin: "bottom",
    distance: "50px",
    duration: 1500,
    delay: 500,
    easing: "ease-out",
  });

  // Additional animations for buttons or specific elements can be added here
});
sr.reveal(".btn", {
  opacity: 0,
  duration: 1000,
  delay: 300,
  easing: "ease-out",
});

sr.reveal(".bi-facebook, .bi-instagram, .bi-tiktok, .bi-twitter", {
  duration: 1200,
  distance: "20px",
  opacity: 0,
  delay: 200,
  easing: "ease-out",
});
