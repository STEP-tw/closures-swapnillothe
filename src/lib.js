//const makeConstant = undefined;
const makeCounterFromN = undefined;
const makeCounterFromZero = undefined;
const makeDeltaTracker = undefined;
const makeFiboGenerator = undefined;
//const makeCycler = undefined;
const curry = undefined;
const compose = undefined;

const createList = function(listMember){
  return listMember;
}

const indexCreater = function(list){
  let index = 0;
  return function(){
    if(index == list.length)
      index = 0;
   return index++;
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
  let index = indexCreater(listToCycle);
  return cycleList = function(){
   return listToCycle[index()];
  }
}

//const curry = function(functionReferrence,argv1){
//  return function(argv2){
//    return functionReferrence(argv1,argv2);
//  }
//}

exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
