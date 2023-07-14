
// var zilkerParkCrimeList = document.getElementById("zilker-park-list");
let map;
var accordionButton = document.querySelectorAll("button")
var parkList = document.getElementById("accordion-collapse");

// Each park array contains: park name[0], northwest corner latitude[1], northwest corner longitude[2], southeast corner latitude[3], southeast corner longitude [4]
var zilkerPark = ["Zilker Park", "30.276187", "-97.776181", "30.260135", "-97.771194"];
var ladyBirdLake = ["Lady Bird Lake", "30.294497", "-97.788501", "30.242677", "-97.717318"];
var bartonCreekGreenbelt = ["Barton Creek Greenbelt", "30.285798", "-97.827646", "30.234250", "-97.784231"];
var mcKinneyFallsStatePark = ["McKinney Falls State Park", "30.202370", "-97.725063", "30.167640",  "-97.722854"];
var emmaLongMetroPark = ["Emma Long Metropolitan Park", "30.356452", "-97.848282", "30.323719", "-97.826107"];
var walCreekMetroPark = ["Walnut Creek Metropolitan Park", "30.388371", "-97.677382", "30.410843", "-97.709775"];
var peasePark = ["Pease Park", "30.289109", "-97.756060", "30.280137", "-97.750709"];
var royGuerreroPark = ["Roy G. Guerrero Colorado River Park", "30.250026", "-97.717269", "30.235685", "-97.690601"];
var mayfieldPark = ["Mayfield Park and Nature Preserve", "30.314760", "-97.773018", "30.310082", "-97.768630"];
var austinNatAndSciCent = ["Austin Nature and Science Center", "30.273219", "-97.775754", "30.270420", "-97.773399"];
var shoalCreekGreenbelt = ["Shoal Creek Greenbelt", "30.307949", "-97.748550", "30.265098", "-97.750992"];
var muellerLakePark = ["Mueller Lake Park", "30.298086", "-97.709049", "30.294390", "-97.702620"];
var bullCreekGreenbelt = ["Bull Creek Greenbelt", "30.385492", "-97.784090", "30.365006", "-97.764350"]

// Array of all parks:
var AustinParks = [zilkerPark, ladyBirdLake, bartonCreekGreenbelt, mcKinneyFallsStatePark, emmaLongMetroPark, walCreekMetroPark, peasePark, royGuerreroPark, mayfieldPark,austinNatAndSciCent, shoalCreekGreenbelt, muellerLakePark, bullCreekGreenbelt];


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2672, lng: -97.7431 }, // Austin, Texas
    zoom: 12,
  });
}

function pullCrimes(latMin, latMax, lngMin, lngMax, startDate, endDate, list) {
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
     console.log("This is Austin Parks Length " + AustinParks.length);

     for(i =0; i< data.length; i++){

      var parkCrimeList = document.getElementById(list);
 
       var li = document.createElement("li");
       var latitude = parseFloat(data[i].latitude);
       var longitude = parseFloat(data[i].longitude);
       var crimeList = parseFloat(data.length);
       var crimeDateAndType =  data[i].occ_date_time + " " + data[i].crime_type;
 
       li.textContent = crimeDateAndType;
       parkCrimeList.appendChild(li);
 
 
       //console.log("This is the both " + crimeDateAndType);
     }


    //  for(i = 0; i < AustinParks.length; i++)
    //  {
      
    //   var parkIDList;
    //   var parkID = 1;
    //   parkIDList = "list-" + parkID;
    //   for(i =0; i< data.length; i++){
    //     console.log(parkIDList);
  
    //     var parkCrimeList = document.getElementById("list-1");
   
    //      var li = document.createElement("li");
    //      var latitude = parseFloat(data[i].latitude);
    //      var longitude = parseFloat(data[i].longitude);
    //      var crimeList = parseFloat(data.length);
    //      var crimeDateAndType =  data[i].occ_date_time + " " + data[i].crime_type;
   
    //      li.textContent = crimeDateAndType;
    //      parkCrimeList.appendChild(li);
   
   
    //      //console.log("This is the both " + crimeDateAndType);
    //    }
    //  }
 
     
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


//For this function, we used chatGPT to help us make it
function makeParkList() {
  var accordion = document.getElementById("accordion-collapse");

  for(let i = 0; i < AustinParks.length; i++) {
      let parkNumber = i + 4;
      
      let heading = document.createElement("h2");
      heading.setAttribute("id", "accordion-collapse-heading-" + parkNumber);

      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.setAttribute("id", parkNumber);
      button.setAttribute("class", "flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 accordion-button");
      button.setAttribute("data-accordion-target", "#accordion-collapse-body-" + parkNumber);
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", "accordion-collapse-body-" + parkNumber);

      let span = document.createElement("span");
      span.textContent = AustinParks[i][0];
      button.appendChild(span);
      
      let svg = document.createElement("svg");
      svg.setAttribute("data-accordion-icon", "");
      svg.setAttribute("class", "w-3 h-3 rotate-180 shrink-0");
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("fill", "none");
      svg.setAttribute("viewBox", "0 0 10 6");
      
      let path = document.createElement("path");
      path.setAttribute("stroke", "currentColor");
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("d", "M9 5 5 1 1 5");
      svg.appendChild(path);
      
      button.appendChild(svg);
      
      let div = document.createElement("div");
      div.setAttribute("id", "accordion-collapse-body-" + parkNumber);
      div.setAttribute("class", "hidden");
      div.setAttribute("aria-labelledby", "accordion-collapse-heading-" + parkNumber);

      let content = document.createElement("div");
      content.setAttribute("class", "p-5 border border-b-0 border-gray-200 dark:border-gray-700");

      let ul = document.createElement("ul");
      ul.setAttribute("id", "list-" + parkNumber);

      // Add content here as necessary
      content.appendChild(ul);

      div.appendChild(content);

      heading.appendChild(button);
      accordion.appendChild(heading);
      accordion.appendChild(div);
  }
  attachButtonListeners();
}

//Used accordionButton function which took existing buttons and made them clickable, and made this function to make the new buttons made clickable.
function attachButtonListeners() {
  var accordionButtons = document.querySelectorAll("button");

  accordionButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      console.log("button clicked");
      var buttonId = "accordion-collapse-body-" + event.target.id;
      console.log("This is the button ID: " + buttonId);
      var element = document.getElementById(buttonId);

      var visibility = element.classList.value;

      console.log(visibility);

      if (visibility === "visible") {
        element.classList.value = "hidden";
      } else if (visibility === "hidden") {
        element.classList.value = "visible";
      }
    });
  });
}

// Call the functions.
makeParkList();
pullCrimes('30.259585', '30.277721', '-97.780467', '-97.763959', '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-4").done(data => populateMap(data));
