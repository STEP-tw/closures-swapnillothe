//const makeConstant = undefined;
//const makeCounterFromN = undefined;
//const makeCounterFromZero = undefined;
//const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
//const makeCycler = undefined;
//const curry = undefined;
const compose = undefined;

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
    if(numberToAdd){
    trackedDelta.old = trackedDelta.new
    trackedDelta.delta = numberToAdd
    trackedDelta.new = trackedDelta.old + numberToAdd;
    }
    return trackedDelta;
  }
}

const curry = function(functionReferrence,argv1){
  return function(argv2,argv3){
    if(argv3){
      return functionReferrence(argv1,argv2,argv3);
    }
    return functionReferrence(argv1,argv2);
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
