
var mainBut = document.querySelector("#mainBut");
var secondBut = document.querySelector("#mainBut2");
var thirdBut = document.querySelector("#mainBut3");
var fourthBut = document.querySelector("#mainBut4");
function hideArea(){
	
	document.querySelector("#mainArea").classList.toggle('hidden');

}

function hideMap(){
	document.querySelector("#map123").classList.toggle('hidden');
}

function openMapControls(){
	document.querySelector("#greyBox").classList.toggle('hidden');
	document.querySelector("#pide").classList.toggle('hidden');
}

function openLocation(){
	document.querySelector("#greyBox").classList.toggle('hidden');
	document.querySelector("#pide").classList.toggle('hidden');
	document.querySelector("#mainArea").classList.toggle('hidden');
}
mainBut.addEventListener("click", hideArea, false);
secondBut.addEventListener("click", hideMap, false);
fourthBut.addEventListener("click", openMapControls, false);
thirdBut.addEventListener("click", openLocation, false);