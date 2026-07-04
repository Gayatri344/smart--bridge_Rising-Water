document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function() {
            const submitBtn = document.querySelector(".btn");
            if (submitBtn) {
                submitBtn.innerText = "Processing Analytics Engine...";
                submitBtn.style.opacity = "0.7";
                submitBtn.style.pointerEvents = "none";
            }
        });
    }
});
