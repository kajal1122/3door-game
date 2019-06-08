var subBtn = $('.subBtn');
var heading = $(".heading");
var btn = $(".btn");
var startingSection = $('.starting-section');
var messageBox = $('.message-box')
var icon = $('.icon');
var userInput = $('.user-input');
subBtn.click(function(){
  $(document.body).css('background-image', 'none');
  $(document.body).css('background-color', 'black');
  heading.empty();
  btn.remove();
  subBtn.remove();
  startingSection.css({'display':'inline'});
  messageBox.css({'display':'block'});




});

icon.click(function(){
  if(this.id == "icon1")
  {
    userInput.html('You choose to open the first door ');

  }
  if(this.id == "icon2")
  {
    userInput.html('You choose to open the second door ');

  }
  if(this.id == "icon3")
  {
    userInput.html('You choose to open the third door ');

  }
});
