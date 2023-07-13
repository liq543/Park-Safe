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
    // "$where": "occ_date_time between '2023-01-01T00:00:00.000' and '2023-02-01T23:59:59.000'"
    "$where": "latitude between '30.260984' and '30.275586' AND longitude between '-97.775581' and '-97.770843'"
  }
}).done(function(data) {

var totalTime = new Date().getTime()-ajaxTime;
alert("Retrieved " + data.length + " records from the dataset! This took:" + totalTime);

for (const crime of data) {
  if (crime.latitude && crime.longitude) {
    let lat = parseFloat(crime.latitude);
    let lng = parseFloat(crime.longitude);

    if (isNaN(lat) || isNaN(lng)) {
      console.log('Invalid lat or lng:', crime.latitude, crime.longitude);
    } else {
      new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map,
        title: crime.crime_type,
      });
    }
  } else {
    console.log('Missing latitude or longitude:', crime);
  }
}
console.log(data);
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
      "$where": "latitude between '30.260984' and '30.275586' AND longitude between '-97.775581' and '-97.770843'"

      //Need to figure out between latitude and longitude
    }
  }).done(function(data) {

    //console.log("This is Zilker Park Crimes: " + data);
    console.log("This is how many crimes in Zilker Park " + data.length);

    for(i =0; i< data.length; i++){
  
      var latitude = parseFloat(data[i].latitude);
      var longitude = parseFloat(data[i].longitude);
      var crimeList = parseFloat(data.length);

    }
    
  });

}


// getCrimeCoordinates();

//Write a function that returns crime in a given area


//Zilker Park Bottom Right Corner - 30.260984, -97.770843
//Zilker Park Top Left Corner - 30.275586, -97.775581