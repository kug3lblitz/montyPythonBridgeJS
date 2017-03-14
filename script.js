var run = (function() {

  var name = prompt("What is your name?");
  var quest = prompt("What is your quest?");
  var answer = prompt("What is the windspeed velocity of an unladen swallow?");

  $('#name').text("Your name is " + name);
  $('#quest').text("You seek " + quest);
  $('#question').text(answer + "aaaaAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRGGGGGGGGGHHHHHHH!!!");
});

$('#start').click(run);
