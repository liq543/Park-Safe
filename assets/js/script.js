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
  console.log(data);
  getCrimeCoordinates(data);
  
});

//Gets the latitude and longitude coordinates of the crimes
function getCrimeCoordinates()
{
  $.ajax({
    url: "https://data.austintexas.gov/resource/fdj4-gpfu.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "aDsTc4XqMfmKCL0APlSxzJlQ2",
      "$where": "occ_date_time between '2023-01-01T00:00:00.000' and '2023-02-01T23:59:59.000'"
    }
  }).done(function(data) {

    for(i =0; i< data.length; i++){
  
      var latitude = parseFloat(data[i].latitude);
      var longitude = parseFloat(data[i].longitude);
      var crimeList = parseFloat(data.length);
  
      // console.log("The number of crimes is " + crimeList);
  
      // console.log("This is the latitude for Crime " + i + " " + latitude);
      // console.log("This is the longitude for Crime " + i + " " + longitude);
  
      //Will have an if statement below that has the filter that compares crime latitude vs park latitude.
  
      if(30.5 <= latitude){
        console.log("The latitude for " + i + " is " + latitude);
      }
    }
    
  });

}




//Write a function that returns crime in a given area

//Zilker Park as my area. Given area will be 2 miles radius. look at the lattitude and longitude is on the database pulling from, and only pull the ones between a certain latitude and longitude

