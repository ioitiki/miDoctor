var apiKey = require('./../.env').apiKey;
var apiKeyLocation = require('./../.env').apiKeyLocation;

Doctor = function(){
};

Doctor.prototype.getFormattedLocation = function(address) {
  var formattedAddress = address .split(' ').join('+');
  var formattedLocation = "";

  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + formattedAddress + '&key=' + apiKeyLocation)
    .then(function(response) {
      formattedLocation = response.results[0].geometry.location.lat + ',' + response.results[0].geometry.location.lng;
      return formattedLocation;
  });
};

Doctor.prototype.findDoctors = function(symptom, distance, sort, limit){

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=45.5231,-122.6765,' + distance + '&sort=' + sort + '&limit=' + limit + '&user_key=' + apiKey)
   .then(function(response){
     console.log(response);
    //  displayDoctors();
  })
   .fail(function(error){
     $('.showDoctor').text(error.responseJSON.message);
   });
};

exports.doctorModule = Doctor;
