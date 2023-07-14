var list = document.getElementById("list");
let map;

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
  });
}

// Fix this function to find every park in Austin Texas
// async function placeSearch() {
//   try {
//     const searchParams = new URLSearchParams({
//       query: 'park',
//       ll: '30.2672,-97.7431',
//       open_now: 'false',
//       sort: 'DISTANCE',
//       limit: 50,
//     });
//     const results = await fetch(
//       `https://api.foursquare.com/v3/places/search?${searchParams}`,
//       {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           Authorization: 'fsq3lJQlMmxvABNHBGjaUkSh6Pnv5DH1UPpaGAACazV1ifM=',
//         }
//       }
//     );
//     const data = await results.json();

//     // Filter data to include only parks
//     const parkData = filterParks(data);

//     console.log('Filtered park data:', parkData);

//     return parkData;
//   } catch (err) {
//     console.error(err);
//   }
// }

// function filterParks(data) {
//   if (!data.response || !Array.isArray(data.response.venues)) {
//     console.error("Unexpected API response structure");
//     return [];
//   }

// Assumes the 'name' property of each venue is the one that might contain "park"
//   return data.response.venues.filter(venue => venue.name.toLowerCase().includes('park'));
// }
// placeSearch();

   // console.log("This is how many crimes in Zilker Park " + data.length);
    // console.log(data);

    // for(i =0; i< data.length; i++){

    //   var li = document.createElement("li");
    //   var latitude = parseFloat(data[i].latitude);
    //   var longitude = parseFloat(data[i].longitude);
    //   var crimeList = parseFloat(data.length);
    //   var crimeDateAndType =  data[i].occ_date_time + " " + data[i].crime_type;

    //   li.textContent = crimeDateAndType;
    //   list.appendChild(li);


    

     // console.log("This is the both " + crimeDateAndType);
  
  
    
    
//}


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






//Zilker Park Bottom Right Corner - 30.259585, -97.780467
//Zilker Park Top Left Corner - 30.277721, -97.763959

// -97.780467
// -97.763959
