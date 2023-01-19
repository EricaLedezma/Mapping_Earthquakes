// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//   center: [40.7, -94.5],
//   zoom: 4
// });

// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer thzat holds both maps.
let baseMaps = {
  Light: light,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44, -80],
  zoom: 2,
  layers: [light]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'streets' tile layer to the map.
light.addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/EricaLedezma/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/EricaLedezma/Mapping_Earthquakes/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});
  










// onEachFeature: function(feature, layer) {
  //   console.log(layer);
  //   layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
  // }
  



// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
// //   pointToLayer: function(feature, latlng) {
// //     console.log(feature);
// //     return L.marker(latlng)
// //     .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")}

// // }).addTo(map);

//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//    }
// }).addTo(map);

// .bindPopup("<h2> Airport Code: " + feature.properties.faa + "</h2> <hr> <h3>Airport Name: " + feature.properties.name + "</h3>")