var drawnNums = new Array(76);

function newCard() {
	//Starting loop per square
	for(var i=0; i < 24; i++) {  
        setSquare(i);
        $("#square"+ i).css("background-color", "#FFFFFF");
	}
}

function setSquare(thisSquare) {
	var currSquare = "square"+thisSquare;
	var newNum;
	
	var colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 15) + getNewNum() + 1;
	}
	while (drawnNums[newNum]);
	
	drawnNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	for(var i=1; i<drawnNums.length; i++) {
	drawnNums[i] = false;
	}
	
	newCard();
}

// Double click square changes background color
for (var i =0; i<24; i++){
    $("#square" + i).dblclick(function(event) {
    $(event.target).css("background-color", "#00bfff");
});}
