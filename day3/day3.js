const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    solution(data);
  });
});

function solution(data) {
  const theData = data.split('\n');
  let gRate = "";
  let eRate = "";
  let numberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (i = 0; i < theData.length; i++) {
    const dataRow = theData[i].split('');
    for(v = 0; v < 12; v++) {
      if (dataRow[v] == 1) {
        numberArray[v]++
      } else {
        numberArray[v]--
      }
    }
  }
  console.log(numberArray)
  for (i = 0; i < numberArray.length; i++) {
    if(Number(numberArray[i]) > 0) {
      gRate += "1"
      eRate += "0"
    } else {
      gRate += "0"
      eRate += "1"
    }
  }
  answer = parseInt(gRate, 2) * parseInt(eRate, 2)
  console.log(answer);
}

