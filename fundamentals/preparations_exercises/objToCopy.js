function copyObj(obj, keys = []) {
  let new_obj = Object.assign({}, obj);
  if (keys.length === 0) return new_obj;
  Object.keys(new_obj).forEach(key => {
    if ( !keys.includes(key) ) { delete new_obj[key];}
  });
  return new_obj;
}
/*
 * function copyObj(sourceObject, keys) {
 * let destinationObject = {};
 *
 * if (keys) {
 * keys.forEach(function(key) {
 * destinationObject[key] = sourceObject[key];
 * });
 *
 * return destinationObject;
 * } else {
 * return Object.assign(destinationObject, sourceObject);
 * }
 *}
*/

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3, 
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);

