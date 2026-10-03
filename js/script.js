const themeToggle = document.getElementById("themeToggle");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const homeImage = document.querySelector(".home-image");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        homeImage.src = "images/h1n.png";
    } else {
        themeToggle.textContent = "🌙";
        homeImage.src = "images/h1.png";
    }
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.textContent = "Message sent successfully!";
    contactForm.reset();
});