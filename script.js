document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const clickText = document.querySelector('.click-text');
    const toggleButton = document.getElementById('theme-toggle');
    const scrollToTopButton = document.getElementById('scroll-to-top');

    // смена темы
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        toggleButton.classList.toggle('moon');
    });

    // анимация логотипа
    logo.addEventListener('mouseover', function() {
        logo.style.transform = 'scale(1.1)';
        logo.style.opacity = '0.9';
        clickText.style.opacity = '1';
    });

    logo.addEventListener('mouseout', function() {
        logo.style.transform = 'scale(1)';
        logo.style.opacity = '1';
        clickText.style.opacity = '0';
    });

    // модальные окна (при клике на логотип)
    logo.addEventListener('click', function() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;
        const birthDateInput = prompt('When were you born? (YYYY-MM-DD)', currentDate);

        if (birthDateInput) {
            const birthDate = new Date(birthDateInput);
            const today = new Date();
            const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

            if (nextBirthday < today) {
                nextBirthday.setFullYear(today.getFullYear() + 1);
            }

            const daysUntilBirthday = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
            alert(`There are ${daysUntilBirthday} days until your next birthday!`);
        } else {
            alert('Please enter a valid date.');
        }
    });

    // кнопка наверх 
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // анимация при прокрутке
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.content');

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight;

            if (sectionTop < triggerPoint) {
                section.classList.add('visible');
            }
        });
    });
});