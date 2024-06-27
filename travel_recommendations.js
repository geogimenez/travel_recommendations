document.getElementById('btnSearch').addEventListener('click', searchDestination);

function searchDestination() {
    const category = document.getElementById('categorySelect').value;
    const input = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendations.json')
      .then(response => response.json())
      .then(data => {
        const destinations = data[category];
        const destination = destinations.find(item => item.name.toLowerCase() === input);

        if (destination) {
          resultDiv.innerHTML += `<h2>${destination.name}</h2>`;
          resultDiv.innerHTML += `<img src="${destination.imageUrl}" alt="${destination.name}">`;
          resultDiv.innerHTML += `<p>${destination.description}</p>`;
        } else {
          resultDiv.innerHTML = 'Destination not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

document.getElementById('searchButton').addEventListener('click', function() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  // Implement the search functionality for the search bar here if needed
  alert(`Searching for ${searchInput}`);
});

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('searchInput').value = '';
});
