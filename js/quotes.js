$(document).ready(function(){
	$.get('/static/quotes.txt', function(data){
		var quotes = data.split("%%");
		var singleQuote = getRand(quotes);
		$('.autoQuote').append(singleQuote);
	});
});

function getRand(arr){
	return arr[Math.floor(Math.random() * arr.length)];
}