// script.js
const scrollContainer = document.querySelector('.imgs-scroll');

let isDragging = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = 'grabbing'; // Change cursor to indicate dragging
});

scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    scrollContainer.style.cursor = 'grab'; // Reset cursor when leaving
});

scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
    scrollContainer.style.cursor = 'grab'; // Reset cursor on mouse up
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed by changing multiplier
    scrollContainer.scrollLeft = scrollLeft - walk;
});
