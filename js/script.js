const urlJson = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsElement = document.querySelector("#places");
let places = [];

async function getDados() {
   return await fetch(urlJson).then(async (data) => await data.json());
}

function renderCards(places) {
   cardsElement.innerHTML = "";
   places.map(renderPlace);
}

function renderPlace(place) {
   const article = document.createElement("article");
   article.className = "place__details";
   article.innerHTML = `
   <div class="col-12 col-md-6 col-lg-4" style="margin-bottom: 8px;">
      <div class="card" style="width: 21rem;">
         <img class="card-img-top" src="${place.photo}" alt="${place.name}" style="height: 14rem;">
            <div class="card-body">
               <h5 class="card-title" id="property_type">${place.property_type}</h5>
               <p class="card-text" id="name"> ${place.name} </p>
               <h5 class="card-title" id="price">R$ ${(place.price)}</h5>
            </div>
         </div>
      </div>
      `;
   cardsElement.appendChild(article);
}

async function main() {
   places = await getDados();
   console.log(places);
   renderCards(places);
}

main();

// const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

// function readJson() {
//    fetch(url)
//       .then(response => {
//          if (!response.ok) {
//             throw new Error("Erro HTTP: " + response.status);
//          }
//          return response.json();
//       })
//       .then(json => {
//          this.responses = json;
//          for (response of responses) {
//             document.getElementById('photo').src = response.photo;
//             document.getElementById('property_type').innerHTML = response.property_type;
//             document.getElementById('name').innerHTML = response.name;
//             document.getElementById('price').innerHTML = response.price;
//          }
//       })
//       .catch(function() {
//          this.dataError = true;
//       })
// }

// readJson();
