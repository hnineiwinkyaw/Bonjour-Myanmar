


$(document).ready(function() {
  $("#just_load_please").on("click", function(e) {

  	$("#exampleModal").modal("hide");
  	console.log("hi");
    e.preventDefault();
    $("#loadMe").modal({
      backdrop: "static", //remove ability to close modal with click
      keyboard: false, //remove option to close with keyboard
      show: true //Display loader!
    });
    var templateParams = {

    	first_name: document.getElementById("first-name").value,
    	last_name : document.getElementById("last-name").value,
    	email: document.getElementById("email").value,
    	a_date: document.getElementById("adate").value,
    	d_date: document.getElementById("ddate").value,
    	adults: document.getElementById("adults").value,
    	children: document.getElementById("children").value,
    	infants: document.getElementById("infants").value,
    	plans: document.getElementById("message-text").value,

	};
    emailjs.send('geniusHE','template_YmHG8l1Z', templateParams)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	   $("#loadMe").modal("hide");
		document.getElementById("first-name").value = '';
    	document.getElementById("last-name").value = '';
    	document.getElementById("email").value = '';
    	document.getElementById("adate").value = '';
    	document.getElementById("ddate").value = '';
    	document.getElementById("adults").value = '';
    	document.getElementById("children").value = '';
    	document.getElementById("infants").value = '';
    	document.getElementById("message-text").value = '';
	    swal("Success!", "Your enquiry form has been submitted!", "success");

	}, function(err) {
	   console.log('FAILED...', err);
	   $("#loadMe").modal("hide");
	   document.getElementById("first-name").value = '';
    	document.getElementById("last-name").value = '';
    	document.getElementById("email").value = '';
    	document.getElementById("adate").value = '';
    	document.getElementById("ddate").value = '';
    	document.getElementById("adults").value = '';
    	document.getElementById("children").value = '';
    	document.getElementById("infants").value = '';
    	document.getElementById("message-text").value = '';
	   swal("Failed!", "Your enquiry has been failed! Check your connection or contact us via email directly", "error");
	});
    //setTimeout(function() {
      //$("#loadMe").modal("hide");
    //}, 8000);
  });
  //ajax code here (example for $.post) using test page from https://reqres.in
  //Adding a delay so we can see the functionality of the loader while request processes
  $("#load_me_baby").on("click", function(e) {
    e.preventDefault();
    $("#loadMe").modal({
      backdrop: "static", //remove ability to close modal with click
      keyboard: false, //remove option to close with keyboard
      show: true //Display loader!
    });
    var testUrl = "https://reqres.in/api/users?delay=3";
    $.get(
      testUrl,
      function(response) {
        if (response.data[0]) {
          //if you received a successful return, remove the modal. Either way remove the modal!!
          var resOutput =
            '<h4 style="color: white">Modal closed and output displayed!</h4><p style="color: white">This is <b>' +
            response.data[0].first_name +
            " " +
            response.data[0].last_name +
            '</b></p><img src="' +
            response.data[0].avatar +
            '" class="img-responsive img-thumbnail" alt="avatar" style="margin-top: 13px; max-width="200px;">';
          $("#output").html(resOutput);
          $("#loadMe").modal("hide");
        } else {
          $("#output").html(
            '<div class="alert alert-warning"><h4>Uh oh!</h4></div>'
          );
        }
      },
      "json"
    );
  });
});
