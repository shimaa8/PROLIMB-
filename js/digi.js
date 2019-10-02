$(function(){
var owl = $('.owl-carousel');
owl.owlCarousel({
  autoplay: 2000,
  items:1,
  dots: false,

  onInitialized  : counter, //When the plugin has initialized.
  onTranslated : counter //When the translation of the stage has finished.
    
});

function counter(event) {
   var element   = event.target;         // DOM element, in this example .owl-carousel
    var items     = event.item.count;     // Number of items
    var item      = event.item.index + 1;     // Position of the current item
  $('#counter').html("item "+item+" of "+items)
}
 
});

