document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-btn");

    if (!localStorage.getItem("cookiesAccepted")) {
        popup.style.display = "flex";
    }

    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        popup.style.display = "none";
    });
});