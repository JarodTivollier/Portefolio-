// aleatoire.js

document.addEventListener('DOMContentLoaded', function() {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    var projects = [
        { name: "SAE1.01/02", image: "image1.jpg", lien: "sae1.html" },
        { name: "SAE1.03", image: "image2.jpg", lien: "sae3.html" },
        { name: "SAE1.04", image: "image3.jpg", lien: "sae4.html" },
        { name: "SAE1.05/06", image: "image3.jpg", lien: "sae5.html" },
        { name: "SAE2.03", image: "image3.jpg", lien: "sae23.html" },
        { name: "SAE2.04", image: "image3.jpg", lien: "sae24.html" },
        { name: "MEGASAE", image: "image3.jpg", lien: "megasae.html" },
        { name: "SAE3.01", image: "image3.jpg", lien: "sae301.html" },
        { name: "SAE4.01", image: "image3.jpg", lien: "sae401.html" },
        { name: "Stage", image: "image3.jpg", lien: "stage.html" }
    ];

    projects = shuffleArray(projects);

    const projectsRandom = projects.slice(0, 3); 


    var projectsSection = document.getElementById("projectsSection");
    var projectsContainer = document.getElementById("projectsContainer");

    if (projectsSection && projectsContainer) { 
        projectsRandom.forEach(function(project) {
            var projectDiv = document.createElement("div");
            projectDiv.classList.add("project");

            var projectImage = document.createElement("img");
            projectImage.src = project.image;
            projectImage.alt = "Image pour le projet " + project.name; 

            var projectName = document.createElement("a");
            projectName.href = "CODE/" + project.lien;
            projectName.textContent = project.name;

            projectDiv.appendChild(projectImage);
            projectDiv.appendChild(projectName);

            projectsContainer.appendChild(projectDiv);
        });
    } else {
        console.error("L'un des éléments 'projectsSection' ou 'projectsContainer' n'a pas été trouvé.");
    }
});