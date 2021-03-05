let restaurantList = []
const searchInput = document.querySelector('.search');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

async function getData() {
  const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const json = await data.json();
  restaurantList = json
}
window.onload = getData

// here we need to figure out if the restaurant matches what was searched
function findMatches(word) {
  return restaurantList.filter(restaurant => restaurant.name.toLowerCase().indexOf(word) > -1);
}

function displayMatches() {
  const matchArray = findMatches(searchInput.value);
  document.querySelector('.suggestions').innerHTML = matchArray.map(restaurant => {
    return `<li class="">
            <div class="name">${restaurant.name}</div>
            <div class="text">${restaurant.category}</div>
            <div class="text italic">${restaurant.address_line_1}</div>
            <div class="text italic">${restaurant.city}</div>
            <div class="text italic">${restaurant.zip}</div>
          </li>`;
  }).join('');
}
