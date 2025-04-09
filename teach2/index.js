const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");
const ratingButtons = document.querySelectorAll(".rate");
const submitBtn = document.getElementById("submitBtn");

let selectedRating = null;

// Show modal
openBtn.onclick = () => modal.classList.remove("hidden");

// Close modal
closeBtn.onclick = () => modal.classList.add("hidden");

// Highlight selected rating
ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    selectedRating = button.getAttribute("data-rating");
    ratingButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Store feedback in localStorage
submitBtn.onclick = () => {
  if (selectedRating) {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    feedbacks.push(selectedRating);
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    alert(`Thank you! You rated: ${selectedRating}`);
    modal.classList.add("hidden");
    selectedRating = null;
  } else {
    alert("Please select a rating first.");
  }
};
