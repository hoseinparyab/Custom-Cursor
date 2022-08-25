$(document).ready(function () {
   $(document).on('mousemove', function (e) {
      let Cursor = $('.Cursor');
      Cursor.attr('style', 'top:' + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + 'px;');

   });
let text=$('h2')
   $(text).hover(function(){
      $(text).text('دور شو... :| ');
    });
    $(text).mouseout(function(){
      $(text).text(' دوباره نزدیک شو :) ')
    });
});

