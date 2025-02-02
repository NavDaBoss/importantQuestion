document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("message").innerText = "Yay! ❤️ Can't wait for our date!";
});

/* Move the "No" button when clicked */
document.getElementById("no-btn").addEventListener("click", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
