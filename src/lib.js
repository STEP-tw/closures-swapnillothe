//const makeConstant = undefined;
//const makeCounterFromN = undefined;
//const makeCounterFromZero = undefined;
//const makeDeltaTracker = undefined;
//const makeFiboGenerator = undefined;
//const makeCycler = undefined;
//const curry = undefined;
//const compose = undefined;

const createList = function(listMember){
  return listMember;
}

const counter = function(list){
  let index = 0;
  return function(){
    if(index == list.length)
      index = 0;
   return index++;
  }
}

const count = function(startingNumber){
  return function(){
   return startingNumber++;
  }
}

//--------------main function------------------//

const makeConstant = function(valueToMakeConstant){
  return constant = function(){
    return valueToMakeConstant;
  }
}

const makeCycler = function(list){
  let listToCycle = list.map(createList);
  let index = counter(listToCycle);
  return cycleList = function(){
   return listToCycle[index()];
  }
}

const makeCounterFromN = function(startNumber){
  return count(startNumber);
}

const makeCounterFromZero = function(){
  return count(0);
}

const makeDeltaTracker = function(number){
  let trackedDelta = {old: number,delta: 0,new: number};
  return function(numberToAdd){
    if(numberToAdd != undefined ){
    trackedDelta.old = trackedDelta.new
    trackedDelta.delta = numberToAdd
    trackedDelta.new = trackedDelta.old + numberToAdd;
    }
    return trackedDelta;
  }
}

const curry = function(functionReferrence,argv1){
  return reff = function(argv2,argv3){
    return functionReferrence(argv1,argv2,argv3);
  }
}

const compose = function(func1,func2){
  return function(num1,num2){
    return func1(func2(num1,num2));
  }
}

const makeFiboGenerator = function(previousNumber,currentNumber){
  if(!previousNumber && !currentNumber){
    previousNumber = 0;
    currentNumber = 1;
  }
  if(previousNumber && !currentNumber){
    currentNumber = previousNumber;
    previousNumber = 0;
  }

  let secondNum = currentNumber - previousNumber;
  let firstNum = currentNumber - (2*secondNum);

  return function(){
    let fibo = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = fibo;
    return fibo;
  }
}

const getNextFiboNumber = makeFiboGenerator(0,3);

//----------------exports----------------------//
exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
