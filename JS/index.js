// array of words to guess
var answers = ["fastandfurious","namibia","shondarhimes"]
// random gen of answers array
var randomgen = answers[Math.floor(Math.random()* answers.length)];
console.log(randomgen);
// turn the string of random word into an array of its elements (so we can compare)
var splitArray = randomgen.split("");
// Putting clicks variable up here so it can be accessed in function and in DOM
var clicks = [];
// number of lives
var maxtries = 8;
// underscores same length as randomgenword
var valuesArray = [];
 var answerArray = [];
 for (var i = 0; i < randomgen.length; i++) {
 answerArray[i] ="_"
  };
console.log(answerArray);
console.log(splitArray);

// display the underscores in the right place
document.getElementById("underscores").innerHTML = answerArray ;
console.log(randomgen.length);

// clickable letters
document.addEventListener('DOMContentLoaded',function(){
   clicks = document.getElementsByTagName("button");
    for (var i = 0; i < clicks.length; i++) {
      valuesArray.push(clicks[i].value)
      clicks[i].addEventListener("click", function(event){
        replaceLetters();
        // alert(this.value);
      });
    };
});
// function to replace underscore with correct letters if inocrrevct loose a life
function replaceLetters(event){
  var goodattempt = false;
  console.log(splitArray.length);
  for (var j =0; j<splitArray.length; j++){
    console.log(valuesArray[j]);
    // console.log(splitArray[j]);
    if (valuesArray[j] == splitArray[j]){
      answerArray[j] == splitArray[j]
      goodattempt = true;
    }
  }
  return goodattempt;
}
if (replaceLetters()==false) {
  maxtries = maxtries-1
};


// replaceLetters();
