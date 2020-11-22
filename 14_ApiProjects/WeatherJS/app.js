// Init storage
const storage = new Storage();
// Get stored location data.
const weatherLocation = storage.getLocationData();

// Initialise weather obj
const weather = new Weather(weatherLocation.city);
// Initialise ui obj
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

// Change location event - adding a event listener to change location button
document.getElementById('w-change-btn').addEventListener('click',(e) => {
    const city = document.getElementById('city').value;
    // Change Location
    weather.changeLocation(city);
    // Set location in local storage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
})

// weather.changeLocation('Miami');

function getWeather(){
    weather.getWeather()
    .then(results => {
        // console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
