window.onload=function(){

    var alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var PlayList;
    var chosenPlayList;
    var word;
    var guess;
    var storedGueses=[ ];
    var lives;
    var counter;
    var space;

    //Get elements variables
    var showLives = document.getElementById("mylives");
    //Alphabetic ul
    var buttons= function(){
        myButtons = document.getElementById('buttons');
        letters= document.createElement('ul');

        for (var i=0; i< alphabet.length;i++){
            letters.id='alphabet';
            list=document.createElement('li');
            list.id='letter';
            list.innerHTML=alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }

    }
    // create ul
    result = function(){
        wordHolder= document.getElementById('hold');
        correct=document.createElement('ul');

        for (var i=0;i < word.length; i++){
            correct.setAttribute('id', 'my-word');
            guess=document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-"){
                guess.innerHTML ="-";
                space = 1;
            }else {
                guess.innerHTML="_";
            }

            storedGueses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
            }
        }

//Lives Remaining
        comments = function () {
            showLives.innerHTML = "You have " + lives + " lives";
            if (lives < 1) {
              showLives.innerHTML = "Game Over";
            }
            for (var i = 0; i < storedGueses.length; i++) {
              if (counter + space === storedGueses.length) {
                showLives.innerHTML = "You Win!";
              }
            }
          }

//onclick function
check=function(){
    list.onclick=function(){
        var guess =(this.innerHTML);
        this.setAttribute("class","clicked");
        this.onclick=null;
        
        for(var i=0;i<word.length;i++){
            if(word[i]===guess){
                storedGueses[i].innerHTML=guess;
                counter+=1;
            }
        }
        var i=(word.indexOf(guess));
        if (i===-1){
            lives-=1;
            comments();
        }else{
            comments();
        }
    }
}

//Play
play=function () {
    PlayList =[
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];
chosenPlayList = PlayList[Math.floor(Math.random() * PlayList.length)];
word =chosenPlayList[Math.floor(Math.random() * chosenPlayList.length)];
word = word.replace(/\s/g,"-");
console.log(word);
buttons();
storedGueses=[ ];
lives = 6;
counter = 0;
space=0;
result();
comments();
}
play();

//Reset
document.getElementById('reset').onclick = function(){
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    play();
}

}







// var keyLetters=["S","O","M","E","O","N","E","L","I","K","E","Y","O","U"]
// var Playlist = [
//     "SOMEONELIKEYOU",
//     "MAKEYOUFEELMYLOVE",
//     "PAYPHONE",
//     "CHASINGPAVEMENTS",
//     "GIRLS",];
// var i;
// for (i=0;i<Playlist.length;i++){
//   console.log(Playlist[i].length);
// }
// //14 17 8 16 5

// //prompt user to enter a letter
// prompt = prompt("Guess a letter!");
// if (userInput == "S"||"O"||"M"||"E" ||"N" ||"L" ||"I" ||"K" ||"Y" ||"U");{
//     correct_guesses++;
// }
// //increment correct_guesses
// //increment incorrect-guesses and minus livesCount

//  else {
//      incorrect_guesses++ && livesCount--;
//  }
//  //when livesCount ===0, inform User
//  if (livesCount === 0);{
//      document.getElementById("").innerHTML="There are no more lives left. You have lost!"
//  }
//  if(correct_guesses === 14);{
//     document.getElementById("").innerHTML="Congratulation! You have won!"
//  }

//  //Listen to User input function

// document.onkeyup=function(event){
//     var letter = event.key.toUpperCase();

//     if (letter ==="s"){
//         document.getElementById("").innerHTML
//     }
// }

// //result
// result = function () {
//     wordHolder = document.getElementById('hold');
//     correct = document.createElement('ul');
//     for (var i = 0; i < word.length; i++) {
//         correct.setAttribute('id', 'my-word');
//         guess = document.createElement('li');
//         guess.setAttribute('class', 'guess');
//         if (word[i] === "-") {
//           guess.innerHTML = "-";
//           space = 1;
//         } else {
//           guess.innerHTML = "_";
//         }
  
//         geusses.push(guess);
//         wordHolder.appendChild(correct);
//         correct.appendChild(guess);
//       }
//     }


// }

// var wordSize = 
// var wordSize = function(){
//     for (var i=0;i<Playlist.length,i++){
//         console.log()
//     }
// }


//  console.log(Playlist[2002].length);



// // document.getElementById("p1").innerHTML = "New text!";





// //var Answers = {2002:"Someonelikeyou",2010:"Makeyoufeelmylove",2012:"Payphone",2014:"chasingpavemnts",2017:"Girls"};
//var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];


// lives count, running from 6 to 0


//var lives =["6","5","4","3","2","1","0"];
    // for (var i = 0; i < lives.length; i++) {
    // console.log(lives[i]);
    // }
    // function countLives()

    // //Get elements
    // var showlives=
    // document.getElementById("livesNumber")= showLives;
    // //showlives
    // var lives;
    // comments = function () {
    //     showLives.innerHTML = "You have " + lives + " lives";
    //     if (lives < 1) {
    //     showLives.innerHTML = "Game Over";
    //     }
    //     for (var i = 0; i < geusses.length; i++) {
    //     if (counter + space === geusses.length) {
    //         showLives.innerHTML = "You Win!";
    //     }
    //     }
    // }
    // lives = 6;