//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  episodeList.forEach((episode) => {
    const episodeDiv = document.createElement("div");
    const title = document.createElement("h2");
    episodeDiv.appendChild(title);
    title.textContent = `${episode.name} S${episode.season
      .toString()
      .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
    rootElem.appendChild(episodeDiv);

    const image = document.createElement("img");
    image.src = episode.image.medium;
    rootElem.appendChild(image);

    const summary = document.createElement("p");
    summary.innerHTML = episode.summary;
    rootElem.appendChild(summary);
  });
}
const searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", (event) => {
  const searchChar = event.target.value.toLowerCase();
  const allEpisodes = getAllEpisodes();
  const filteredEpisodes = allEpisodes.filter((episode) => {
    return (
      episode.name.toLowerCase().includes(searchChar) ||
      episode.summary.toLowerCase().includes(searchChar)
    );
  });
  makePageForEpisodes(filteredEpisodes);
  const searchNum = document.getElementById("searchNum");
  searchChar === ""
    ? (searchNum.innerText = " ")
    : (searchNum.innerText = `Found ${filteredEpisodes.length} out of ${allEpisodes.length} episodes`);
});

window.onload = setup;
