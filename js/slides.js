var index = 0;

function next(){
	index++;
	index = index > 3 ? 0 : index;
	dispSlide(index);
}

function prev(){
	index--;
	index = index < 0 ? 3 : index;
	dispSlide(index);
}

function dispSlide(index){
	alert(index);
}