const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();

  const gridContainer = resultArtist.querySelector(".grid-container");
  gridContainer.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = results.filter(artist =>
    artist.name.toLowerCase().startsWith(searchTerm)
  );

  if (filteredResults.length === 0) {
    gridContainer.innerHTML = '<p>Nenhum artista encontrado.</p>';
  } else {
    filteredResults.forEach((element) => {
      const artistCard = document.createElement("div");
      artistCard.classList.add("artist-card");
      artistCard.innerHTML = `
        <div class="card-img">
          <img src="${element.urlImg}" class="artist-img" alt="${element.name}" />
          <div class="play">
            <span class="fa fa-solid fa-play"></span>
          </div>
        </div>
        <div class="card-text">
          <a title="${element.name}" class="vst" href=""></a>
          <span class="artist-name">${element.name}</span>
          <span class="artist-categorie">Artista</span>
        </div>
      `;
      gridContainer.appendChild(artistCard);
    });
  }

  resultArtist.classList.remove("hidden");
}
function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});