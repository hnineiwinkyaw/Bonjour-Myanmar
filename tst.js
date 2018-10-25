
var templateParams = {
    message_html: 'James',
};

function sendMail(){
emailjs.send('hnin_ei','template_YmHG8l1Z', templateParams)
	.then(function(response) {
	   console.log('SUCCESS!', response.status, response.text);
	}, function(err) {
	   console.log('FAILED...', err);
	});
}

