var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.findDoctors = function(symptom, distance, sort, limit, displayDoctors) {
  var practicesArray = [];
  var formattedArray = [];
  var url = "https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.77,-122.41&skip=0&query=" + symptom + "&location=45.5231,-122.6765," + distance + "&sort=" + sort + "&limit=" + limit + "&user_key=" + apiKey;

  $.getJSON(url)
  .then(function(response) {
    console.log(response);
    for (var i = 0; i < response.meta.count; i++) {
      practicesArray.push(response.data[i].practices);
    }
    var newArray = practicesArray.map(function(array) {
      for (var i = 0; i < array.length; i++) {
        formattedArray.push([array[i].name, array[i].phones[0], array[i].visit_address]);
      }
    })

    console.log(formattedArray);

    displayDoctors(formattedArray);
  });
};


exports.doctorModule = Doctor;
