// array of words to guess
var answers = ["fastandfurious","namibia","shondarhimes"]
// random gen of answers array
var randomgen = answers[Math.floor(Math.random()* answers.length)];
console.log(randomgen);

// turning the lower case to upper so one can compare later
randomgen = randomgen.toUpperCase()

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
  // Place to store the letter
var storeLetter = ""
// to disable the buttons
// var disablebuttons =""
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
        storeLetter = this.value;
        replaceLetters();
        disablebutton();
        livesdecrease()
        loosealert()
        // variable store Letter store this.value temporarily
        // disablebuttons = document.getElementsByTagName("button").diabled = true;
        // after function called for whatever to store on the screen
        // replace underscores with the right letter
        // document.getElementById("underscores").innerHTML += storeLetter;
      });
    };
});
 // function to disable button
function disablebutton(button){
document.getElementsByTagName("button").disabled = true };

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
function livesdecrease(){
  if(replaceLetters()==false){
    maxtries=maxtries-1
    document.getElementById('lives').innerHTML= maxtries;
  }
}

function loosealert(){
  if(maxtries==0){
    alert("Unfortunately, you have not correctly guessed the word and you have no more lives.Try again")
  }
};

function
