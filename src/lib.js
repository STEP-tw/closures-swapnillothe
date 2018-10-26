//--------------small unit function------------//

const identityFunction = function(value){
  return value;
}

const counter = function(list){
  let index = 0;
  return increment = function(){
    if(index == list.length)
      index = 0;
   return index++;
  }
}

const counteFrom= function(startingNumber){
  return function(){
   return startingNumber++;
  }
}

const copyObject = function(object){
  return function(obj,key){
    obj[key] = object[key];
    return obj;
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

const makeFiboGenerator = function(firstNumber,secondNumber){
  if(!firstNumber && !secondNumber){
    firstNumber = 0;
    secondNumber = 1;
  }
  if(firstNumber && !secondNumber){
    secondNumber = firstNumber;
    firstNumber = 0;
  }

  let currentNumber = secondNumber - firstNumber;
  let previousNumber = secondNumber - (2*currentNumber);

  return function(){
    let fibo = previousNumber+ currentNumber;
    previousNumber = currentNumber;
    currentNumber = fibo;
    return fibo;
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
