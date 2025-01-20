document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".text-3 h1");
    const speed = 200; // Speed of the counting animation
  
    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const startCountUp = (counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / speed;
  
      const animate = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animate, 10); // Update every 10ms
        } else {
          counter.innerText = target; // Ensure it ends at the target
        }
      };
  
      animate();
    };
  
    // Check for elements in the viewport and trigger the animation
    const handleScroll = () => {
      counters.forEach((counter) => {
        if (isInViewport(counter) && !counter.classList.contains("animated")) {
          counter.classList.add("animated"); // Prevent re-triggering
          startCountUp(counter);
        }
      });
    };
  
    // Attach scroll and resize events
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  
    // Initial check
    handleScroll();
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