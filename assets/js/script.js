
var list = document.getElementById("zilker-park-list");
let map;
accordionButton = document.querySelectorAll("button")

//Rewrote the button clicks to be the current 3 that we have. Will need to add an id for each one. (Top starts at 1 and then it keeps going down.) Can probably make a list and append it with each having an ID.

accordionButton.forEach(function(button){
  button.addEventListener("click", function(event){
    console.log("button clicked");
    var buttonId = "accordion-collapse-body-" + event.target.id;
    console.log("This is the button ID:" + buttonId);
    var element = document.getElementById(buttonId);

    var visibility = element.classList.value;
    
    console.log(visibility);

    if(visibility == "visible")
    {
      element.classList.value = "hidden";
      
    }
    else if(visibility == "hidden")
    {
      element.classList.value = "visible";
    }
  })
})


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2672, lng: -97.7431 }, // Austin, Texas
    zoom: 12,
  });
}

function pullCrimes(latMin, latMax, lngMin, lngMax, startDate, endDate) {
  return $.ajax({
    url: "https://data.austintexas.gov/resource/fdj4-gpfu.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "aDsTc4XqMfmKCL0APlSxzJlQ2",
      "$where": `latitude between '${latMin}' and '${latMax}' AND longitude between '${lngMin}' and '${lngMax}' AND occ_date_time between '${startDate}' and '${endDate}'`
    }
  }).done(function(data) {

    console.log("This is how many crimes in Zilker Park " + data.length);
     console.log(data);
 
     for(i =0; i< data.length; i++){
 
       var li = document.createElement("li");
       var latitude = parseFloat(data[i].latitude);
       var longitude = parseFloat(data[i].longitude);
       var crimeList = parseFloat(data.length);
       var crimeDateAndType =  data[i].occ_date_time + " " + data[i].crime_type;
 
       li.textContent = crimeDateAndType;
       list.appendChild(li);
 
 
       //console.log("This is the both " + crimeDateAndType);
   
   
     }
     
   });
 }

function populateMap(data) {
  var ajaxTime = new Date().getTime();

  for (const crime of data) {
    if (crime.latitude && crime.longitude) {
      let lat = parseFloat(crime.latitude);
      let lng = parseFloat(crime.longitude);

      if (isNaN(lat) || isNaN(lng)) {
        console.log('Invalid lat or lng:', crime.latitude, crime.longitude);
      } else {
        // Create a marker
        let marker = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map,
          title: crime.crime_type,
        });

        // Convert the crime date into a more friendly format
        let crimeDate = new Date(crime.occ_date_time);
        let formattedDate = crimeDate.toLocaleDateString("en-US");

        // Create an InfoWindow
        let infoWindow = new google.maps.InfoWindow({
          content: `<h3>Crime Committed: ${crime.crime_type}</h3><p>Date Committed: ${formattedDate}</p>`
        });

        // Add a click listener to the marker to open the InfoWindow
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
      }
    } else {
      console.log('Missing latitude or longitude:', crime);
    }
  }
}


// Call the functions.
pullCrimes('30.259585', '30.277721', '-97.780467', '-97.763959', '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000').done(data => populateMap(data));


  



//Zilker Park Bottom Right Corner - 30.260984, -97.770843
//Zilker Park Top Left Corner - 30.275586, -97.775581

// -97.780467
// -97.763959
