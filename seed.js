// Function to increment a counter with a specific id and target value
function incrementCounter(id, targetValue, duration) {
  let currentValue = 0;
  const incrementStep = targetValue / duration;
  const element = document.getElementById(id);

  const interval = setInterval(() => {
    currentValue += incrementStep;
    element.innerText = Math.floor(currentValue);

    if (currentValue >= targetValue) {
      clearInterval(interval); // Stop the counter when the target is reached
      element.innerText = targetValue; // Ensure the final value is set correctly
    }
  }, 1); // Increment every 1ms for a smooth effect
}

// Initialize counters for each element
document.addEventListener("DOMContentLoaded", () => {
  incrementCounter("counter1", 168, 500); // Example: 123 with duration of 3000ms
  incrementCounter("counter2", 255, 500); // Example: 765 with duration of 4000ms
  incrementCounter("counter3", 1760, 500); // Example: 987 with duration of 5000ms
});
