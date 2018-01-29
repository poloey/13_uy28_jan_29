$grid = $('.grid').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});


$('button').on('click', function() {
  $a = $(this).attr('data-name');
  $grid.isotope({
    filter: $a
  });
});