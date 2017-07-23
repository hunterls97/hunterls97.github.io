$(document).ready(function(){
	$.get('/static/quotes.txt', function(data){
		var quotes = data.split("%%");
		for(i = 0; i < quotes.length; i++){
			alert(quotes[i]);
		}
	});
});