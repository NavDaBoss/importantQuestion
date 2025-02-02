document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    let message = document.getElementById("message");
    message.innerText = "Yay! I love you Jennie! ❤️";
    message.style.display = "block";

    startFlowerAnimation();
});

document.getElementById("no-btn").addEventListener("click", function() {
    const container = document.getElementById("main-container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = this.getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width - 20; 
    const maxY = containerRect.height - buttonRect.height - 20; 
    
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    this.classList.add("moving");
    this.style.transform = `translate(${randomX}px, ${randomY}px)`;
});


function startFlowerAnimation() {
    for (let i = 0; i < 15; i++) {
        let flower = document.createElement("div");
        flower.innerHTML = "🌸";
        flower.classList.add("flower");
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = window.innerHeight + "px"; 
        flower.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.body.appendChild(flower);

        setTimeout(() => flower.remove(), 3000);
    }
}
