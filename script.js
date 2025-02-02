document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("clickButton");
    const intro = document.getElementById("intro");
    const message = document.getElementById("message");
    const fireworksContainer = document.createElement("div"); // Havai fişekler için div

    if (!button) {
        console.error("Buton bulunamadı! HTML'de id 'clickButton' olarak tanımlandığından emin ol.");
        return;
    }

    button.addEventListener("click", function() {
        console.log("Butona tıklandı!"); // Konsolda kontrol et

        intro.style.display = "block";

        setTimeout(function() {
            intro.style.display = "none";
            message.style.display = "block";
        }, 2000);

        // 5 saniye sonra havai fişekleri başlat
        setTimeout(function() {
            startFireworks();
        }, 5000);

        // 10 saniye sonra sayfayı kapat
        setTimeout(function() {
            window.close();
        }, 10000);
    });

    // Havai fişek efektini başlatan fonksiyon
    function startFireworks() {
        fireworksContainer.classList.add("fireworks");
        document.body.appendChild(fireworksContainer);

        for (let i = 0; i < 10; i++) {
            createFirework();
        }
    }

    // Havai fişekleri oluşturan fonksiyon
    function createFirework() {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        document.body.appendChild(firework);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
});
function openNewWindow() {
    window.open("index.html", "_blank", "width=800,height=600");
}
