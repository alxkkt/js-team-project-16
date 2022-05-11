export function transfromGenres(array, ids) {
  let genres = [];

  array.map(element => {
    if (ids.includes(element.id)) {
      genres.push(element.name);
    }
  });

  if (genres.length > 2) {
    return `${genres[0]}, ${genres[1]}, Other`;
  } else {
    return genres.join(', ');
  }
}
