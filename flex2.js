document.getElementById("love-btn").addEventListener("click", function() {
    alert("I Love You Too!");
  });
  
  // Add event listener to navigation menu items
  document.querySelectorAll("nav ul li a").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      var targetId = event.target.getAttribute("href");
      var targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Add animation to photos
  document.querySelectorAll("#photos img").forEach(function(image) {
    image.addEventListener("mouseover", function() {
      image.style.transform = "scale(1.1)";
    });
    image.addEventListener("mouseout", function() {
      image.style.transform = "scale(1)";
    });
  });
  