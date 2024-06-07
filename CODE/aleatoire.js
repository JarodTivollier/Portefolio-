
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

var projects = [
    { name: "SAE1.01/02", image: "image1.jpg" },
    { name: "SAE1.03", image: "image2.jpg" },
    { name: "SAE1.04", image: "image3.jpg" },
    { name: "SAE1.05/06", image: "image3.jpg" },
    { name: "SAE2.03", image: "image3.jpg" },
    { name: "SAE2.04", image: "image3.jpg" },
    { name: "MEGASAE", image: "image3.jpg" }
];


projects = shuffleArray(projects);


var projectsSection = document.getElementById("projectsSection");
projects.forEach(function(project) {
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    
    var projectImage = document.createElement("img");
    projectImage.src = project.image;
    
    var projectName = document.createElement("a");
    projectName.href = "CODE/" + project.name;
    projectName.textContent = project.name;

    projectDiv.appendChild(projectImage);
    projectDiv.appendChild(projectName);

    projectsSection.appendChild(projectDiv);
});