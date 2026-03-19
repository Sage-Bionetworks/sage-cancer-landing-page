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

    // Mobile Ecosystem Menu Logic
    const mobileEcosystemMenuOpen = document.getElementById(
        "mobileEcosystemMenuOpen",
    );
    const mobileEcosystemMenu = document.getElementById("mobileEcosystemMenu");

    const updateMobileEcosystemMenuPosition = (trigger) => {
        if (window.innerWidth >= 900 && trigger) {
            const rect = trigger.getBoundingClientRect();
            mobileEcosystemMenu.style.top = `${rect.bottom + 8}px`;
            mobileEcosystemMenu.style.left = `${rect.left}px`;
        } else {
            mobileEcosystemMenu.style.top = "";
            mobileEcosystemMenu.style.left = "";
        }
    };

    const toggleMobileEcosystemMenu = (e) => {
        if (window.innerWidth < 900) return;

        const isActive = mobileEcosystemMenu.classList.toggle("active");
        const trigger = e?.currentTarget;

        mobileEcosystemMenuOpen?.setAttribute("aria-expanded", isActive);

        if (isActive) {
            updateMobileEcosystemMenuPosition(trigger);
        }
    };

    mobileEcosystemMenuOpen?.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMobileEcosystemMenu(e);
    });

    // Close ecosystem menu when clicking outside on desktop
    document.addEventListener("click", (e) => {
        if (
            mobileEcosystemMenu?.classList.contains("active") &&
            !mobileEcosystemMenu.contains(e.target) &&
            !mobileEcosystemMenuOpen?.contains(e.target)
        ) {
            mobileEcosystemMenu.classList.remove("active");
            mobileEcosystemMenuOpen?.setAttribute("aria-expanded", "false");
        }
    });

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-links.desktop-only a");

    // Map navigation links to their corresponding sections
    const trackedSections = Array.from(navLinks)
        .map((link) => {
            const id = link.getAttribute("href").substring(1);
            return document.getElementById(id);
        })
        .filter((section) => section !== null);

    /**
     * Updates the active state of navigation links based on scroll position.
     */
    function updateActiveLink() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.documentElement.scrollHeight;
        let activeSectionId = "";

        // Threshold to activate a section (accounts for sticky header)
        const threshold = 80;

        // Determine which section is currently active by checking scroll position against section offsets
        trackedSections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop - threshold) {
                activeSectionId = section.getAttribute("id");
            }
        });

        // Case: At the very top of the page
        if (scrollPosition < 50) {
            activeSectionId = "";
        }

        // Case: At the very bottom of the page (ensure Contact is highlighted)
        if (windowHeight + scrollPosition >= bodyHeight - 100) {
            activeSectionId =
                trackedSections[trackedSections.length - 1].getAttribute("id");
        }

        // Apply active class to the corresponding link
        navLinks.forEach((link) => {
            const linkId = link.getAttribute("href").substring(1);
            if (activeSectionId && linkId === activeSectionId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", () => {
        // Navbar styling
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled", "glassy");
        } else {
            navbar.classList.remove("scrolled", "glassy");
        }

        // Update scrollspy
        updateActiveLink();

        // Update ecosystem menu position if open
        if (
            mobileEcosystemMenu?.classList.contains("active") &&
            window.innerWidth >= 900
        ) {
            updateMobileEcosystemMenuPosition(mobileEcosystemMenuOpen);
        }
    });

    window.addEventListener("resize", () => {
        if (mobileEcosystemMenu?.classList.contains("active")) {
            if (window.innerWidth < 900) {
                mobileEcosystemMenu.classList.remove("active");
                mobileEcosystemMenuOpen?.setAttribute("aria-expanded", "false");
            } else {
                updateMobileEcosystemMenuPosition(mobileEcosystemMenuOpen);
            }
        }
    });

    // Initial check on load
    updateActiveLink();
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
