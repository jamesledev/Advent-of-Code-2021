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
	let depth = 0;	
	let aim = 0;
	for (i = 0; i < theData.length; i++) {
		const number = Number(theData[i].match(/[1-9]/));
		if (theData[i].includes('forward')) {
			horizontal = horizontal + number;
			depth = depth + (number * aim);
		} else if (theData[i].includes('up')) {
			// depth = depth - number;
			aim = aim - number;
		} else if (theData[i].includes('down')) {
			// depth = depth + number;
			aim = aim + number;
		}
		console.log(aim)
	}
	console.log(horizontal);
	console.log(depth);
	let answer = horizontal * depth;
	console.log(answer);
}