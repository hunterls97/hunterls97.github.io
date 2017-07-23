$(document).ready(function(){
	$.get('/static/quotes.txt', function(data){
		alert(data);
	});
});