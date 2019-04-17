$('#pagination-leafbuyer').twbsPagination({
  totalPages: 16,
  next: 'Next',
  prev: 'Prev',
  
  onPageClick: function (event, page) {
    $('#page-content-leafbuyer').load("../../../templates/leafbuyer.html #articles-leafbuyer-" + page);
  }
});

$('#pagination-calaveras').twbsPagination({
  totalPages: 4,
  next: 'Next',
  prev: 'Prev',
  
  onPageClick: function (event, page) {
    $('#page-content-calaveras').load("../../../templates/calaveras.html #articles-calaveras-" + page);
  }
});

$('#pagination-fishrap').twbsPagination({
  totalPages: 4,
  next: 'Next',
  prev: 'Prev',
  
  onPageClick: function (event, page) {
    $('#page-content-fishrap').load("../../../templates/fishrap.html #articles-fishrap-" + page);
  }
});