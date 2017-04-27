var apiKey = require('./../.env').apiKey;
var practicesArray = [];

Doctor = function(){
};

Doctor.prototype.findDoctors = function(symptom, distance, sort, limit, dispalyDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + symptom + '&location=' + 45.5231 + ',-' + 122.6765 + ',' + distance + '&sort=' + sort + '&limit=' + limit + '&user_key=' + apiKey)
   .then(function(response) {
     for (var i = 0; i < limit; i++) {
       practicesArray.push(i);
     }
     console.log(practicesArray);
     return practicesArray;
  });
};

exports.doctorModule = Doctor;
