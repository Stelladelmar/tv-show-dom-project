//You can edit ALL of the code here
const rootHtml = document.getElementById("root");
const episodeCard = document.createElement("div");
// episodeCard.classList.add("episode-card");
// rootHtml.appendChild(episodeCard);

// const episodeNameHolder = document.createElement("div");
// episodeNameHolder.classList.add("episode-name-holder");
// episodeCard.appendChild(episodeNameHolder);

// const episodeName =document.createElement("span");
// episodeName.classList.add("episode-name-text");
// episodeNameHolder.appendChild(episodeName);
// episodeName.innerHTML = episode.name;

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {

  //getting Root Element from index.html
  const rootHtml = document.getElementById("root");
  rootHtml.textContent = `Got ${episodeList.length} episode(s)`;
  
episodeList.forEach(episode => {

  // creating episode card inside root element
  episodeCard.classList.add("episode-card");
  rootHtml.appendChild(episodeCard);
   
  // creating episode name holder inside episode card
  const episodeNameHolder = document.createElement("div");
  episodeNameHolder.classList.add("episode-name-holder");
  episodeCard.appendChild(episodeNameHolder);
  
  // creating episode name inside episode name holder

  const episodeName = document.createElement("span");
  episodeName.classList.add("episode-name-text");
  episodeNameHolder.appendChild(episodeName);

   // putting the title inside episode name by accessing the data
  //  episodeName.innerHTML = episode.name;
   //You should combine season number and episode number into an episode code:
  //Each part should be zero-padded to two digits.
  //Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.

  const episodeNameNumHolder = document.createElement("div");
    episodeNameNumHolder.classList.add("episode-name-num-holder");
    episodeCard.appendChild(episodeNameNumHolder);
// //**** *//DO-NOT-DELETE-BELOW-UNTIL-CHECKING-IT-WORKS-********
//   const paddedSeasonNum = ("0" + episode.season).slice(-2);
//   const paddedEpisodeNum = ("0" + episode.number).slice(-2);
//   const episodeName = episode.name + paddedSeasonNum + paddedEpisodeNum;
// //**** */DO-NOT-DELETE-ABOVE-UNTIL-CHECKING-IT-WORKS-********
  //***************
const episodeNameNumber = document.createElement("h2");
episodeNameNumber.classList.add("episode-name-number");
episodeNameNumHolder.appendChild(episodeNameNumber);
// const paddedSeasonNum = ("0" + episodeList[i].season).slice(-2);
// const paddedEpisodeNum = ("0" + episodeList[i].number).slice(-2);
// const detailedEpisodeName =episode.name + paddedSeasonNum +paddedEpisodeNum;
// episodeName.innerText = `${episodeList[i].name}- S${paddedSeasonNum}E${paddedEpisodeNum}`;

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

  //
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

})


}

window.onload = setup;
