var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  var cat = [element, ...array];
  return cat
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element) {
  var dog = [...array, element];
  return dog
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.push();
  return array
}
function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1);
  return array
}
