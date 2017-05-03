var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(formattedArray) {
  var $table = $( "<table></table>" );

  for ( var i = 0; i < formattedArray.length; i++ ) {
      var practice = formattedArray[i];
      var $line = $( "<tr></tr>" );
      $line.append( $( "<td></td>" ).html( practice[0] ) );
      $line.append( $( "<td></td>" ).html( practice[1].number ) );
      $line.append( $( "<td></td>" ).html( practice[2].street ) );
      $table.append( $line );
  }

  $table.appendTo(document.body);
};


$(document).ready(function() {
  var currentDoctorObject;
  $('#doctor-div').hide();

  $('#find-doctor').submit(function() {
    currentDoctorObject  = new Doctor();
    var symptom = $("#symptom").val();
    var distance = $("#distance").val();
    var sort = $("#sort").val();
    var limit = $("#limit").val();

    currentDoctorObject.findDoctors(symptom, distance, sort, limit, displayDoctors);

  });
});
