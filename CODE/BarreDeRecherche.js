function search() {
    var recherche = document.getElementById("searchInput").value;
    // Redirection vers différentes URL en fonction de la recherche
    if (recherche.trim() !== "") {
        if (recherche === "SAE1.01/02") {
            window.location.href = "sae1.html";
        } else if (recherche === "SAE1.03") {
            window.location.href = "sae3.html";
        } else if (recherche === "SAE1.04"){
            window.location.href ="sae4.html";
        } else if (recherche === "SAE1.05/06"){
            window.location.href ="sae5.html";
        } else if (recherche === "SAE2.03"){
            window.location.href ="sae23.html";
        } else if (recherche === "SAE2.04"){
            window.location.href ="sae24.html";
        } else if (recherche === "MEGASAE"){
            window.location.href ="megasae.html";
        } else {
            alert("Projet non trouvé");
        }
    }
}
