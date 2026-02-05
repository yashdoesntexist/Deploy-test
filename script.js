// Select buttons + feedback area
const noButton = document.querySelector(".large-no");
const yesButton = document.querySelector(".large-yes");
const feedback = document.getElementById("feedback");

let scale = 1;

// Messages that cycle when user clicks No
const messages = [
  "One more try?",,
  "Really?",
  "Very funny missi",
  "Are you serious missi?",
    "You cant possibly click no now",
];
let msgIndex = 0;

// Helper to show a feedback message with small animation
function showFeedback(text) {
  feedback.textContent = text;
  feedback.classList.remove("visible");
  // Force reflow to restart transition
  void feedback.offsetWidth;
  feedback.classList.add("visible");
  // tiny wiggle animation
  feedback.style.animation = "none";
  setTimeout(() => { feedback.style.animation = "wiggle 700ms ease"; }, 10);
  // remove animation name after it finishes so it can be reapplied later
  setTimeout(() => { feedback.style.animation = "none"; }, 720);
}

// NO button behavior: shrink and update message each click
noButton.addEventListener("click", (e) => {
  e.preventDefault();

  // shrink — chosen to visually work with wide (400px) buttons
  scale -= 0.15;

  if (scale <= 0.08) {
    // disappear
    noButton.style.opacity = "0";
    noButton.style.pointerEvents = "none";
    noButton.style.transform = "scale(0.01)";
    showFeedback("Okay... you win. The No button vanished. You have no choice stinky");
    return;
  }

  noButton.style.transform = `scale(${scale})`;

  // update message (cycle through messages)
  showFeedback(messages[msgIndex] || "That no button was click on accident I know");
  msgIndex = (msgIndex + 1) % messages.length;
});

// YES behavior: go to yes.html
yesButton.addEventListener("click", () => {
  window.location.href = "yes.html";
});
