document.addEventListener("DOMContentLoaded", function () {
    const particleContainer = document.getElementById("particle-container");

    // PartikÃ¼l oluÅŸturma fonksiyonu
    function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.animationDuration = Math.random() * 2 + 1 + "s";

        particleContainer.appendChild(particle);

        // PartikÃ¼lÃ¼ sayfadan kaldÄ±rma
        particle.addEventListener("animationend", function () {
            particle.remove();
        });
    }

    // Belirli aralÄ±klarla partikÃ¼l oluÅŸtur
    setInterval(createParticle, 200);

});