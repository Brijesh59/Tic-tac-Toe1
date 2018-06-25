var players = {
  player1 : "X",
  player2 : "O"
}
var matchEnd = false, counter = 0, flag = 0;

var winCondition = {
  winCondition1: ["one", "two", "three"],
  winCondition2: ["four", "five", "six"],
  winCondition3: ["seven", "eight", "nine"],
  winCondition4: ["one", "four", "seven"],
  winCondition5: ["two", "five", "eight"],
  winCondition6: ["three", "six", "nine"],
  winCondition7: ["one", "five", "nine"],
  winCondition8: ["three", "five", "seven"]
}

$('td').click(callback);

function callback(e){
  var id = e.target.id;
  var value = document.getElementById(id).innerHTML;
  if(value == ""){
    if(counter%2 == 0 && matchEnd==false){
      $(this).text(players.player1);
      $(this).css('background-color','#ff6699');
      counter++;
    }
    else if(counter%2 != 0 && matchEnd==false) {
      $(this).text(players.player2);
      $(this).css('background-color','#33adff');
      counter++;
    }
    console.log(counter);
    checkWinner();
  }
  if(counter == 9){
    console.log("checking");
    checkMatchDraw();
  }
}

function checkMatchDraw(){
    counter=0;
    if(flag == 0){
      matchEnd = true;
      $("#winner").text("Match Drawn");
      $("#winner").css('display','block');
      $("#playAgain").css('display','inline-block');
    }
}

function reset(){
  $('td').empty();
  $('td').css('background-color','white');
  $("#playAgain").css('display','none');
  $("#winner").html("");
  $("#winner").css('display','none');
  matchEnd = false;
  flag = 0;
}

function checkWinner(){
  for(var i = 1; i < 9; i++){
    var test = "winCondition" + i;
    var id1 = winCondition[test][0];
    var id2 = winCondition[test][1];
    var id3 = winCondition[test][2];
    var value1 = document.getElementById(id1).innerHTML;
    var value2 = document.getElementById(id2).innerHTML;
    var value3 = document.getElementById(id3).innerHTML;
    if(value1 == "X" && value2 == "X" && value3 == "X"){
      $("#winner").text("Player 1 Won");
      $("#winner").css('display','block');
      $("#playAgain").css('display','inline-block');
      flag = 1;
      matchEnd = true;
      addCss(id1,id2,id3);
      checkMatchDraw();
      break;
    }
    else if(value1 == "O" && value2 == "O" && value3 == "O"){
      $("#winner").text("Player 2 Won");
      $("#winner").css('display','block');
      $("#playAgain").css('display','inline-block');
      flag = 1;
      matchEnd = true;
      addCss(id1,id2,id3);
      checkMatchDraw();
      break;
    }
  }
}

function addCss(id1,id2,id3){

  var element1 = document.getElementById(id1);
  var element2 = document.getElementById(id2);
  var element3 = document.getElementById(id3);

  $('td').css('background-color','white');
  $(element1).css('background-color','#00e673');
  $(element2).css('background-color','#00e673');
  $(element3).css('background-color','#00e673');
}
