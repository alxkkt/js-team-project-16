import Pagination from 'tui-pagination';

const container = document.getElementById('tui-pagination-container');

export function pagination(totalItems) {
  const instance = new Pagination(container, {
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    centerAlign: true,
  });
  return instance;
}

export function cleanupPagination() {
  container.innerHTML = '';
}
