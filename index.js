const driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]:val});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
  return Object.assign(obj,{[key]: val});
}

function deleteFromDriverByKey(obj, key){
  let driverNew = {};
  return Object.assign(driverNew);
}

function destructivelyDeleteFromDriverByKey(){
}
