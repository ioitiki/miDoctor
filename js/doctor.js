var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.findDoctors = function(symptom, distance, sort, limit, displayDoctors) {
  var practicesArray = [];
  var formattedArray1 = [];
  var formattedArray2 = [];
  var url = "https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.77,-122.41&skip=0&query=" + symptom + "&location=45.5231,-122.6765," + distance + "&sort=" + sort + "&limit=" + limit + "&user_key=" + apiKey;

  $.getJSON(url)
  .then(function(response) {
    for (var i = 0; i < response.meta.count; i++) {
      practicesArray.push(response.data[i].practices);
    }
    for (var i = 0; i < response.meta.count; i++) {
      formattedArray1.push([practicesArray[i][0].name, practicesArray[i][0].phones[0], practicesArray[i][0].visit_address]);
    };
    displayDoctors(formattedArray1);
  });
};


exports.doctorModule = Doctor;
