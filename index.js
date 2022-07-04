
let user=[];
let correct=[];
let colors=["green","red","yellow","blue"];
let numclick=-1;
let level=0;
let highscore=0;


$(".box").click(function(buttonClicked){
  numclick++;
  let colorId=buttonClicked.target.id;
  checkAnswer(colorId);
  animation(colorId);
  playAudio(colorId);
});

function animation(color){
  $("."+color).fadeOut(100).fadeIn(100);

}

function playAudio(color){
  let relPath="sounds/"+color+".mp3";
  let audio= new Audio(relPath);
  audio.play();
}


function checkAnswer(color){
  user.push(color);
  if(color==correct[numclick]){
    if(user.length==correct.length){
      setTimeout(function(){
        user=[];
        numclick=-1;
        nextsecquence();
      },1000 );
    }
  }else{
     $("h1").text("Game Over! Press another key to start again");
     let audio=new Audio("sounds/error.mp3");
     audio.play();
     user=[];
     correct=[];
      if(level>highscore){
        highscore=level;
      }
    $("h2").text("High Score : "+highscore)
      level=0;
      numclick=-1;
  }
}


$(document).keypress(function(){
  if(level<=0){
    $("h1").text("Game Begins");
    nextsecquence();
  }
});


function nextsecquence(){
  level++;
  $("h1").text("your level is "+level);
  let rand= Math.floor(Math.random()*4);
  let c=colors[rand];
   correct.push(c);
   playAudio(c);
   animation(c);
}
