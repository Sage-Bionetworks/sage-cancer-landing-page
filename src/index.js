document.addEventListener("DOMContentLoaded", () => {
    const menuOpen = document.getElementById("menuOpen");
    const menuClose = document.getElementById("menuClose");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuOpen && menuClose && mobileMenu) {
        menuOpen.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            menuOpen.setAttribute("aria-expanded", "true");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });

        menuClose.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            menuOpen.setAttribute("aria-expanded", "false");
            document.body.style.overflow = ""; // Restore scrolling
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("active");
                menuOpen.setAttribute("aria-expanded", "false");
                document.body.style.overflow = "";
            });
        });
    }

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled", "glassy");
        } else {
            navbar.classList.remove("scrolled", "glassy");
        }
    });
});

document
    .getElementById("feedback-button")
    ?.addEventListener("click", function (e) {
        e.preventDefault();

        const iframe = document.querySelector("#jsd-widget");
        const iframeDoc =
            iframe?.contentDocument || iframe?.contentWindow?.document;
        const fab = iframeDoc?.querySelector("#help-button");

        if (fab) {
            fab.click();
        }
    });
