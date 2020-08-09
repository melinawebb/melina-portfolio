$(document).ready(function () {
    $('div.hidden').fadeIn(1500).removeClass('hidden');
});

jQuery(function($){
    var headerAnchors = $('#screen > header a').click(function(){
      headerAnchors.removeClass('active');
      $(this).addClass('active');
    });
  });