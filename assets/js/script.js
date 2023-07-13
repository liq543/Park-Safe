let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2672, lng: -97.7431 }, // Austin, Texas
    zoom: 12,
  });
}

$.ajax({
  url: "https://data.austintexas.gov/resource/fdj4-gpfu.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "aDsTc4XqMfmKCL0APlSxzJlQ2"
  }
}).done(function(data) {
alert("Retrieved " + data.length + " records from the dataset!");
console.log(data);
});