export function addToStorage(key, element) {
  localStorage.setItem(key, JSON.stringify(element));
}
