var Doctor = require('./../js/doctor.js').doctorModule;
var currentDoctorObject = new Doctor();
var load = function(formattedArray) {location.reload();};

var displayDoctors = function(formattedArray) {
  $("#doctor-div").text("");

  var $table = $("<table><th>Pracice</th><th>Phone Number</th><th>Address</th></table>");

  for ( var i = 0; i < formattedArray.length; i++ ) {
      var practice = formattedArray[i];
      var $line = $( "<tr></tr>" );
      $line.append( $( "<td></td>" ).html( practice[0] ) );
      $line.append( $( "<td></td>" ).html( practice[1].number ) );
      $line.append( $( "<td></td>" ).html( practice[2].street + " " + practice[2].city + ", OR " + practice[2].zip ) );
      $table.append( $line );
  }

  $('#doctor').show();

  $table.appendTo('#doctor-div');
};


$(document).ready(function() {

  $('#doctor').hide();

  $('#find-doctor').submit(function() {
    var symptom = $("#symptom").val();
    var distance = $("#distance").val();
    var sort = $("#sort").val();
    var limit = $("#limit").val();

    currentDoctorObject.findDoctors(symptom, distance, sort, limit, displayDoctors);
  });
});
