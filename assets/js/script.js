
// var zilkerParkCrimeList = document.getElementById("zilker-park-list");
let map;
var accordionButton = document.querySelectorAll("button")
var parkList = document.getElementById("accordion-collapse");

// Each park array contains: park name[0], northwest corner latitude[1], northwest corner longitude[2], southeast corner latitude[3], southeast corner longitude [4]
var zilkerPark = ["Zilker Park", "30.276187", "-97.776181", "30.260135", "-97.771194"];
var ladyBirdLake = ["Lady Bird Lake", "30.294497", "-97.788501", "30.242677", "-97.717318"];
var bartonCreekGreenbelt = ["Barton Creek Greenbelt", "30.285798", "-97.827646", "30.234250", "-97.784231"];
var mcKinneyFallsStatePark = ["McKinney Falls State Park", "30.202370", "-97.725063", "30.167640", "-97.722854"];
var emmaLongMetroPark = ["Emma Long Metropolitan Park", "30.356452", "-97.848282", "30.323719", "-97.826107"];
var walCreekMetroPark = ["Walnut Creek Metropolitan Park", "30.388371", "-97.677382", "30.410843", "-97.709775"];
var peasePark = ["Pease Park", "30.289109", "-97.756060", "30.280137", "-97.750709"];
var royGuerreroPark = ["Roy G. Guerrero Colorado River Park", "30.250026", "-97.717269", "30.235685", "-97.690601"];
var mayfieldPark = ["Mayfield Park and Nature Preserve", "30.314760", "-97.773018", "30.310082", "-97.768630"];
var austinNatAndSciCent = ["Austin Nature and Science Center", "30.273219", "-97.775754", "30.270420", "-97.773399"];
var shoalCreekGreenbelt = ["Shoal Creek Greenbelt", "30.307949", "-97.748550", "30.265098", "-97.750992"];
var muellerLakePark = ["Mueller Lake Park", "30.298086", "-97.709049", "30.294390", "-97.702620"];
var bullCreekGreenbelt = ["Bull Creek Greenbelt", "30.385492", "-97.784090", "30.365006", "-97.764350"]
var garrisonPark = ["Garrison District Park", "30.213989", "-97.802447", "30.208858', '-97.795642"];
var lilStacyPark = ["Little Stacy Park", "30.248717", "-97.744906", "30.245923", "-97.743049"];
var southwestGreenway = ["Southwest Greenway", "30.294160", "-97.707727", "30.288103", "-97.694397"];
var balconesDistPark = ["Balcones District Park", "30.415541", "-97.721563", "30.410098", "-97.711759"];
var millsPondRecArea = ["Mills Pond Recreation Area", "30.456040", "-97.681981", "30.448297", "-97.678249"];
var northwestDistPark = ["Northwest District Park", "30.350764", "-97.744671", "30.345539", "-97.739800"];
var eastwoodsPark = ["Eastwoods Park", "30.292031", "-97.733301", "30.289317", "-97.730634"];
var greatHillsNeighPark = ["Great Hills Neighborhood Park", "30.419470", "-97.763739", "30.401857", "-97.750022"];
var gracywoodsPark = ["Gracywoods Neighborhood Park", "30.407359", "-97.697939", "30.402824", "-97.694719"];
var austinMemParkCem = ["Austin Memorial Park Cemetery", "30.334581", "-97.755217", "30.327140", "-97.748120"];
var waterlooPark = ["Waterloo Park", "30.275991", "-97.736708", "30.272395", "-97.734629"];
var westAustinNeighPark = ["West Austin Neighborhood Park", "30.277813", "-97.758416", "30.275773", "-97.756686"];
var southAusNeighPark = ["South Austin Neighborhood Park", "30.243738", "-97.770162", "30.239701", "-97.765729"];
var nicholasDawsonNeighPark = ["Nicholas Dawson Neighborhood Park", "30.253731", "-97.755859", "30.251591", "-97.753845"]
var gillisNeighPark = ["Gillis Neighborhood Park", "30.241941", "-97.760869", "30.239276", "-97.758031"]
var adamsHemphillNeighPark = ["Adams-Hemphill Neighborhood Park", "30.299335", "-97.742043", "30.293331", "-97.737493"];
var reillySchoolPark = ["Reilly School Park", "30.328636", "-97.721011", "30.325990", "-97.718484"];

// Array of all parks:

var austinParks = [zilkerPark, ladyBirdLake, bartonCreekGreenbelt, mcKinneyFallsStatePark, emmaLongMetroPark, walCreekMetroPark, peasePark, royGuerreroPark, mayfieldPark, austinNatAndSciCent, shoalCreekGreenbelt, muellerLakePark, bullCreekGreenbelt, garrisonPark, lilStacyPark, southwestGreenway, balconesDistPark, millsPondRecArea, northwestDistPark, eastwoodsPark, greatHillsNeighPark, gracywoodsPark, austinMemParkCem, waterlooPark, westAustinNeighPark, southAusNeighPark, nicholasDawsonNeighPark, gillisNeighPark, adamsHemphillNeighPark, reillySchoolPark];
var austinParks = [zilkerPark, ladyBirdLake, bartonCreekGreenbelt, mcKinneyFallsStatePark, emmaLongMetroPark, walCreekMetroPark, peasePark, royGuerreroPark, mayfieldPark, austinNatAndSciCent, shoalCreekGreenbelt, muellerLakePark, bullCreekGreenbelt, garrisonPark, lilStacyPark, southwestGreenway, balconesDistPark, millsPondRecArea, northwestDistPark, eastwoodsPark, greatHillsNeighPark, gracywoodsPark, austinMemParkCem, waterlooPark, westAustinNeighPark, southAusNeighPark, nicholasDawsonNeighPark, gillisNeighPark, adamsHemphillNeighPark, reillySchoolPark];



//Loads our initial map location to show Austin.
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.2672, lng: -97.7431 }, // Austin, Texas
    zoom: 12,
  });
}


//Pull the crime data through the API we're using. With this function, we're going to insert parameters that we get from our array that we've made with the Austin Parks. Those parameters will be the filters for our $where. With those filters, we receive a list, and then we go ahead and make an element "li" for each entry on this list.
function pullCrimes(latMin, latMax, lngMin, lngMax, startDate, endDate, list) {
  return $.ajax({
    url: "https://data.austintexas.gov/resource/fdj4-gpfu.json",
    type: "GET",
    data: {
      "$limit": 5000,
      "$$app_token": "aDsTc4XqMfmKCL0APlSxzJlQ2",
      "$where": `latitude between '${latMin}' and '${latMax}' AND longitude between '${lngMin}' and '${lngMax}' AND occ_date_time between '${startDate}' and '${endDate}'`
    }
  }).done(function (data) {

    console.log("This is how many crimes " + data.length);
    console.log(data);
    console.log("This is Austin Parks Length " + austinParks.length);

    for (i = 0; i < data.length; i++) {

      var parkCrimeList = document.getElementById(list);
 
       var li = document.createElement("li");
       var latitude = parseFloat(data[i].latitude);
       var longitude = parseFloat(data[i].longitude);
       var crimeList = parseFloat(data.length);
       
      //  This set of variables changes the date and time of the crimes to be legible using dayJS
       var timeDayJSUnderstands = data[i].occ_date_time + "Z"
       var betterTime = dayjs(timeDayJSUnderstands);
       var bestTime = betterTime.format('MMM D, YYYY, h:mm A');
       
       var crimeDateAndType =  bestTime + "  |  " + data[i].crime_type;
 
       li.textContent = crimeDateAndType;
       parkCrimeList.appendChild(li);
 
 
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
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });
      }
    } else {
      console.log('Missing latitude or longitude:', crime);
    }
  }
}

// This function makes the park list based on the array austinParks, and should take the whole array list, and fill out a list underneath the map on our page with the park names that function as buttons. We were able to list the buttons and make them functional by ourselves, but we did use chatGPT to help us with the formatting part of our button to make the button look like the Tailwind API we used for formatting.

function makeParkList() {
  
  var accordion = document.getElementById("accordion-collapse"); 

  for (let i = 0; i < austinParks.length; i++) {
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
    span.textContent = austinParks[i][0];
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

      // Original functionality
      let accordionBody = document.querySelector(button.dataset.accordionTarget);
      if (accordionBody.classList.contains("hidden")) {
        accordionBody.classList.remove("hidden");
        button.setAttribute("aria-expanded", "true");
      } else {
        accordionBody.classList.add("hidden");
        button.setAttribute("aria-expanded", "false");
      }

      // New functionality: Fetch park images
      var parkIndex = parseInt(button.id) - 4;
      var parkName = austinParks[parkIndex][0];
      fetchParkImage(parkName, "list-" + button.id);
    });
  });
}

// Call the functions.
makeParkList();
// pullCrimes('30.259585', '30.277721', '-97.780467', '-97.763959', '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-4").done(data => populateMap(data));

// console.log(austinParks[0][3] + austinParks[0][1] + austinParks[0][4] +austinParks[0][3]);

//Zilker Park
pullCrimes(austinParks[0][3], austinParks[0][1], austinParks[0][2], austinParks[0][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-4").done(data => populateMap(data));

//Ladybird Lake
// pullCrimes(austinParks[1][3], austinParks[1][1], austinParks[1][2], austinParks[1][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-5").done(data => populateMap(data));

//Barton Creek Greenbelt
pullCrimes(austinParks[2][3], austinParks[2][1], austinParks[2][2], austinParks[2][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-6").done(data => populateMap(data));

//McKinney Falls State Park 
pullCrimes(austinParks[3][3], austinParks[3][1], austinParks[3][2], austinParks[3][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-7").done(data => populateMap(data));

//Emma Long Metro Park
pullCrimes(austinParks[4][3], austinParks[4][1], austinParks[4][2], austinParks[4][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-8").done(data => populateMap(data));

// Walnut Creek Metro Park
pullCrimes(austinParks[5][3], austinParks[5][1], austinParks[5][2], austinParks[5][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-9").done(data => populateMap(data));

// Pease Park
pullCrimes(austinParks[6][3], austinParks[6][1], austinParks[6][2], austinParks[6][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-10").done(data => populateMap(data));

// Roy G Guerrero Colorado River Park
pullCrimes(austinParks[7][3], austinParks[7][1], austinParks[7][2], austinParks[7][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-11").done(data => populateMap(data));

// Mayfield Park and Nature Preserve
pullCrimes(austinParks[8][3], austinParks[8][1], austinParks[8][2], austinParks[8][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-12").done(data => populateMap(data));

// Austin Nature and Science Center
pullCrimes(austinParks[9][3], austinParks[9][1], austinParks[9][2], austinParks[9][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-13").done(data => populateMap(data));

// Shoal Creek Greenbelt
pullCrimes(austinParks[10][3], austinParks[10][1], austinParks[10][2], austinParks[10][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-14").done(data => populateMap(data));

// Mueller Lake Park
pullCrimes(austinParks[11][3], austinParks[11][1], austinParks[11][2], austinParks[11][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-15").done(data => populateMap(data));

// Bull Creek Greenbelt
pullCrimes(austinParks[12][3], austinParks[12][1], austinParks[12][2], austinParks[12][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-16").done(data => populateMap(data));

// Garrison District Park
pullCrimes(austinParks[13][3], austinParks[13][1], austinParks[13][2], austinParks[13][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-17").done(data => populateMap(data));

// Little Stacy Park
pullCrimes(austinParks[14][3], austinParks[14][1], austinParks[14][2], austinParks[14][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-18").done(data => populateMap(data));

// Southwest Greenway
pullCrimes(austinParks[15][3], austinParks[15][1], austinParks[15][2], austinParks[15][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-19").done(data => populateMap(data));

// Balcones District Park
pullCrimes(austinParks[16][3], austinParks[16][1], austinParks[16][2], austinParks[16][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-20").done(data => populateMap(data));

// Mills Pond Recreation Area
pullCrimes(austinParks[17][3], austinParks[17][1], austinParks[17][2], austinParks[17][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-21").done(data => populateMap(data));

// Northwest District Park
pullCrimes(austinParks[18][3], austinParks[18][1], austinParks[18][2], austinParks[18][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-22").done(data => populateMap(data));

// Eastwoods Park
pullCrimes(austinParks[19][3], austinParks[19][1], austinParks[19][2], austinParks[19][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-23").done(data => populateMap(data));

// Great Hills Neighborhood Park
pullCrimes(austinParks[20][3], austinParks[20][1], austinParks[20][2], austinParks[20][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-24").done(data => populateMap(data));

// Gracywoods Neighborhood Park
pullCrimes(austinParks[21][3], austinParks[21][1], austinParks[21][2], austinParks[21][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-25").done(data => populateMap(data));

// Austin Memorial Cemetery
pullCrimes(austinParks[22][3], austinParks[22][1], austinParks[22][2], austinParks[22][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-26").done(data => populateMap(data));

// Waterloo Park
pullCrimes(austinParks[23][3], austinParks[23][1], austinParks[23][2], austinParks[23][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-27").done(data => populateMap(data));

// West Austin Neighborhood Park
pullCrimes(austinParks[24][3], austinParks[24][1], austinParks[24][2], austinParks[24][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-28").done(data => populateMap(data));

// South Austin Neighborhood Park
pullCrimes(austinParks[25][3], austinParks[25][1], austinParks[25][2], austinParks[25][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-29").done(data => populateMap(data));

// Nicholas Dawson Neighborhood Park
pullCrimes(austinParks[26][3], austinParks[26][1], austinParks[26][2], austinParks[26][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-30").done(data => populateMap(data));

// Gillis Neighborhood Park
pullCrimes(austinParks[27][3], austinParks[27][1], austinParks[27][2], austinParks[27][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-31").done(data => populateMap(data));

// Adams-Hemphill Neighborhood Park
pullCrimes(austinParks[28][3], austinParks[28][1], austinParks[28][2], austinParks[28][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-32").done(data => populateMap(data));

// Reilly School Park
pullCrimes(austinParks[29][3], austinParks[29][1], austinParks[29][2], austinParks[29][4], '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-33").done(data => populateMap(data));

// pullCrimes("30.242677", "30.294497", "-97.788501", "-97.717318", '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-5").done(data => populateMap(data));