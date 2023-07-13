



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


function populateMap(data) {
  var ajaxTime = new Date().getTime();



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
}

// Call the functions.
pullCrimes('30.259585', '30.277721', '-97.780467', '-97.763959', '2023-06-01T00:00:00.000', '2023-06-30T23:59:59.000').done(data => populateMap(data));

// getCrimeCoordinates();

//Write a function that returns crime in a given area


//Zilker Park Bottom Right Corner - 30.260984, -97.770843
//Zilker Park Top Left Corner - 30.275586, -97.775581

// -97.780467
// -97.763959