function loadData(limit) {
  // load data
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools, limit));
}
function displayData(data, limit) {
  let SeeMoreBtn = document.getElementById("see-more");
  if (limit && data.length > 6) {
    // data = data.splice(0, 6);
    SeeMoreBtn.classList.remove("d-none");
  } else {
    SeeMoreBtn.classList.add("d-none");
  }
  console.log(data);
  for (const technology of data) {
    console.log(technology);
    let cardContainer = document.getElementById("card-container");
    let div = document.createElement("div");
    div.classList.add("col");

    // card info
    div.innerHTML = `
    <div class="card">
    <img src="${technology.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">features:
          
    </h5>
    <li>${technology.features[0]}</li>
    <li>${technology.features[1]}</li>
    <li>${technology.features[2]}</li>
    </div>
    <div class="card-footer">
        <h2>${technology.name}</h2> 
        <h2>${technology.published_in}</h2> 
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#technologyModal" onclick=detailsOfTechnology('${technology.id}')>
        Details
</button>
  </div>
        `;
        
    // append child
    cardContainer.appendChild(div);
  }
  spinnerToggle(false);
}
// see more button functionalities
function searchProcess(limit) {
  loadData(limit);
}
function seeMore() {
  spinnerToggle(true);
  let SeeMoreBtn = document.getElementById("see-more");
  searchProcess();
  SeeMoreBtn.classList.add("d-none");
}
searchProcess(6);
// console.log("ddd");
// spinner toggle handled
function spinnerToggle(isLoading) {
  const spinner = document.getElementById("spinner");
  if (isLoading) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
}
const detailsOfTechnology = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
  .then(res=>res.json())
  .then(details=>displayDetailsOfTechnology(details.data))
};
const displayDetailsOfTechnology=(details)=>{
  console.log(details);
  const features=document.getElementById('features')
  const integrations=document.getElementById('integrations')
  features.innerHTML=`
  <h1>${details.features['1'].feature_name}</h1>
  <h1>${details.features['1'].feature_name}</h1>
  <h1>${details.features['1'].feature_name}</h1>
  `
  integrations.innerHTML=`
  <h2>${details.integrations[0]}</h2>`
 

}
