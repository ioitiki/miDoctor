var Doctor = require('./../js/doctor.js').doctorModule;


var dispalyDoctors = function(practicesArray) {
  $('#doctor-div').hide();

};

$(document).ready(function() {
  var currentDoctorObject;
  $('#doctor-div').hide();


  $('#find-doctor').submit(function() {
    event.preventDefault();
    currentDoctorObject  = new Doctor();
    var symptom = $("#symptom").val();
    var distance = $("#distance").val();
    var sort = $("#sort").val();
    var limit = $("#limit").val();

    currentDoctorObject.findDoctors(symptom, distance, sort, limit, dispalyDoctors);

    $('#doctor-div').show();

  });
});
