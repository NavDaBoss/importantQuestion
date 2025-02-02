document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("question").style.display = "none";
    document.querySelector(".buttons").style.display = "none";

    let message = document.getElementById("message");
    message.innerText = "Yay! ❤️ I love you!";
    message.style.display = "block";

    startFlowerAnimation();
});


document.getElementById("no-btn").addEventListener("click", function() {
    const buttonWidth = this.offsetWidth;
    const buttonHeight = this.offsetHeight;
    
    const maxX = window.innerWidth - buttonWidth - 40; 
    const maxY = window.innerHeight - buttonHeight - 40; 
    
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    if (randomX < 20) randomX = 20;
    if (randomY < 20) randomY = 20;

    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
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
