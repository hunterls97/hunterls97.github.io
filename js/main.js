$(document).ready(function(){
	var $modal = $('#modal');
	var $modalTrigger = $('i.fa-envelope');

	$modalTrigger.click(function(){
		$modal.toggle(1500);
	});

	$('span.close').click(function(){
		$modal.hide();
	});

	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}
});

