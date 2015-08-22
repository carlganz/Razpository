
        //create alphabet array
var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaArray=alphabet.split("");
        //function that counts a letter in a textbox
var count=function() {
        //get letter
    letter=document.getElementById("Letter").textContent;
        //init count
    var count=0;
        //get text from user
    var text=document.getElementById("inbox").value;
        //convet to uppercase
    text=text.toUpperCase();
        //convert text to char array
    var letters=text.split('');
        //iterate through array
    for (var i=0;i<letters.length;i++) {
            //add to count if letters match
    if (letters[i]==letter) {
            count+=1;
        }
    }
        //alert the user of the count
    alert("The text has the letter " + letter + " in it " + count + " times.");  
}
    //pulls random image of Raz from Github
var newRaz=function() {
    //generate random number between 1 and 159
    var random=Math.floor((Math.random() * 159) + 1);
    //define location of image on github
    var imageSrc="https://raw.githubusercontent.com/carlganz/Razpository/590bdeadd6eed5f0e156d4b445f7c6d5ed32f573/Raz/Raz%20-%20" + random + ".jpg";
    //set image in document equal to new image source
    document.getElementById("puppy").src=imageSrc;
}

var nextLetter=function() {
           //get letter
   var letter=document.getElementById("Letter").textContent;
            //get index
    var index=alphaArray.indexOf(letter);
    //add one to index unless it is the last letter
    if (index==25) {
        index=0
    } else {
        index=index+1
    }
    //set button to next letter
    document.getElementById("Letter").textContent=alphaArray[index];
}

var preLetter=function() {
           //get letter
   var letter=document.getElementById("Letter").textContent;
        //get index
    var index=alphaArray.indexOf(letter);
        //substract one from index unless first letter
    if (index==0) {
        index=25
    } else {
        index=index-1
    }
    //set button to prevoius letter
    document.getElementById("Letter").textContent=alphaArray[index];
}
