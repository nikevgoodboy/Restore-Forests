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
