export function addToStorage(key, data) {
  let array = [...data];
  localStorage.setItem(key, JSON.stringify(array));
}
