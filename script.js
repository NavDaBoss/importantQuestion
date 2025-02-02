document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("main-container").style.display = "none";
    let message = document.getElementById("message");
    message.innerText = "Yay! ❤️ I love you!";
    message.style.display = "block";
});

document.getElementById("no-btn").addEventListener("click", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
