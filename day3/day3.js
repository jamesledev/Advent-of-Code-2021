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
  let gRate;
  let eRate;
  let numberObject = [];
  for (i = 0; i < theData.length; i++) {
    const dataPoint = theData[i].split('');
    console.log(dataPoint);
    // console.log(dataPoint[i]);
  }

  // numberObject.forEach((element) => console.log(element));

  // let power = parseInt(gRate, 2) * parseInt(eRate, 2);
  // console.log(power);
}

function addArray(dataArray) {
  for (i = 0; i < dataArray.length; i++) {
    dataArray[i];
  }
}
