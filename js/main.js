$(document).ready(function(){
	var $modal = $('#modal');
	var $modalTrigger = $('i.fa-envelope');

	$modalTrigger.onclick(function(){
		alert('test');
		$modal.toggle();
	});
});
