document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navbarMenu = document.querySelector(".navbar-menu");
    const navbarActions = document.querySelector(".navbar-actions");
  
    hamburger.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
      navbarActions.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  
    dropdownToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        var isVisible = dropdownMenu.style.display === "block";
  
        document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
          menu.style.display = "none";
        });
  
        if (!isVisible) {
          dropdownMenu.style.display = "block";
        }
      });
    });
  
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".navbar-item")) {
        document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
          menu.style.display = "none";
        });
      }
    });
  });

  // for mobile 
  function openNav() {
    document.getElementById("mySidepanel").style.width = "100%";
    document.getElementById("mySidepanel").style.height= "100vh";

  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
