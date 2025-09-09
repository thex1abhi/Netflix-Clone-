const scrollContainer = document.getElementById("scrollContainer");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

scrollLeft.addEventListener("click", () => {
 
  scrollContainer.scrollBy({ left: -700, behavior: "smooth" });
});

scrollRight.addEventListener("click", () => {
 
  scrollContainer.scrollBy({ left: 700, behavior: "smooth" });
});

function updateScrollButtons() {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  scrollLeft.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
  scrollRight.style.display = scrollContainer.scrollLeft < maxScrollLeft ? "block" : "none";
}

scrollContainer.addEventListener("scroll", updateScrollButtons);
window.addEventListener("resize", updateScrollButtons);
document.addEventListener("DOMContentLoaded", updateScrollButtons);


