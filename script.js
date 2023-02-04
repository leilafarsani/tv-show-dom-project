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

const allEpisodes = getAllEpisodes();
allEpisodes.forEach((episode) => {
  const episodeOption = document.createElement("option");
  episodeOption.value = episode.id;
  episodeOption.textContent = ` S${episode.season
    .toString()
    .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")} - ${
    episode.name
  } `;
  const selectedSearch = document.getElementById("selectionOfEpisodes");
  selectedSearch.appendChild(episodeOption);
});

const selectedSearch = document.getElementById("selectionOfEpisodes");
selectedSearch.addEventListener("change", (event) => {
  const episodeId = event.target.value;
  if (episodeId == 00) {
    makePageForEpisodes(allEpisodes);
  } else {
    const filteredEpisodes = allEpisodes.filter(
      (episode) => episode.id == episodeId
    );

    makePageForEpisodes(filteredEpisodes);
  }
});

window.onload = setup;
