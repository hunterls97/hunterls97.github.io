var index = 1;

function next(){
	index++;
	index = index > 3 ? 1 : index;
	dispSlide(index);
}

function prev(){
	index--;
	index = index < 1 ? 3 : index;
	dispSlide(index);
}

function dispSlide(index){
	$('div.slide-container>img').remove();
	$('div.slide-container').append('<img src="/static/img'+index+'.jpg" style="width:100%">').hide().fadeIn(1500);
	$('.dots>span').each(function(){$(this).removeClass('active')});
	$('.dots>span:nth-child('+index+')').addClass('active');
}