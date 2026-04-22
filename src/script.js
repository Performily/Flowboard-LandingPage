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