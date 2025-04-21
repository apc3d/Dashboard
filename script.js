function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    var tabs = document.getElementsByClassName("tablink");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";

    var currentTab = Array.from(document.getElementsByClassName("tablink"))
        .find(tab => tab.getAttribute('onclick').includes(tabName));
    if (currentTab) {
        currentTab.classList.add("active");
    }
}

// Afficher par défaut l'onglet "Commandes"
openTab('commandes');
