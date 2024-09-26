document.getElementById("zoom-button").addEventListener("click", function() {
    var sliderImages = document.querySelectorAll(".slider-image");
    var scrollbarContainer = document.getElementById("scrollbar-container");
    
    // Show the scrollbar container
    scrollbarContainer.classList.remove("hidden");
    
    // Empty the scrollbar container and add zoomed-out images
    scrollbarContainer.innerHTML = "";
    sliderImages.forEach(function(image) {
        var imgClone = image.cloneNode(true);
        imgClone.classList.add("scrollbar-image");
        imgClone.addEventListener("click", function() {
            // Show clicked image in the main slider
            document.querySelector(".slider-container").innerHTML = "";
            document.querySelector(".slider-container").appendChild(imgClone.cloneNode(true));
            scrollbarContainer.classList.add("hidden");  // Hide the scrollbar
        });
        scrollbarContainer.appendChild(imgClone);
    });
});

// Smooth animation when scrolling the scrollbar
document.getElementById("scrollbar-container").addEventListener("scroll", function() {
    var scrollbarImages = document.querySelectorAll(".scrollbar-image");
    scrollbarImages.forEach(function(image) {
        image.style.transform = "scale(1)";  // Adjust zoom for effect
    });
});
