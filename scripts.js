// Sample recommendations for dynamic search functionality
const recommendations = [
    { id: 1, name: "Maldives Beach", category: "Beach", img: "beach1.jpg" },
    { id: 2, name: "Bali Beach", category: "Beach", img: "beach2.jpg" },
    { id: 3, name: "Angkor Wat", category: "Temple", img: "temple1.jpg" },
    { id: 4, name: "Taj Mahal", category: "Temple", img: "temple2.jpg" },
    { id: 5, name: "India", category: "Country", img: "india.jpg" },
    { id: 6, name: "Thailand", category: "Country", img: "thailand.jpg" }
];

// Function to search recommendations based on input
function searchRecommendations() {
    const searchBar = document.getElementById('searchBar').value.toLowerCase();
    const resultsDiv = document.getElementById('recommendation-results');
    resultsDiv.innerHTML = ''; // Clear previous results

    const filteredRecommendations = recommendations.filter(rec => 
        rec.name.toLowerCase().includes(searchBar) || rec.category.toLowerCase().includes(searchBar)
    );

    filteredRecommendations.forEach(rec => {
        const div = document.createElement('div');
        div.classList.add('recommendation-item');
        div.innerHTML = `<img src="${rec.img}" alt="${rec.name}" width="100%">
                         <p>${rec.name}</p>`;
        resultsDiv.appendChild(div);
    });

    if (filteredRecommendations.length === 0) {
        resultsDiv.innerHTML = '<p>No recommendations found</p>';
    }
}
