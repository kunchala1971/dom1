function showResult() {
	let inputaElement = document.getElementById("inputa");
	let inputbElement = document.getElementById("inputb");
	let resultElement = document.getElementById("result");
	let sum = parseInt(inputaElement.value) + parseInt(inputbElement.value);
	//resultElement.innerHTML = "<h1 style='color:red;'>" + sum + "</h1>";
	resultElement.innerText =  sum ;
}