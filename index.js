const driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]:val});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
  return Object.assign(obj,{[key]: val});
}

function deleteFromDriverByKey(){
}

function destructivelyDeleteFromDriverByKey(){
}
