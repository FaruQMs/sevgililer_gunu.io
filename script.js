document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("clickButton");
    const intro = document.getElementById("intro");
    const message = document.getElementById("message");

    if (!button) {
        console.error("Buton bulunamadı! HTML'de id 'clickButton' olarak tanımlandığından emin ol.");
        return;
    }

    button.addEventListener("click", function() {
        console.log("Butona tıklandı!"); // Tarayıcı konsolunda kontrol için
        intro.style.display = "block";

        setTimeout(function() {
            intro.style.display = "none";
            message.style.display = "block";
        }, 2000);
    });
});
