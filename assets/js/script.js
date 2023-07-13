let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2672, lng: -97.7431 }, // Austin, Texas
    zoom: 12,
  });
}


var ajaxTime= new Date().getTime();
$.ajax({
  url: "https://data.austintexas.gov/resource/fdj4-gpfu.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "aDsTc4XqMfmKCL0APlSxzJlQ2",
    "$where": "occ_date_time between '2023-01-01T00:00:00.000' and '2023-02-01T23:59:59.000'"
  }
}).done(function(data) {
var totalTime = new Date().getTime()-ajaxTime;
alert("Retrieved " + data.length + " records from the dataset! This took:" + totalTime);
    "$$app_token" : "aDsTc4XqMfmKCL0APlSxzJlQ2"
  }
}).done(function(data) {
alert("Retrieved " + data.length + " records from the dataset!");
console.log(data);
});