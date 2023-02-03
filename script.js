//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((episode) => {
    const episodeDiv = document.createElement("div");
    const title = document.createElement("h2");
    episodeDiv.appendChild(title);
    episode.number < 10 && episode.season < 10
      ? (title.textContent = `${episode.name} S0${episode.number}E0${episode.season}`)
      : (title.textContent = `${episode.name} S${episode.number}E${episode.season}`);
    rootElem.appendChild(episodeDiv);

    const image = document.createElement("img");
    image.src = episode.image.medium;
    rootElem.appendChild(image);

    const summary = document.createElement("p");
    summary.innerHTML = episode.summary;
    rootElem.appendChild(summary);
  });
}

window.onload = setup;
