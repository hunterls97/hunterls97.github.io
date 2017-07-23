$(document).ready(function(){
	var $modal = $('#modal');
	var $modalTrigger = $('i.fa-envelope');

	$modalTrigger.click(function(){
		$modal.css('display', 'block');
	});

	$('span.close').click(function(){
		$modal.css('display', 'none');
	});

	window.onclick = function(event) {
    	if (event.target == modal) {
        	$modal.css('display', 'none');
    	}
	}
});

