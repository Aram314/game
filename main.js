var table = document.getElementById('table');
var tds = table.querySelectorAll('td');
var n = 1;
var currentIterationNumber = n;

function getRandom() {
	if(n <= 10) {
		var max = 10;
		var min = 1;
	} else {
		var max = n + 10;
		var min = n - 10;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
function checkSame(number, currentNumber){
	if(number != currentNumber) {
		return number
	} else {
		return checkSame(getRandom(), currentNumber)
	}
}
function getNextTable(){
	var arr = [];
	arr[0] = n;
	currentIterationNumber = n;
	for (var j = 1; j < 9; j++) { 
		var number = checkSame(getRandom(), n);
		arr.push(number);
	}
	var newArr = shuffle(arr);
	for (var i = 0; i < tds.length; i++) {
		tds[i].innerHTML = newArr[i];
	}
	n = n+1;
}
getNextTable();
table.onclick = function(event) {
	var elem = event.target.closest('td');
	if(!elem) return;
	if(elem.tagName != 'TD') return;
	var currentNumber = event.target.innerHTML;
	if(!check()) {
		table.innerHTML = 'You failed!'
	}
	getNextTable();
	function check() {
		return currentNumber == currentIterationNumber;
	}
}

