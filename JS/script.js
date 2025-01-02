// Toggle Dark Mode
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    const icon = document.getElementById("toggle-icon");
    const isDarkMode = body.classList.contains("dark-mode");

    // Update the icon
    if (isDarkMode) {
        icon.className = "moon-icon";
        icon.textContent = "🌙";
    } else {
        icon.className = "sun-icon";
        icon.textContent = "☀️";
    }
});

// Smooth Scrolling
document.querySelectorAll(".navbar a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Scroll Animation
const animateOnScroll = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.1 }
);

animateOnScroll.forEach((element) => {
    observer.observe(element);
});
