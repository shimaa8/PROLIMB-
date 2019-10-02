/*var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button").style.display = "block";
  } else {
    document.getElementById("button").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
HTML SCSS JSResult
EDIT ON


$(document).ready(function() {
  //Just for Demo never use jquery like this

  $('.point-content .close').on('click', function(e) {

    $(this).parent().removeClass('active');

  })

  $('.point').on('click', function(e) {
    e.stopPropagation();

    $(this).next().addClass('active');

    /*  $('.image-point').removeClass('active');
        $(this).parent().addClass('active');*/
    //  $('.item').addClass('open');
  })

})
Resources

$(document).ready(function(){
  // MODAL
  $('.modal').modal();
  // DROPDOWNS
  $(".dropdown-button").dropdown(
    {
      belowOrigin: true
    }
  );
  // TABS
  $('ul.tabs').tabs();
  // SCROLLSPY
  $('.scrollspy').scrollSpy();
});