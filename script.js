document.getElementById("surpriseBtn").addEventListener("click", function() {
    let message = document.getElementById("hiddenMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
    } else {
        message.classList.add("hidden");
    }
});
