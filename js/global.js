let icon = document.querySelector(".icon");
let mobileLinks = document.querySelector(".mobile-links");
let showMenu = true;

icon.addEventListener("click", function () {
  if (showMenu === true) {
    mobileLinks.style.display = "block";
    showMenu = false;
  } else {
    mobileLinks.style.display = "none";
    showMenu = true;
  }
});
