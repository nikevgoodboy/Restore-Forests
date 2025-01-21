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
  