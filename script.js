//You can edit ALL of the code here
const rootHtml = document.getElementById("root");
///////// const episodeCard = document.createElement("div");

function setup() {
  let allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  //getting Root Element from index.html
  const rootHtml = document.getElementById("root");
  //////////// rootHtml.textContent = `Got ${episodeList.length} episode(s)`;

  const episodeCardsContainer = document.createElement("div"); ////
  episodeCardsContainer.classList.add("episode-cards-container");
  rootHtml.appendChild(episodeCardsContainer); ////

  episodeList.forEach((episode) => {
    // creating episode card inside root element
    const episodeCard = document.createElement("div"); //////
    episodeCard.classList.add("episode-card");
    episodeCardsContainer.appendChild(episodeCard);
    // rootHtml.appendChild(episodeCard);///////

    // creating episode name holder inside episode card
    const episodeTitleHolder = document.createElement("div");
    episodeTitleHolder.classList.add("episode-name-holder");
    episodeCard.appendChild(episodeTitleHolder);

    // creating episode name inside episode name holder

    const episodeTitleTextHtml = document.createElement("span"); ////
    episodeTitleTextHtml.classList.add("episode-name-text"); ////
    episodeTitleHolder.appendChild(episodeTitleTextHtml); ////

    // putting the title inside episode name by accessing the data;
    //You should combine season number and episode number into an episode code:
    //Each part should be zero-padded to two digits.
    //Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.

    const episodeName = episode.name;
    const paddedSeasonNum = ("0" + episode.season).slice(-2);
    const paddedEpisodeNum = ("0" + episode.number).slice(-2);
    episodeTitleTextHtml.textContent = `${episodeName} - S${paddedSeasonNum}E${paddedEpisodeNum}`;

    // create episode image holder inside episode card
    const episodeImageHolder = document.createElement("div");
    episodeImageHolder.classList.add("episode-image-holder");
    episodeCard.appendChild(episodeImageHolder);

    //creating episode image inside image holder
    const episodeImage = document.createElement("img");
    episodeImage.classList.add("episode-image-text");
    episodeImageHolder.appendChild(episodeImage);

    // putting the title inside episode image by accessing the data
    episodeImage.src = episode.image.medium;

    // create episode Summary holder inside episode card
    const episodeSummaryHolder = document.createElement("div");
    episodeSummaryHolder.classList.add("episode-Summary-holder");
    episodeCard.appendChild(episodeSummaryHolder);

    //creating episode Summary inside Summary holder
    const episodeSummary = document.createElement("p");
    episodeSummary.classList.add("episode-Summary-text");
    episodeSummaryHolder.appendChild(episodeSummary);

    // putting the title inside episode Summary by accessing the data
    episodeSummary.innerHTML = episode.summary;
  });
}

window.onload = setup;

////level200

// const searchInput = document.getElementById('searchInput');
// const episodeCount = document.getElementById("episodeCount");
// const resultsList = document.getElementById('resultsList');

// searchInput.addEventListener("input", updateSearch);

// const searchTerm = searchInput.value.toLowerCase();
//   const filteredEpisodes = episodes.filter((episode) => {
//     const episodeName = episode.name.toLowerCase();
//     const episodeSummary = episode.summary.toLowerCase();
//     return episodeName.includes(searchTerm) || episodeSummary.includes(searchTerm);
//   });
//   searchInput.addEventListener("input", updateSearch);

//   function updateSearch() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const filteredEpisodes = episodes.filter((episode) => {
//       const episodeName = episode.name.toLowerCase();
//       const episodeSummary = episode.summary.toLowerCase();
//       return episodeName.includes(searchTerm) || episodeSummary.includes(searchTerm);
//     });

//     episodeCount.textContent = `${filteredEpisodes.length} episodes match the current search`;

//     episodeList.innerHTML = "";
//     filteredEpisodes.forEach((episode) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = `${episode.name}: ${episode.summary}`;
//       episodeList.appendChild(listItem);
//     });

//     if (searchTerm === "") {
//       episodeCount.textContent = "";
//       episodes.forEach((episode) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = `${episode.name}: ${episode.summary}`;
//         episodeList.appendChild(listItem);
//       });
//     }
const searchInput = document.getElementById("searchInput");
console.log(searchInput);
const episodeCount = document.getElementById("episodeCount");
const resultsList = document.getElementById("resultsList");
const episodeList = document.getElementById("episodeList"); // Assuming there's a <ul> element with id 'episodeList'

searchInput.addEventListener("input", updateSearch);

function updateSearch() {
  let episodes = getAllEpisodes();
  // console.log(episodes);
  const searchTerm = searchInput.value.toLowerCase();
  const filteredEpisodes = episodes.filter((episode) => {
      const episodeName = episode.name.toLowerCase();
      const episodeSummary = episode.summary.toLowerCase();
      // if(episodeName != null && episodeSummary != null &&searchTerm!= null){
        return (
            episodeName.includes(searchTerm) || episodeSummary.includes(searchTerm)
            );
          // }
        });
  


  episodeCount.textContent = `${filteredEpisodes.length} episodes match the current search`;

  episodeList.innerHTML = "";
  filteredEpisodes.forEach((episode) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${episode.name}: ${episode.summary}`;
    episodeList.appendChild(listItem);
  });

  if (searchTerm === "") {
    episodeCount.textContent = "";
    episodes.forEach((episode) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${episode.name}: ${episode.summary}`;
      episodeList.appendChild(listItem);
    });
  }
}

// }

//////
// searchInput.addEventListener("input", (event) => {
//   const getAllEpisodes = event.target.value.trim().toLowerCase();
//   showList();

//const inputValue = event.target.value.trim().toLowerCase();
//displaySearchedEpisodes(inputValue);
// });
// const showList = () => {
//   results.innerHTML = "";
// };
