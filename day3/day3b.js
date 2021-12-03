const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    solution(data);
  });
});

function solution(data) {
  // let oxygen = '011110000111';
  // let carbon = '111001000110';
  const theData = data.split('\n');

  let oxygen = theData;
  let carbon = theData;
  // let hello = calculateAmountC(theData, 0);
  // let helloTwo = calculateAmountC(hello, 1);
  // let helloThree = calculateAmountC(helloTwo, 2);
  // let helloFour = calculateAmountC(helloThree, 3);
  // let helloFive = calculateAmountC(helloFour, 4);
  // let helloSix = calculateAmountC(helloFive, 5);
  // let helloSeven = calculateAmountC(helloSix, 6);
  // let helloEigth = calculateAmountC(helloSeven, 7);
  // let helloNine = calculateAmountC(helloEigth, 8);
  // let helloTen = calculateAmountC(helloNine, 9);
  // let helloEleven = calculateAmountC(helloTen, 10);
  // let helloTwelve = calculateAmountC(helloEleven, 11);
  // console.log(helloTwelve)
  for (i = 0; i < 12; i++) {
    oxygen = calculateAmountO(oxygen, i);
    carbon = calculateAmountC(carbon, i);
  }
  console.log(oxygen)
  let answer = parseInt(oxygen, 2) * parseInt(carbon, 2)
  console.log(answer);
}

function calculateAmountO(theData, number) {
  let something = 0
  let returnArray = []
  if (theData.length == 1) {
    return theData;
  }
  for (i = 0; i < theData.length; i++) {
    const dataRow = theData[i].split('');
    if (dataRow[number] == 1) {
      something++
    } else {
      something--
    }
  }
  for (i = 0; i < theData.length; i++) {
    const dataRow = theData[i].split('');
    if (something > 0 ) {
      if (dataRow[number] == 1) {
        returnArray.push(theData[i])
      }
    } else if (something < 0) {
      if (dataRow[number] == 0) {
        returnArray.push(theData[i])
      }
    } else {
      if (dataRow[number] == 1) {
        returnArray.push(theData[i])
      }
    }
  }
  // console.log(returnArray)
  return returnArray;
}

function calculateAmountC(theData, number) {
  let something = 0
  let returnArray = []
  if (theData.length == 1) {
    return theData;
  }
  for (i = 0; i < theData.length; i++) {
    const dataRow = theData[i].split('');
    if (dataRow[number] == 1) {
      something++
    } else {
      something--
    }
  }
  for (i = 0; i < theData.length; i++) {
    const dataRow = theData[i].split('');
    if (something < 0 ) {
      if (dataRow[number] == 1) {
        returnArray.push(theData[i])
      }
    } else if (something > 0) {
      if (dataRow[number] == 0) {
        returnArray.push(theData[i])
      }
    } else {
      if (dataRow[number] == 0) {
        returnArray.push(theData[i])
      }
    }
  }
  // console.log(returnArray)
  return returnArray;
}
