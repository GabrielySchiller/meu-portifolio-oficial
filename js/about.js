document.addEventListener("DOMContentLoaded", () => {
    let btnWhatsapp = document.querySelector(".whats");

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", (event) => {
            event.preventDefault(); // Evita comportamento inesperado se for um <a>

            const mensagem = "Olá, gostaria de saber mais sobre os seus serviços!";
            const urlWhatsApp = `https://wa.me/5553999882226?text=${encodeURIComponent(mensagem)}`;

            window.open(urlWhatsApp, "_blank");
        });
    } else {
        console.log("Botão do WhatsApp não encontrado no DOM.");
    }
});