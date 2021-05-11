restaurantList= []
function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const f_map = L.map('mapid').setView([38.9897, -76.9378], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1Ijoieml5YW5nbGFuMDc3MiIsImEiOiJja29rYjRvYXcwM292MnhybXZwMHdzdGp0In0.CBJWA4guqMNOSXDxVElSsg'
}).addTo(f_map);
    console.log('f_map',f_map)
  return f_map;
  
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
const form=document.querySelector('#search-form');
const search=document.querySelector('#search');
const replyMessage = document.querySelector(".reply-message");
const targetList=document.querySelector('.target-list');

const request=await fetch('/api');
const data=await request.json();

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  console.log('submit fired', search.value);
  const filtered = data.filter((record) => record.zip.includes(search.value) && record.geocoded_column_1);
  const topFive = filtered.slice(0,5);
  console.table(filtered);
  
  topFive.forEach((item)=>{
    const longLat= item.geocoded_column_1.coordinates;
    const marker = L.marker([longLat[1], longLat[0]]).addTo(mapObjectFromFunction);
    console.log('markerLongLat', longLat[0], longLat[1]);
    
    const appendItem = document.createElement('li');
    appendItem.classList.add('block');
    appendItem.classList.add('list-item');
    appendItem.innerHTML = `<div class="list-header is-size-5">${item.name}</div><address class="is-size-6">${item.address_line_1}</address>`;
    targetList.append(appendItem);
  });

  const {coordinates} = topFive[0]?.geocoded_column_1;
  console.log('viewSet coords', coordinates);
  mapObjectFromFunction.panTo([coordinates[1],coordinates[0]], 0);
});
}
function findMatches(word) {
  return restaurantList.filter(restaurant => restaurant.name.toLowerCase().indexOf(word) > -1);
}

function displayMatches() {
  const matchArray = findMatches(searchInput.value);
  document.querySelector('.suggestions').innerHTML = matchArray.map(restaurant => `<li class="">
            <div class="name">${restaurant.name}</div>
            <div class="text">${restaurant.category}</div>
            <div class="text italic">${restaurant.address_line_1}</div>
            <div class="text italic">${restaurant.city}</div>
            <div class="text italic">${restaurant.zip}</div>
          </li>`).join('');
}
async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;