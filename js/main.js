$(document).ready(function(){
	var $modal = $('#modal');
	var $modalTrigger = $('i.fa-envelope');

	$modalTrigger.click(function(){
		alert('test');
		$modal.toggle();
	});
});
