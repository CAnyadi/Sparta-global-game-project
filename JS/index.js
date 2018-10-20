// array of words to guess
var answers = ["fastandfurious","namibia","shondarhimes","zebra","chicken","Atlanta"]
// random gen of answers array
var randomgen = answers[Math.floor(Math.random()*answers.length)];
console.log(randomgen);

// turning the lower case to upper so one can compare later
randomgen = randomgen.toUpperCase()
console.log(randomgen);
// turn the string of random word into an array of its elements (so we can compare)
var splitArray = randomgen.split("");
// Putting clicks variable up here so it can be accessed in function and in DOM
var clicks = [];
// number of lives
var maxtries = 8;
// underscores same length as randomgenword
 var answerArray = [];
 for (var i = 0; i < randomgen.length; i++) {
 answerArray[i] ="_"
  };
  // clues array
  var cluesArray = ["Popular Action Film", "Country In South Africa","TV Series Director","Zoo Animal", "Animal","State In America"];

// switch for the clues. doen't work but shoes in replt

switch(randomgen) {
  case 'FASTANDFURIOUS':
  console.log('Popular Action Film');
  break;
  case 'NAMIBIA':
  console.log('Country In South Africa');
  break;
  case 'SHONDARHIMES':
  console.log('TV Series Director');
  break;
  case 'ZEBRA':
  console.log('Zoo Animal');
  break;
  case 'CHICKEN':
  console.log('Animal');
  break;
  case 'ATLANTA':
  console.log('State in America');
  break;
  default:
  console.log('no clues available');
}
  // Place to store the letter
var storeLetter = ""
console.log(answerArray);
console.log(splitArray);
// display the underscores in the right place
document.getElementById("underscores").innerHTML = answerArray ;
console.log(randomgen.length);

// clickable letters
document.addEventListener('DOMContentLoaded',function(){
   clicks = document.getElementsByTagName("button");
    for (var i = 0; i < clicks.length; i++) {
      clicks[i].addEventListener("click", function(event){
// when clicked store clicked value in the variable
        storeLetter = this.value;
        replaceLetters();
        livesdecrease();
        loosealert();
        compare();
        cluefunction();
      });
    };
});


// function to replace underscore with correct letters if inocrrevct loose a life
function replaceLetters(event){
  var goodattempt = false;
  for (var j = 0; j<splitArray.length; j++){
    // console.log(valuesArray[j]);
    // console.log(splitArray[j]);
    // console.log("ST"+storeLetter);
    if (storeLetter == splitArray[j]){
      // replacing underscore with correct element in array
      answerArray[j] = splitArray[j]
      goodattempt = true;
    }

  }
    document.getElementById("underscores").innerHTML = answerArray;
    return goodattempt;
};
// function for for lives to decrease once incorrect letter is clicked
function livesdecrease(){
  if(replaceLetters()==false){
    maxtries=maxtries-1
    document.getElementById('lives').innerHTML= maxtries;
  }
}
// function when the player looses
function loosealert(){
  if(maxtries==0){
    // comes up after 50 milliseconds
    setTimeout(function(){
    alert("Unfortunately, you have not correctly guessed the word and you have no more lives.Click Refresh the game to play again");
  }, 50)
  }
};
console.log(answerArray);
console.log(splitArray);


 // function compare(){
// //   var joinanswer = answerArray.join();
// //   console.log(joinanswer);
// //
// //   var joinsplit = splitArray.join();
// //   console.log(joinsplit);
// //   if (joinanswer == joinsplit){
// //     console.log(joinsplit);
// //     console.log(joinanswer);
// //     alert("well done you have successfully guessed the word with X lives remaining")
// //   }
// function to compare letter to array- if correct replace underscore with letter
function compare(){
  // this is to distinguish between when you compare and its the same and when it is not
  var compareletters = 0;
  for(var j = 0; j<splitArray.length; j++){
    if(answerArray[j] == splitArray[j]){
      compareletters = compareletters +1
      // loop go again
      // remember that nothing works (after) return
      // return true
      console.log(compareletters);
    };
  }
  if(compareletters == splitArray.length){
    setTimeout(function(){
    alert("Well done you have correctly guessed the word");
  }, 50)
}
};
// function cluefunction(randomgen){
//   var cluefunction;
//     switch(randomgen){
//       case "fastandfurious":
//       cluefunction= "Popular Action Movie";
//       break;
//       case "namibia":
//       cluefunction: "Country in the Southern area of Africa"
//       break;
//       case "shondarhimes":
//       cluefunction="TV series director"
//       break;
//       case "zebra":
//       console.log("Zoo Animal");
//       break;
//       case "chicken":
//       console.log("Animal");
//       break;
//       case "Atlanta":
//       console.log("State in America");
//       break;
//       default: console.log("error");
//     }
// };
