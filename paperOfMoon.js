//distance from earth to moon in millimeters
const moonPathsMm = 384400000000; 

//A4 sheet thickness 0.1 centimeter or 10 millimeters
const listMm = 1;

const bendPapers = (list, pathMoon) => {
  let resultPath = list;
  let newChar = 2;
  let counterPapers = 1;

  while (resultPath < pathMoon) {
    counterPapers += 1;
    newChar *= 2;
    resultPath += newChar;
  }
  
  console.log({counter: counterPapers, resultPath});
  // return {counter: counter,result: result };
};

console.log(bendPapers(listMm, moonPathsMm));

// the function will be executed. with this result
// { counter: 38, resultPath: 549755813885 }

// the conclusion is this: to get to the moon by folding the paper
// 2 times, you need to make 38 folds, or rather 37.6
// While in reality it is possible to bend the sheet a maximum of 7 - 8 times.

// now live with it...

