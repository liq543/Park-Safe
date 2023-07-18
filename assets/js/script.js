
let map;
var accordionButton = document.querySelectorAll("button")
var parkList = document.getElementById("accordion-collapse");



// Each park array contains: park name[0], northwest corner latitude[1], northwest corner longitude[2], southeast corner latitude[3], southeast corner longitude [4], center latitude [5], center longitude [6]
var zilkerPark = ["Zilker Park", "30.276187", "-97.776181", "30.260135", "-97.771194", "30.266895", "-97.772923"];
var rosewoodNeighPark = ["Rosewood Neighborhood Park", "30.274653", ",-97.716333", "30.271005", "-97.709234", "30.271031", "-97.713467"];
var bartonCreekGreenbelt = ["Barton Creek Greenbelt", "30.285798", "-97.827646", "30.234250", "-97.784231", "30.244643", "-97.813160"];
var mcKinneyFallsStatePark = ["McKinney Falls State Park", "30.202370", "-97.725063", "30.167640", "-97.722854", "30.183254", "-97.722399"];
var emmaLongMetroPark = ["Emma Long Metropolitan Park", "30.356452", "-97.848282", "30.323719", "-97.826107", "30.343637", "-97.836233"];
var walCreekMetroPark = ["Walnut Creek Metropolitan Park", "30.388371", "-97.677382", "30.410843", "-97.709775", "30.400488", "-97.686595"];
var peasePark = ["Pease Park", "30.289109", "-97.756060", "30.280137", "-97.750709", "30.283851", "-97.753758"];
var royGuerreroPark = ["Roy G. Guerrero Colorado River Park", "30.250026", "-97.717269", "30.235685", "-97.690601", "30.245128", "-97.705047"];
var mayfieldPark = ["Mayfield Park and Nature Preserve", "30.314760", "-97.773018", "30.310082", "-97.768630", "30.312438", "-97.770428"];
var austinNatAndSciCent = ["Austin Nature and Science Center", "30.273219", "-97.775754", "30.270420", "-97.773399", "30.272098", "-97.773902"];
var shoalCreekGreenbelt = ["Shoal Creek Greenbelt", "30.307949", "-97.748550", "30.265098", "-97.750992", "30.292047", "-97.750597"];
var muellerLakePark = ["Mueller Lake Park", "30.298086", "-97.709049", "30.294390", "-97.702620", "30.296352", "-97.706500"];
var bullCreekGreenbelt = ["Bull Creek Greenbelt", "30.385492", "-97.784090", "30.365006", "-97.764350", "30.377359", "-97.783483"]
var garrisonPark = ["Garrison District Park", "30.213989", "-97.802447", "30.208858', '-97.795642", "30.211424", "-97.799443"];
var lilStacyPark = ["Little Stacy Park", "30.248717", "-97.744906", "30.245923", "-97.743049", "30.247239", "-97.743781"];
var southwestGreenway = ["Southwest Greenway", "30.294160", "-97.707727", "30.288103", "-97.694397", "30.289246", "-97.703759"];
var balconesDistPark = ["Balcones District Park", "30.415541", "-97.721563", "30.410098", "-97.711759", "30.412940", "-97.716745"];
var millsPondRecArea = ["Mills Pond Recreation Area", "30.456040", "-97.681981", "30.448297", "-97.678249", "30.452114", "-97.680233"];
var northwestDistPark = ["Northwest District Park", "30.350764", "-97.744671", "30.345539", "-97.739800", "30.348989", "-97.742047"];
var eastwoodsPark = ["Eastwoods Park", "30.292031", "-97.733301", "30.289317", "-97.730634", "30.290661", "-97.731380"];
var greatHillsNeighPark = ["Great Hills Neighborhood Park", "30.419470", "-97.763739", "30.401857", "-97.750022", "30.411557", "-97.757096"];
var gracywoodsPark = ["Gracywoods Neighborhood Park", "30.407359", "-97.697939", "30.402824", "-97.694719", "30.405162", "-97.695984"];
var austinMemParkCem = ["Austin Memorial Park Cemetery", "30.334581", "-97.755217", "30.327140", "-97.748120", "30.331335", "-97.751668"];
var waterlooPark = ["Waterloo Park", "30.275991", "-97.736708", "30.272395", "-97.734629", "30.273964", "-97.735663"];
var westAustinNeighPark = ["West Austin Neighborhood Park", "30.277813", "-97.758416", "30.275773", "-97.756686", "30.276748", "-97.757456"];
var southAusNeighPark = ["South Austin Neighborhood Park", "30.243738", "-97.770162", "30.239701", "-97.765729", "30.241955", "-97.768024"];
var nicholasDawsonNeighPark = ["Nicholas Dawson Neighborhood Park", "30.253731", "-97.755859", "30.251591", "-97.753845", "30.252653", "-97.754744"]
var gillisNeighPark = ["Gillis Neighborhood Park", "30.241941", "-97.760869", "30.239276", "-97.758031", "30.240571", "-97.759362"]
var adamsHemphillNeighPark = ["Adams-Hemphill Neighborhood Park", "30.299335", "-97.742043", "30.293331", "-97.737493", "30.295758", "-97.739774"];
var reillySchoolPark = ["Reilly School Park", "30.328636", "-97.721011", "30.325990", "-97.718484", "30.327150", "-97.719462"];

// Array of all parks:

var austinParks = [zilkerPark, rosewoodNeighPark, bartonCreekGreenbelt, mcKinneyFallsStatePark, emmaLongMetroPark, walCreekMetroPark, peasePark, royGuerreroPark, mayfieldPark, austinNatAndSciCent, shoalCreekGreenbelt, muellerLakePark, bullCreekGreenbelt, garrisonPark, lilStacyPark, southwestGreenway, balconesDistPark, millsPondRecArea, northwestDistPark, eastwoodsPark, greatHillsNeighPark, gracywoodsPark, austinMemParkCem, waterlooPark, westAustinNeighPark, southAusNeighPark, nicholasDawsonNeighPark, gillisNeighPark, adamsHemphillNeighPark, reillySchoolPark];



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

      //Each button will have a list id that will be created in a function below. We're going to pass on that parameter list, which will be the id that we make, and the id should be named (list-4, list-5, etc). Once we get the id, we can go ahead and assign the crimes to that ID.
      var parkCrimeList = document.getElementById(list);

      var li = document.createElement("li");
      var latitude = parseFloat(data[i].latitude);
      var longitude = parseFloat(data[i].longitude);
      var crimeList = parseFloat(data.length);

      //  This set of variables changes the date and time of the crimes to be legible using dayJS
      var timeDayJSUnderstands = data[i].occ_date_time + "Z"
      var betterTime = dayjs(timeDayJSUnderstands);
      var bestTime = betterTime.format('MMM D, YYYY, h:mm A');

      var crimeDateAndType = bestTime + "  |  " + data[i].crime_type;

      li.textContent = crimeDateAndType;
      parkCrimeList.appendChild(li);


      //console.log("This is the both " + crimeDateAndType);
    }

  });
}

let markersArray = [];
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
        markersArray.push(marker);

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
  //Get ID accordion collapse because we want to add onto the accordion list shown in the index.html file (currently on line 97 on the index.html file)
  var accordion = document.getElementById("accordion-collapse");

  //For loop makes it so we go through every park in our array and do the things in the for loop for each park
  for (let i = 0; i < austinParks.length; i++) {
    // Assign each park a name for searching
    austinParks[i].name = austinParks[i][0];
    let parkNumber = i + 4;

    //Create an h2 following the naming of the Tailwind API. because i = 0 and we commented out the first three default buttons that came with the Tailwind API, the very first id that we create with the h2 element should have the id "accordion-collapse-heading-4", the second should be "accordion-collapse-heading-5", etc.
    let heading = document.createElement("h2");
    heading.setAttribute("id", "accordion-collapse-heading-" + parkNumber);


    //Create a button, and assign a button id to it. We need each button to have an ID for our later function when we use "event.target.id" in order to get the ID based on the button that is clicked. We assign the id number based off of our parkNumber, similar to the heading. We also set the attributes below to match the initial formatting of the default buttons.
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

    //Created a div element and then set an attribute with the id "accordion-collapse-body-" with the parkNumber at the end(accordion-collapse-body-4, accordion-collapse-body-5, etc) and making the default attribute hidden. This id name will be used in a later function that makes it so when you click the button, the class goes from hidden to visible if it was hidden, and visible to hidden if it was visible.
    let div = document.createElement("div");
    div.setAttribute("id", "accordion-collapse-body-" + parkNumber);
    div.setAttribute("class", "hidden");
    div.setAttribute("aria-labelledby", "accordion-collapse-heading-" + parkNumber);

    let content = document.createElement("div");
    content.setAttribute("class", "p-5 border border-b-0 border-gray-200 dark:border-gray-700");

    //We set the id to be "list-" with the parkNumber at the end, so we know where to assign this later in our pullCrimes function (pullCrimes(latMin, latMax, lngMin, lngMax, startDate, endDate, list)). The pullCrimes function will see the list id and know where to assign the crime data for it to.
    let ul = document.createElement("ul");
    ul.setAttribute("id", "list-" + parkNumber);

    content.appendChild(ul);

    div.appendChild(content);

    heading.appendChild(button);
    accordion.appendChild(heading);
    accordion.appendChild(div);
  }
  attachButtonListeners();
}

//The attachButtonListeners function is used at the end of the makeParkList function, and makes the buttons made there clickable and to how we want them to be clickable.
function attachButtonListeners() {
  //Find every button element because we want this to affect every button element that we create based on our array.
  var accordionButtons = document.querySelectorAll("button");

  accordionButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      console.log("button clicked");
      //event.target.id should find the id of the button we clicked, which we assigned in our makeParkList function with this line of code "button.setAttribute("id", parkNumber);". Our buttonId is named "accordion-collapse-body-" with the buttonId in order to target the body because we want the body to change to show the information or hide it whenever we click the button.
      var buttonId = "accordion-collapse-body-" + event.target.id;
      console.log("This is the button ID: " + buttonId);

      //Because we set the buttonID to "accordion-collapse-body- + event.target.id", we're able to get a name like "accordion-collapse-body-4" which is how we named the ID's in our makeParkList function.
      var element = document.getElementById(buttonId);

      // Makes it so if the button has "hidden" on click, we take out the hidden and make the expanded equals to true to show the data. If it does not contain "hidden" on click, we add hidden and make expanded equal to false to hide the data.
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

      var parkLat = austinParks[parkIndex][5];
      var parkLng = austinParks[parkIndex][6];
      panToPark(parkLat, parkLng);
    });
  });
}

function panToPark(lat, lng) {
  map.panTo(new google.maps.LatLng(lat, lng));
  map.setZoom(15);
}


function appendImageToCarousel(imageUrl, parkName) {
  // Getting the carousel
  var carousel = document.querySelector(".carousel");

  // Getting the image element in the carousel
  var carouselImage = carousel.querySelector("img");

  // Debugging: Log the carousel and the image
  console.log("Carousel:", carousel);
  console.log("Carousel Image:", carouselImage);

  // Changing the source of the image
  carouselImage.src = imageUrl;
  console.log("New Image URL:", carouselImage.src);

  // Change the caption based on the image
  var figCaption = carousel.querySelector("figcaption");

  figCaption.textContent = parkName;
}

function fetchParkImage(parkName, listId) {
  // Constructing the Unsplash API URL
  parkName += " Austin, Texas";
  var url = `https://api.unsplash.com/search/photos?query=${parkName}&client_id=bOrL9Sw6VZrA5KdtYZYVv4NObUrYUGJvbo2m6S5eeb8&per_page=1`;

  fetch(url)
    .then(response => {
      console.log("Fetch Response:", response);  // Debugging: Log the response
      return response.json();
    })
    .then(data => {
      console.log("Fetch Data:", data);  // Debugging: Log the data
      if (data.results.length > 0) {
        var imageUrl = data.results[0].urls.small;
        appendImageToCarousel(imageUrl, parkName);
      }
    })
    .catch(error => console.log('Error:', error));
}

function appendImageToList(listId, imageUrl) {
  // Getting the target list
  var targetList = document.getElementById(listId);

  // Creating a new image element
  var newImage = document.createElement("img");
  newImage.src = imageUrl;

  // Appending the image to the list
  targetList.appendChild(newImage);
}

// Call the functions.
makeParkList();
fetchParkImage("Zilker Park", "list-4");
// pullCrimes('30.259585', '30.277721', '-97.780467', '-97.763959', '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000', "list-4").done(data => populateMap(data));

// console.log(austinParks[0][3] + austinParks[0][1] + austinParks[0][4] +austinParks[0][3]);

// Get search input
const searchInput = document.getElementById('default-search');

// Initialize the parks list
const accordionParksList = Array.from(document.querySelectorAll('#accordion-collapse h2')).map(park => {
  return {
    id: park.querySelector('button').id,
    name: park.querySelector('span').textContent.trim(),
  };
});

// Initialize Fuse.js with parks list options
const options = {
  includeScore: true,
  keys: ['name']
};
const fuse = new Fuse(accordionParksList, options);

// Listen for input changes
searchInput.addEventListener('input', (e) => {
  // Get current value
  const query = e.target.value;

  // If input is empty show all parks, else show search results
  if (!query) {
    Array.from(document.querySelectorAll('#accordion-collapse h2')).forEach((park) => {
      park.style.display = 'block';
    });
  } else {
    // Search the parks
    const results = fuse.search(query);

    // Get only the IDs of the matched parks
    const resultsIDs = results.map(result => result.item.id);

    // Go through all the parks in the accordion and hide those that don't match the search
    Array.from(document.querySelectorAll('#accordion-collapse h2')).forEach((park) => {
      if (!resultsIDs.includes(park.querySelector('button').id)) {
        park.style.display = 'none';
      } else {
        park.style.display = 'block';
      }
    });
  }
});

// Initialize autocomplete
const autocomplete = new autoComplete({
  data: {
    src: accordionParksList,
    keys: ['name'],
  },
  trigger: {
    event: ['input', 'focus'],
  },
  placeHolder: "Search parks...",
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        searchInput.value = selection;

        // Trigger input event to filter parks based on the autocomplete selection
        searchInput.dispatchEvent(new Event('input'));
      }
    }
  }
});
autocomplete.start();

// Defining date variables for the pullCrimes function, pcDate1 is one month prior to the most recent monday, pcDate2 is the most recent monday.
const today = new Date();
const monday = new Date(today);
monday.setDate(monday.getDate() - monday.getDay() + 1);

const oneMonthAgo = new Date(monday);
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

let pcDate1 = oneMonthAgo.toISOString().substring(0, 10);
let pcDate2 = monday.toISOString().substring(0, 10);
console.log(pcDate1);
console.log(pcDate2);

function depopulateMap() {

  // Loop through all markers and remove them
  for (let i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }

  // Clear the markers array
  markersArray = [];
}

// Pulls all crimes in last month
function pullMonth() {
  depopulateMap();
  pcDate1 = oneMonthAgo.toISOString().substring(0, 10);
  pcDate2 = monday.toISOString().substring(0, 10);
  pullAllCrimes();
}

// Pulls all crimes in last week
function pullWeek() {
  depopulateMap();
  const oneWeekAgo = new Date(monday);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  pcDate1 = oneWeekAgo.toISOString().substring(0, 10);
  pcDate2 = monday.toISOString().substring(0, 10);
  pullAllCrimes();
}

// Pulls all crimes in last year
function pullYear() {
  depopulateMap();
  const oneYearAgo = new Date(monday);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  pcDate1 = oneYearAgo.toISOString().substring(0, 10);
  pcDate2 = monday.toISOString().substring(0, 10);
  pullAllCrimes();
}

function pullAllCrimes() {

  // Zilker Park
  pullCrimes(austinParks[0][3], austinParks[0][1], austinParks[0][2], austinParks[0][4], pcDate1, pcDate2, "list-4").done(data => populateMap(data));

  // Rosewood Neighborhood Park
  pullCrimes(austinParks[1][3], austinParks[1][1], austinParks[1][2], austinParks[1][4], pcDate1, pcDate2, "list-5").done(data => populateMap(data));

  // Barton Creek Greenbelt
  pullCrimes(austinParks[2][3], austinParks[2][1], austinParks[2][2], austinParks[2][4], pcDate1, pcDate2, "list-6").done(data => populateMap(data));

  // McKinney Falls State Park
  pullCrimes(austinParks[3][3], austinParks[3][1], austinParks[3][2], austinParks[3][4], pcDate1, pcDate2, "list-7").done(data => populateMap(data));

  // Emma Long Metro Park
  pullCrimes(austinParks[4][3], austinParks[4][1], austinParks[4][2], austinParks[4][4], pcDate1, pcDate2, "list-8").done(data => populateMap(data));

  // Walnut Creek Metro Park
  pullCrimes(austinParks[5][3], austinParks[5][1], austinParks[5][2], austinParks[5][4], pcDate1, pcDate2, "list-9").done(data => populateMap(data));

  // Pease Park
  pullCrimes(austinParks[6][3], austinParks[6][1], austinParks[6][2], austinParks[6][4], pcDate1, pcDate2, "list-10").done(data => populateMap(data));

  // Roy G Guerrero Colorado River Park
  pullCrimes(austinParks[7][3], austinParks[7][1], austinParks[7][2], austinParks[7][4], pcDate1, pcDate2, "list-11").done(data => populateMap(data));

  // Mayfield Park and Nature Preserve
  pullCrimes(austinParks[8][3], austinParks[8][1], austinParks[8][2], austinParks[8][4], pcDate1, pcDate2, "list-12").done(data => populateMap(data));

  // Austin Nature and Science Center
  pullCrimes(austinParks[9][3], austinParks[9][1], austinParks[9][2], austinParks[9][4], pcDate1, pcDate2, "list-13").done(data => populateMap(data));

  // Shoal Creek Greenbelt
  pullCrimes(austinParks[10][3], austinParks[10][1], austinParks[10][2], austinParks[10][4], pcDate1, pcDate2, "list-14").done(data => populateMap(data));

  // Mueller Lake Park
  pullCrimes(austinParks[11][3], austinParks[11][1], austinParks[11][2], austinParks[11][4], pcDate1, pcDate2, "list-15").done(data => populateMap(data));

  // Bull Creek Greenbelt
  pullCrimes(austinParks[12][3], austinParks[12][1], austinParks[12][2], austinParks[12][4], pcDate1, pcDate2, "list-16").done(data => populateMap(data));

  // Garrison District Park
  pullCrimes(austinParks[13][3], austinParks[13][1], austinParks[13][2], austinParks[13][4], pcDate1, pcDate2, "list-17").done(data => populateMap(data));

  // Little Stacy Park
  pullCrimes(austinParks[14][3], austinParks[14][1], austinParks[14][2], austinParks[14][4], pcDate1, pcDate2, "list-18").done(data => populateMap(data));

  // Southwest Greenway
  pullCrimes(austinParks[15][3], austinParks[15][1], austinParks[15][2], austinParks[15][4], pcDate1, pcDate2, "list-19").done(data => populateMap(data));

  // Balcones District Park
  pullCrimes(austinParks[16][3], austinParks[16][1], austinParks[16][2], austinParks[16][4], pcDate1, pcDate2, "list-20").done(data => populateMap(data));

  // Mills Pond Recreation Area
  pullCrimes(austinParks[17][3], austinParks[17][1], austinParks[17][2], austinParks[17][4], pcDate1, pcDate2, "list-21").done(data => populateMap(data));

  // Northwest District Park
  pullCrimes(austinParks[18][3], austinParks[18][1], austinParks[18][2], austinParks[18][4], pcDate1, pcDate2, "list-22").done(data => populateMap(data));

  // Eastwoods Park
  pullCrimes(austinParks[19][3], austinParks[19][1], austinParks[19][2], austinParks[19][4], pcDate1, pcDate2, "list-23").done(data => populateMap(data));

  // Great Hills Neighborhood Park
  pullCrimes(austinParks[20][3], austinParks[20][1], austinParks[20][2], austinParks[20][4], pcDate1, pcDate2, "list-24").done(data => populateMap(data));

  // Gracywoods Neighborhood Park
  pullCrimes(austinParks[21][3], austinParks[21][1], austinParks[21][2], austinParks[21][4], pcDate1, pcDate2, "list-25").done(data => populateMap(data));

  // Austin Memorial Cemetery
  pullCrimes(austinParks[22][3], austinParks[22][1], austinParks[22][2], austinParks[22][4], pcDate1, pcDate2, "list-26").done(data => populateMap(data));

  // Waterloo Park
  pullCrimes(austinParks[23][3], austinParks[23][1], austinParks[23][2], austinParks[23][4], pcDate1, pcDate2, "list-27").done(data => populateMap(data));

  // West Austin Neighborhood Park
  pullCrimes(austinParks[24][3], austinParks[24][1], austinParks[24][2], austinParks[24][4], pcDate1, pcDate2, "list-28").done(data => populateMap(data));

  // South Austin Neighborhood Park
  pullCrimes(austinParks[25][3], austinParks[25][1], austinParks[25][2], austinParks[25][4], pcDate1, pcDate2, "list-29").done(data => populateMap(data));

  // Nicholas Dawson Neighborhood Park
  pullCrimes(austinParks[26][3], austinParks[26][1], austinParks[26][2], austinParks[26][4], pcDate1, pcDate2, "list-30").done(data => populateMap(data));

  // Gillis Neighborhood Park
  pullCrimes(austinParks[27][3], austinParks[27][1], austinParks[27][2], austinParks[27][4], pcDate1, pcDate2, "list-31").done(data => populateMap(data));

  // Adams-Hemphill Neighborhood Park
  pullCrimes(austinParks[28][3], austinParks[28][1], austinParks[28][2], austinParks[28][4], pcDate1, pcDate2, "list-32").done(data => populateMap(data));

  // Reilly School Park
  pullCrimes(austinParks[29][3], austinParks[29][1], austinParks[29][2], austinParks[29][4], pcDate1, pcDate2, "list-33").done(data => populateMap(data));
}

// Call the function to pull all crimes for the specified parks
pullAllCrimes();