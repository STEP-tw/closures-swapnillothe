const makeConstant = undefined;
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

const makeCycler = function(list){
  let index = 0;
  let listToCycle = list.map(createList);
  return cycleList = function(){
    if(index == (listToCycle.length)){
      index = 0;
    }
   return listToCycle[index++];
  }
}



exports.makeConstant=makeConstant;
exports.makeCounterFromZero=makeCounterFromZero;
exports.makeCounterFromN=makeCounterFromN;
exports.makeDeltaTracker=makeDeltaTracker;
exports.makeFiboGenerator=makeFiboGenerator;
exports.makeCycler=makeCycler;
exports.curry=curry;
exports.compose=compose;
