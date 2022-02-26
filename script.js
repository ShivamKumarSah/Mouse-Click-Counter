clickCount = 0

// button = document.getElementById("click-here");
// button.onclick=clicker

function clicker(){
    clickCount += 1
    document.getElementById("click-description").style.display="block";
    document.getElementById("clicks").innerHTML = clickCount
    console.log("button clicked");
};

// function displayClickCount() {
    
// }