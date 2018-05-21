const driver = {};

function updateDriverWithKeyAndValue(obj, key, val){
  return Object.assign({}, obj, {[key]:val});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val){
  return Object.assign(obj,{[key]: val});
}

function deleteFromDriverByKey(obj, key){
  obj.delete(key);
}

function destructivelyDeleteFromDriverByKey(){
}
