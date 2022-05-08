import Pagination from 'tui-pagination';

fetch('https://api.themoviedb.org/4/list/1?api_key=f65bce350427b2684a98ce5b213c02c8&page=1')
  .then(response => {
    return response.json();
  })
  .then(moviesList => {
    console.log('first moviesList', moviesList);
    const container = document.getElementById('tui-pagination-container');
    const instance = new Pagination(container, {
      totalItems: moviesList.total_results,
      itemsPerPage: 20,
      visiblePages: 5,
      centerAlign: true,
    });
    instance
      .on('beforeMove', function (eventData) {
        const { page } = eventData;
        fetch(
          `https://api.themoviedb.org/4/list/1?api_key=f65bce350427b2684a98ce5b213c02c8&page=${page}`,
        )
          .then(response => {
            return response.json();
          })
          .then(moviesList => {
            console.log('result', moviesList);
          });
      })
      .catch(error => {
        console.log(error);
      });
    console.log('total results:', moviesList.total_results);
  });
