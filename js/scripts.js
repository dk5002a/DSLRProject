$(function(){
  // $('*').on('click', function(){console.log(true)});
  $('.imagebox img').on("mouseenter", function(event){
    var imgNum = $(event.currentTarget).attr("class");
    var selectorString = ".imagedetails section" + "." + imgNum
    console.log(selectorString)
    $(selectorString).css("display", "inline-block");
  });

  $('.imagebox img').on("mouseout", function(event){
    $('.imagedetails section').css('display', 'none');
  })
});
