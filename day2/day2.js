const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    solution(data);
  });
});


function solution (data) {
	const theData = data.split('\n');
	let horizontal = 0; 
	let vertical = 0;	
	for (i = 0; i < theData.length; i++) {
		const number = Number(theData[i].match(/[1-9]/));
		console.log(number);
		if (theData[i].includes('forward')) {
			horizontal = horizontal + number;
		} else if (theData[i].includes('up')) {
			vertical = vertical - number;
		} else if (theData[i].includes('down')) {
			vertical = vertical + number;
		}
	}
	console.log(horizontal);
	console.log(vertical);
	let answer = horizontal * vertical;
	console.log(answer);
}