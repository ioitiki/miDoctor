var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.findDoctors = function(symptom, displayDoctors) {
  $.get('' + symptom + '' + apiKey)
   .then(function(response) {
     displayDoctors(response.name, response.main.humidity);
     console.log(response);
  })
   .fail(function(error) {
     $('.showDoctor').text(error.responseJSON.message);
   });
};

exports.doctorModule = Doctor;
