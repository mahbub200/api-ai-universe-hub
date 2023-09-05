function loadData() {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayData(data.data.tools));
}
function displayData(data) {
  // data=data.splice(0,6)
  // console.log(data);
  for (const technology of data) {
    console.log(technology);
    let cardContainer = document.getElementById("card-container");
    let div = document.createElement("div");
    div.classList.add("col");
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
  </div>
        `;
    cardContainer.appendChild(div);
  }
}

loadData();
