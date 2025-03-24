document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetHref = link.getAttribute('href');

            // Verifica se o link é interno (âncora) ou externo (outra página)
            if (!targetHref.includes('.html')) {
                event.preventDefault();
                const targetId = targetHref.substring(1);
                const targetSection = document.getElementById(targetId);

                sections.forEach(section => section.style.display = 'none');
                targetSection.style.display = 'block';
            }
        });
    });

    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });
});
