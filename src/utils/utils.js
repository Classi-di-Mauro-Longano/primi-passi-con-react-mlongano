export function findItemByKeyValue(key, value, array) {
  const result = array.find((item) => item[key] === value);
  return result ?  result : value;
}