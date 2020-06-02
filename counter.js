// The purpose of this code is to animate the progress bars 

// speed in increments/s
function animator(barId , speed) {
    //counter
    let num = 0
    // browser refresh rate
    let domRefresh = 200
    // how many increments before calling repaint
    const increment = speed * domRefresh / 1000
    // get progressBar
    let progressBar = $(barId);
    // color variables
    let red = 166;
    let green = 166;
    let blue = 166;

    function callback(num){
        if(num<100){
            // timeout needs to be slower then DOM refresh
            setTimeout(()=>increase(increment, num=>callback(num)),domRefresh)
        }
    }

    increase(increment, num=>callback(num))
 
    function increase(step){
        for(let i = 0;i<step;i++){
            // increment
            num += 1
            if((num % 5 === 0) && (num > 4)){
                changeColor();
            }    
        }
        changeWidth(num)
        // callback with new num
        callback(num)
    }
    function changeWidth(i){
        // console.log('calling changeWidth',i)
        progressBar.css("width", i + "%");
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
}
