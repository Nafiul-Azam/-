// Select all "Learn More" buttons
const buttons = document.querySelectorAll(".learn-more");

// Loop through each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the paragraph inside the same card
    const content = button.closest(".card").querySelector("p");

    // Toggle display
    if (content.style.display === "block") {
      content.style.display = "none";
      button.textContent = "Learn More";
    } else {
      content.style.display = "block";
      button.textContent = "Show Less";
    }
  });
});
