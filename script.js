// JavaScript pour ajouter des animations et des interactions

// Animation au scroll pour révéler les éléments
const revealElements = () => {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);

// Déclencher l'animation de révélation dès le chargement
window.addEventListener('load', revealElements);

// Ajouter la classe "reveal" aux sections
const sections = document.querySelectorAll('section');
sections.forEach(section => section.classList.add('reveal'));

// Animation des boutons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#ff8567';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#ff6347';
    });
});

// Smooth scroll pour la navigation
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Changer la couleur de la barre de navigation en fonction du scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > 50) {
        navbar.style.backgroundColor = '#ffffff';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

// Ajouter une animation pour les liens de navigation au survol
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline';
        link.style.color = '#ff6347';
    });
    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none';
        link.style.color = '#333';
    });
});