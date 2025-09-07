const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation a");
const nav = document.querySelector(".navigation");
const header = document.querySelector("header");
const btnHome = document.querySelector(".btn-home");
const menuicon = document.querySelector("#menu-burger");

// Fonction pour activer/désactiver le menu burger
const burgerActive = () => {
    menuicon.classList.toggle("bx-x");
    nav.classList.toggle('active');
}

// Fonction pour gérer la navigation active pendant le défilement
const scrollActive = () => {
    let top = window.scrollY;
    
    // Ajouter une classe sticky à l'en-tête lors du défilement
    header.classList.toggle("sticky", window.scrollY > 0);
    
    sections.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Fonction pour révéler les éléments au défilement
const scrollRevealFunc = () => {
    const revealElements = document.querySelectorAll('.home-content, .section-title');
    
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialiser Typed.js pour l'effet de texte animé
const initTyped = () => {
    const typed = new Typed(".multiple", {
        strings: ["Développeur web", "Designer web", "Expert en sécurité réseaux"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

// Fonction pour gérer le bouton de retour en haut
const handleScrollToTop = () => {
    const scrollToTopBtn = document.querySelector('.footer-iconTop a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialiser toutes les fonctions au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Préparer les éléments pour l'animation de révélation
    const revealElements = document.querySelectorAll('.home-content, .section-title');
    revealElements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Initialiser les fonctionnalités
    initTyped();
    handleScrollToTop();
    
    // Déclencher une première animation au chargement
    setTimeout(scrollRevealFunc, 100);
});

// Événements
menuicon.addEventListener("click", burgerActive);
window.addEventListener("scroll", () => {
    scrollActive();
    scrollRevealFunc();
});