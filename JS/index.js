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
 var answerArray = [];
 for (var i = 0; i < randomgen.length; i++) {
 answerArray[i] ="_"
  };
console.log(answerArray);
console.log(splitArray);

// store letter
var storeLetter = ""
// display the underscores in the right place
document.getElementById("underscores").innerHTML = answerArray ;
console.log(randomgen.length);

// clickable letters
document.addEventListener('DOMContentLoaded',function(){
   clicks = document.getElementsByTagName("button");
    for (var i = 0; i < clicks.length; i++) {
      // pushing the values of clicks var into valuesArray
      clicks[i].addEventListener("click", function(event){
        storeLetter = this.value;
        replaceLetters();
        // console.log(clicks);
        // console.log(this.value);

      });
    };
});


// function to replace underscore with correct letters if inocrrevct loose a life
function replaceLetters(event){
  var goodattempt = false;
  // console.log(storeLetter + " inside replaceLetter");
  console.log(storeLetter);
  // console.log(splitArray.length);
  for (var j = 0; j<splitArray.length; j++){
    // console.log(valuesArray[j]);
    // console.log(splitArray[j]);
    if (storeLetter == splitArray[j]){
      answerArray[j] == splitArray[j]
      goodattempt = true;
      // when I click a button alphabet until == splitArray[j] shows
      // and disable the button
    }
    // when I click any letter the value of A and M  comes up and I don't know why
    // console.log(valuesArray);
    // console.log(valuesArray[j]);
  return goodattempt;
}
if (replaceLetters()==false) {
  maxtries = maxtries-1
};
};

// replaceLetters();
