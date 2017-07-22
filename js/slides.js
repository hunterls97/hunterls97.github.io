var index = 0;

function next(){
	index++;
	index = index > 2 ? 0 : index;
	dispSlide(index);
}

function prev(){
	index--;
	index = index < 0 ? 3 : index;
	dispSlide(index);
}

function dispSlide(index){
	alert(index);
	$('div.slide-container').append('<img src="/static/img'+index+'.jpg" style="width:100%">').hide().fadeIn(1500);
}