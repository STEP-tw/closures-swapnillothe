//--------------small unit function------------//

const identityFunction = function(value){
  return value;
}

const counter = function(list){
  let index = 0;
  return increment = function(){
    index = index%list.length;
   return index++;
  }
}

const counteFrom= function(startingNumber){
  return function(){
   return startingNumber++;
  }
}

const copyObject = function(objectToCopy){
  return function(newObject,key){
    newObject[key] = objectToCopy[key];
    return newObject;
  }
}

//--------------main function------------------//

const makeConstant = function(valueToMakeConstant){
  return function(){
    return valueToMakeConstant;
  }
}

const makeCycler = function(list){
  let listToCycle = list.map(identityFunction);
  let index = counter(listToCycle);
  return function(){
   return listToCycle[index()];
  }
}

const makeCounterFromN = function(startNumber){
  return counteFrom(startNumber);
}

const makeCounterFromZero = function(){
  return counteFrom(0);
}

const makeDeltaTracker = function(number){
  let trackedDelta = {old: number,delta: 0,new: number};
  let duplicateOfTrackDelta = {};

  return function(numberToAdd){
    if(numberToAdd != undefined ){
      trackedDelta.old = trackedDelta.new
      trackedDelta.delta = numberToAdd
      trackedDelta.new = trackedDelta.old + numberToAdd;
      fillObject = copyObject(trackedDelta);
      result = (Object.keys(trackedDelta)).reduce(fillObject,{});
      return result;
    }
    fillObject = copyObject(trackedDelta);
    result = (Object.keys(trackedDelta)).reduce(fillObject,{});
    return result;
  }
}

const curry = function(functionReferrence,argv1){
  return function(argv2,argv3){
    return functionReferrence(argv1,argv2,argv3);
  }
}

const compose = function(func1,func2){
  return function(num1,num2){
    return func1(func2(num1,num2));
  }
}

const makeFiboGenerator = function(firstNumber=1,secondNumber=0){
  let currentNumber = Math.max(firstNumber,secondNumber);
  let previousNumber = Math.min(firstNumber,secondNumber);
  return function(){
    let fibonacciNumber = previousNumber;
    previousNumber = currentNumber;
    currentNumber = previousNumber + fibonacciNumber;
    return fibonacciNumber;
  }
}

//----------------exports----------------------//
exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
