var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(, ) {
  $('.showDoctor').text("");
};

$(document).ready(function() {
  var currentDoctorObject  = new Doctor();
  $('#symptom-submit').click(function() {
    var symptom = $('#symptom-input').val
    currentDoctorObject.findDoctors(symptom, displayDoctors);
  });
});
