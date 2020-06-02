// The purpose of this code is to animate the progress bars 

let i = 0;
let progressBar = $("#Health");
// color variables
let red = 166;
let green = 166;
let blue = 166;

function countNumbers(){
    // Change the integer to desired percentage
    if(i < 100){
        i = i + 1;
        progressBar.css("width", i + "%");
        checkNumbers();
    }
    
    // Wait for sometime before running this script again
    setTimeout("countNumbers()", 10);
}
function checkNumbers(){
    // if i is divisible by 5 the color changes
    if((i % 5 === 0) && (i > 4)){
        changeColor();
    }    
}
function changeColor(){
    // As the progress bar loads the color changes
    // Changes the rgb value
    red = red - 4;
    green = green + 4;
    blue = blue + 4;
    // Apply changes to the css
    progressBar.css({
        background: "rgb(" + red + "," + green + "," + blue + ")"
    })
}
countNumbers();