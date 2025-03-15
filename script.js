document.addEventListener("DOMContentLoaded", () => {
    const reportForm = document.getElementById("reportForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    reportForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const reportData = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            date: document.getElementById("date").value
        };

        localStorage.setItem("latestReport", JSON.stringify(reportData));
        
        confirmationMessage.style.display = "block";
        reportForm.reset();
    });

    document.getElementById("sendEmail").addEventListener("click", () => {
        const reportData = JSON.parse(localStorage.getItem("latestReport"));
        if (!reportData) {
            alert("Nenhum relatório salvo para enviar.");
            return;
        }

        const email = prompt("Digite o e-mail do destinatário:");
        if (!email) return;

        const mailtoLink = `mailto:${email}?subject=Relatório: ${encodeURIComponent(reportData.title)}&body=${encodeURIComponent(`Data: ${reportData.date}\n\n${reportData.description}`)}`;
        window.location.href = mailtoLink;
    });
});
