document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.visual-card');
    let activeIndex = 2; // Inicia en el centro
    const totalCards = cards.length; // En este caso son 5

    function updateCards() {
        cards.forEach((card, index) => {
            card.className = 'visual-card'; // Limpia las clases previas de posición

            // Cálculos modulares para asegurar que siempre haya 5 tarjetas visibles en bucle
            if (index === activeIndex) {
                card.classList.add('card-active');
            } else if (index === (activeIndex - 1 + totalCards) % totalCards) {
                card.classList.add('card-prev-1');
            } else if (index === (activeIndex + 1) % totalCards) {
                card.classList.add('card-next-1');
            } else if (index === (activeIndex - 2 + totalCards) % totalCards) {
                card.classList.add('card-prev-2');
            } else if (index === (activeIndex + 2) % totalCards) {
                card.classList.add('card-next-2');
            }
        });
    }

    // Agrega el evento de clic
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            activeIndex = index;
            updateCards();
        });
    });
    // Agrega el evento de scroll
    window.addEventListener('scroll', () => {
        document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 10);
    });
    // Carga inicial
    updateCards();
});

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            faqItem.classList.toggle('active');
        });
    });
});
const featureTexts = [
    'Consulta y gestiona tus datos personales y laborales de forma rápida y segura en un solo lugar.',
    'Crea, gestiona y realiza el seguimiento de tus solicitudes de manera simple y organizada.',
    'Visualiza y controla tus registros de asistencia, horarios y justificaciones fácilmente. descriptivo de Asistencia.',
    'Administra la información de colaboradores y optimiza los procesos internos de Recursos Humanos.',
    'Accede a tus boletas y consulta tu información de pagos de forma clara y ordenada.'
];

function selectFeature(button, index) {
    document.querySelectorAll('.feature-pill').forEach(p => p.classList.remove('active'));
    button.classList.add('active');
    document.querySelector('.features-desc-text').textContent = featureTexts[index];
}

const subForm = document.getElementById('subscription-form');
const banner = document.getElementById('notification-banner');
const bannerText = document.getElementById('notification-text');

if (subForm) {
    subForm.addEventListener('submit', (e) => {
        e.preventDefault();


        bannerText.textContent = "¡Éxito! Tu suscripción a Flowboard ha sido creada.";
        banner.classList.add('show');

        subForm.reset();

        setTimeout(() => {
            banner.classList.remove('show');
        }, 4000);
    });
}