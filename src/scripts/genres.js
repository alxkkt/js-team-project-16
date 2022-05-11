export function transfromGenres(array, ids) {
  let genres = [];

  if (!Array.isArray(array)) {
    return array.slice(0, 4);
  }

  array.map(element => {
    if (ids.includes(element.id)) {
      genres.push(element.name);
    }
  });
  return genres.join(', ');
}
