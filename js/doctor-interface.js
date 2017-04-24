var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctorObject  = new Doctor();

  $('#getLocation').submit(function() {
    event.preventDefault();
    var address = $("#location").val();
    var address2 = currentDoctorObject.getFormattedLocation(address);
    currentDoctorObject.findDoctors('back', address2, '100', 'rating-desc', '10');
  });
});
