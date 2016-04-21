(function($){
  $.fn.changeColor=function(){
    var sj=parseInt(Math.random()*1000);
    var color="#"+sj;
    $(this).css({
      background:color,
    })
  }
})(jQuery)