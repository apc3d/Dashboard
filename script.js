document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.menu button');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Supprimer l'active sur tous les tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Ajouter active sur le tab cliqué
            this.classList.add('active');

            // Cacher tout
            contents.forEach(content => {
                content.style.opacity = 0;
                setTimeout(() => {
                    content.style.display = "none";
                }, 300); // Temps d'animation
            });

            // Montrer le bon
            const activeContent = document.getElementById(this.getAttribute('data-tab'));
            setTimeout(() => {
                activeContent.style.display = "block";
                setTimeout(() => {
                    activeContent.style.opacity = 1;
                }, 10);
            }, 300);
        });
    });

    // Afficher d'abord "Commandes" par défaut
    document.querySelector('.menu button').click();
});
