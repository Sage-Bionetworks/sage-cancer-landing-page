document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.getElementById("menuOpen");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuOpen && menuClose && mobileMenu) {
    menuOpen.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = ""; // Restore scrolling
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
});
