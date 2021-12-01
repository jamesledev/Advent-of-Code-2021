const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    solution(data);
  });
});


function solution (data) {
	const theData = data.split('\n').map(Number);
	let poopArray = [];
	let peeArray = [];
	// console.log(theData);
	for (i = 0; i < theData.length; i++) {
		const number = theData[i];
		const nextNumber = theData[i+1];
		const nextNextNumber = theData[i+2];
		poopArray.push(number + nextNumber + nextNextNumber);
	}
	console.log(poopArray);
	for (i = 0; i < poopArray.length; i++) {
		const number = poopArray[i];
		const nextNumber = poopArray[i+1];
		if (nextNumber > number) {
			peeArray.push(number + " " + nextNumber + ' pee');
		} 
	}
	console.log(peeArray);
}