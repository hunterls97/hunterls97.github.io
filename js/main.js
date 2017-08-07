$(document).ready(function(){
	var $modal = $('#modal');
	var $modalTrigger = $('i.fa-envelope');

	$(".dropdown-button").dropdown();

	$modalTrigger.click(function(){
		$modal.css('display', 'block');
		$('body').addClass('inModal');
	});

	$('li.contact-me').click(function(){
		$modal.css('display', 'block');
		$('body').addClass('inModal');
	});

	$('span.close').click(function(){
		$modal.css('display', 'none');
		$('body').removeClass('inModal');
	});

	window.onclick = function(event) {
    	if (event.target == modal) {
        	$modal.css('display', 'none');
        	$('body').removeClass('inModal');
    	}
	}
});

