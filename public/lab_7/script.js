function convertRestaurantsToCategories(restaurantList){
  // process your restaurants here!
  return list;
}

function runThisWithResultsFromServer(jsonFromServer) {
  // This should become a list of restaurants by category
  console.log('jsonFromServer', jsonFromServer);
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray();
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
    .catch((err) => {
      console.log(err);
    });
});