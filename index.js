var subBtn = $('.subBtn');
var heading = $(".heading");
var btn = $(".btn");
var startingSection = $('.starting-section');
var messageBox = $('.message-box')
var icon = $('.icon');
var userInput = $('.user-input');
var randomNum ;
var userName;

subBtn.click(function(){
   userName = $("#userName").val();

  $(document.body).css('background-image', 'none');
  $(document.body).css('background-color', 'black');
  heading.empty();
  btn.remove();
  subBtn.remove();
  messageBox.css({'display':'block'});
  userInput.html(userName+" , you see three doors.Which one will you open ? (click your choice)");
  $(".game-stage").css({'display':'inline'});
  $(".game-asset").css({'display':'inline'});
  startingSection.css({'display':'inline'}).delay(800);
});
 var lives=3;
 var sword = 0;
 var sheild = 0;
 var win=0;
 var stage =0;

  icon.click(function(){

     randomNum = Math.floor((Math.random()*4)+1);
     console.log(randomNum);
     if(lives > 0 && stage < 32)
     {

       if(this.id == "icon1")
       {


          if(randomNum == 1  && sword ==0 && sheild == 0)
          {
            userInput.html("You choose to open the first door.Whoops!...you can feel the stench of monster's den.You have no Sword! You have no sheild! And now, you have no head! Enjoy the afterlife "+userName);
           lives = lives -1;
           $('.lifeNum').html(lives);
           stage = stage+1;
           $('.stageNum').html(stage);
           }
            if(randomNum == 1 && sheild != 0)
           {
             userInput.html("You choose to open the first door.Yor found a monster.He looks at you with his glowing red eyes in the dark.Scared shirtless , you put your shield forward,the shield breaks.But before the monster's razor sharp clawscan get to you, you close the door.")
             sheild = sheild -1;
             stage = stage+1;
             $('.shield').html(sheild);
             $('.stageNum').html(stage);
           }
           if(randomNum == 1 && sword != 0)
           {
             userInput.html("You choose to open the first door. You found monster.But worry not,you use your sword to kill it.The sword gets trapped in the monster's rock hard skin. Move forward "+userName);
              sword = sword -1;
              stage = stage+1;
              $('.sword').html(sword);
              $('.stageNum').html(stage);
           }

          if (randomNum == 2  ) {

            userInput.html("You choose to open the first door.You found room to be empty.Trembling with fear, you move forward.");
            stage = stage+1;
            $('.stageNum').html(stage);
          }
         if (randomNum == 3 ) {
           userInput.html("You choose to open the first door You found a shield .This will help save you from the monsters. You will get just enough time to close the door.")
           sheild = sheild +1;
           $('.shield').html(sheild);
           stage = stage+1;
           $('.stageNum').html(stage);
         }
         if(randomNum == 4 )
         {
           userInput.html("You choose to open the first door.You found a sword.It will be useful to kill the monster.");
           sword = sword +1;
           $('.sword').html(sword);
           stage = stage+1;
           $('.stageNum').html(stage);
         }

       }
       if(this.id == "icon2" )
       {
         if(randomNum == 1 && sword ==0 && sheild == 0)
         {
           userInput.html("You choose to open the second door.Whoops!...you can feel the stench of monster's den.You have no Sword! You have no sheild! And now, you have no head! Enjoy the afterlife "+userName);
          lives = lives -1;
          $('.lifeNum').html(lives);
          stage = stage+1;
          $('.stageNum').html(stage);
          }
           if(randomNum == 1 && sheild != 0)
          {
            userInput.html("You choose to open the second door.Yor found a monster.He looks at you with his glowing red eyes in the dark.Scared shirtless , you put your shield forward,the shield breaks.But before the monster's razor sharp clawscan get to you, you close the door.")
            sheild = sheild -1;
            stage = stage+1;
            $('.shield').html(sheild);
            $('.stageNum').html(stage);
          }
          if(randomNum == 1 && sword != 0)
          {
            userInput.html("You choose to open the second door. You found monster.But worry not,you use your sword to kill it.The sword gets trapped in the monster's rock hard skin. Move forward "+userName);
             sword = sword -1;
             stage = stage+1;
             $('.sword').html(sword);
             $('.stageNum').html(stage);
          }
          if (randomNum == 2  ) {

            userInput.html("You choose to open the second door.You found room to be empty.Trembling with fear, you move forward.");
            stage = stage+1;
            $('.stageNum').html(stage);
          }
          if(randomNum == 4 )
          {
            userInput.html("You choose to open the second door.You found a sword.It will be useful to kill the monster.");
            sword = sword +1;
            $('.sword').html(sword);
            stage = stage+1;
            $('.stageNum').html(stage);
          }
          if (randomNum == 3) {
            userInput.html("You choose to open the second door You found a shield .This will help save you from the monsters. You will get just enough time to close the door.")
            sheild = sheild +1;
            $('.shield').html(sheild);
            stage = stage+1;
            $('.stageNum').html(stage);
          }


       }
       if(this.id == "icon3" )
       {
         if (randomNum == 3) {
           userInput.html("You choose to open the third door You found a shield .This will help save you from the monsters. You will get just enough time to close the door.")
           sheild = sheild +1;
           $('.shield').html(sheild);
           stage = stage+1;
           $('.stageNum').html(stage);
         }
         if(randomNum == 4 )
         {
           userInput.html("You choose to open the second door.You found a sword.It will be useful to kill the monster.");
           sword = sword +1;
           $('.sword').html(sword);
           stage = stage+1;
           $('.stageNum').html(stage);
         }
         if (randomNum == 2  ) {

           userInput.html("You choose to open the third door.You found room to be empty.Trembling with fear, you move forward.");
           stage = stage+1;
           $('.stageNum').html(stage);
         }
         if(randomNum == 1 && sword ==0 && sheild == 0)
         {
           userInput.html("You choose to open the third door.Whoops!...you can feel the stench of monster's den.You have no Sword! You have no sheild! And now, you have no head! Enjoy the afterlife "+userName);
          lives = lives -1;
          $('.lifeNum').html(lives);
          stage = stage+1;
          $('.stageNum').html(stage);
          }
           if(randomNum == 1 && sheild != 0)
          {
            userInput.html("You choose to open the third door.Yor found a monster.He looks at you with his glowing red eyes in the dark.Scared shirtless , you put your shield forward,the shield breaks.But before the monster's razor sharp clawscan get to you, you close the door.")
            sheild = sheild -1;
            stage = stage+1;
            $('.shield').html(sheild);
            $('.stageNum').html(stage);
          }
          if(randomNum == 1 && sword != 0)
          {
            userInput.html("You choose to open the third door. You found monster.But worry not,you use your sword to kill it.The sword gets trapped in the monster's rock hard skin. Move forward "+userName);
             sword = sword -1;
             stage = stage+1;
             $('.sword').html(sword);
             $('.stageNum').html(stage);
          }

       }
     }
     else {
       startingSection.css({'display':'none'});
       $(document.body).css('background-image', 'url(images/game.jpeg)');
       messageBox.css({'font-size':'12px'});
       messageBox.css({'font-style':'bold'});
       messageBox.css({'color':'white'});


       if( stage < 5)
       {
            userInput.html("Seriously? Your Great Grandmother will be proud of you !!!")
       }
       if(stage >= 5 && stage < 10)
       {
         userInput.html("Okay Amateur ! May be gaming is not your thing.")
       }
       if(stage >=10 && stage <15)
       {
         userInput.html("Noob! You have NO SKILL in gaming.")
       }
       if(stage >=15 && stage >32)
       {
        userInput.html("You are going Great .You are so close to win. Keep Playing!")
       }
       if(stage == 32)
       {
         userInput.html("Bravo, "+userName+" . You have cleared the DUNGEON. Stories of this day will be told. Of your amazing escape from the monsters.But be ready, the world will soon need saving...(*cough*)...in my next game. Till then, farewell, my friend!");
       }

     }

     });











//game -function
