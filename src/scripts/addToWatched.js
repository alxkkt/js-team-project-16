export function addToStorage(key, data) {
  let array = [...data];
  //   array.push(data);
  localStorage.setItem(key, JSON.stringify(array));
}
