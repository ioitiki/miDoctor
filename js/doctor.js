var apiKey = require('./../.env').apiKey;

Doctor = function(){
};

Doctor.prototype.findDoctors = function(symptom, distance, sort, limit) {
  var practicesObjArray = [];
  var nameArray = [];
  var phoneArray = [];
  var addressArray = [];
  var practicesArray = [];
  var url = "https://api.betterdoctor.com/2016-03-01/doctors?user_location=37.77,-122.41&skip=0&query=" + symptom + "&location=45.5231,-122.6765," + distance + "&sort=" + sort + "&limit=" + limit + "&user_key=" + apiKey;

  $.getJSON(url)
  .then(function(response) {
    for (var i = 0; i < response.meta.count; i++) {
      practicesObjArray.push(response.data[i].practices);
    }
    console.log(practicesObjArray);
    var newArray = practicesObjArray.map(function(array) {
      for (var i = 0; i < array.length; i++) {
        nameArray.push(array[i].name);
        phoneArray.push(array[i].phones[0].number);
        addressArray.push(array[i].visit_address);
      }
    });
  console.log(nameArray);
  console.log(phoneArray);
  console.log(addressArray);
  });
};


exports.doctorModule = Doctor;
