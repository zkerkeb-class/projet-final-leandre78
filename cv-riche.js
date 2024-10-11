// Gestion du burger menu pour petits écrans
document.getElementById("burger-menu").addEventListener("click", function() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("open");
    this.classList.toggle("open");
});

// Gestion du changement de thème avec le switch
document.getElementById("theme-switch").addEventListener("change", function() {
    document.documentElement.classList.toggle("dark-mode");
    if (document.documentElement.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Charger le mode selon les préférences précédentes de l'utilisateur
window.addEventListener("load", function() {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark-mode");
        document.getElementById("theme-switch").checked = true;
    }
});

// Fonction pour ajuster la largeur de la barre de compétence
function adjustSkillLevel(skillId, adjustment) {
    const skillBar = document.getElementById(skillId);
    let currentWidth = parseInt(skillBar.style.width);
    let newWidth = currentWidth + adjustment;

    if (newWidth > 100) {
        newWidth = 100;
    } else if (newWidth < 0) {
        newWidth = 0;
    }

    skillBar.style.width = newWidth + "%";
}

// Ajout des événements pour les boutons "+" et "-"
document.querySelectorAll('.skill').forEach(skill => {
    const plusButton = skill.querySelector('.skill-plus');
    const minusButton = skill.querySelector('.skill-minus');
    const skillLevel = skill.querySelector('.skill-level');

    plusButton.addEventListener('click', () => {
        adjustSkillLevel(skillLevel.id, 10);
    });

    minusButton.addEventListener('click', () => {
        adjustSkillLevel(skillLevel.id, -10);
    });
});

// Gestion du formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire à un serveur
    // Pour cet exemple, nous allons simplement afficher un message de confirmation
    
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    this.reset(); // Réinitialise le formulaire après soumission
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log("Formulaire reçu avec les informations suivantes:");
    console.log("Nom:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Réinitialiser le formulaire après que la personne les envoyé
    this.reset();
    
    // Affiche le message pour dire merci
    alert("Merci pour ton message jeune entrepreneur ! Nous vous contacterons très prochainement.");
});