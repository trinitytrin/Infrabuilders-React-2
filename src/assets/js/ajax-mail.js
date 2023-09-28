$(function() {

	// Get the form.
	var form = $('#xboot-contact-form');

	// Get the messages div.
	var formMessages = $('.xboot-send-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('text-danger');
			$(formMessages).addClass('text-success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('.single-input input, #xboot-contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('text-success');
			$(formMessages).addClass('text-danger');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occurred and your message could not be sent.');
			}
		});
	});

});
