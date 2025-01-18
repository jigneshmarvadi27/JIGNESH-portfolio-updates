document.addEventListener("DOMContentLoaded", () => {
    const scrollContainers = [
      { id: "roverImages", speed: 1 },
      { id: "swarmRobotImages", speed: 1}
    ];
  
    scrollContainers.forEach(({ id, speed }) => {
      const scrollContainer = document.getElementById(id);
  
      // Duplicate images for seamless scrolling
      const images = scrollContainer.innerHTML;
      scrollContainer.innerHTML += images;
  
      let scrollPosition = 0;
  
      function scrollImages() {
        scrollPosition -= speed; // Adjust scroll speed
        if (Math.abs(scrollPosition) >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0; // Reset scroll position
        }
        scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(scrollImages);
      }
  
      scrollImages(); // Start scrolling
    });
  });
  