const suggestions = [
    "SAE1.01/02",
    "SAE1.03",
    "SAE1.04",
    "SAE1.05/06",
    "SAE2.03",
    "SAE2.04",
    "MEGASAE"
];

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions');

// Fonction debounce pour limiter les appels fréquents lors de la saisie rapide
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

searchInput.addEventListener('input', debounce(() => {
    const query = searchInput.value.toLowerCase();
    suggestionsContainer.innerHTML = '';

    if (query) {
        const filteredSuggestions = suggestions.filter(item =>
            item.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.classList.add('suggestion-item');

            suggestionItem.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsContainer.innerHTML = '';
            });

            suggestionsContainer.appendChild(suggestionItem);
        });

        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
}, 300)); // 300ms de délai pour le debounce

// Fermer la liste des suggestions lorsqu'on clique en dehors de la zone de recherche
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsContainer.style.display = 'none';
    }
});

// Ajout de la gestion de la touche "Enter"
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const firstSuggestion = suggestionsContainer.querySelector('.suggestion-item');
        if (firstSuggestion) {
            searchInput.value = firstSuggestion.textContent;
            suggestionsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'none';
        }
    }
});
