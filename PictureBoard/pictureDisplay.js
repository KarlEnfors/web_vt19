

var images;

init();
function init(){
    for (let index = 0; index < 25; index++) {
        addPicture("../content/placeholder.png");
    }
}

function addPicture(picref){
    var pic = document.createElement("img");
    pic.src = picref;
    var picBox = document.createElement("div");
    picBox.className = "picContainer";
    picBox.append(pic);
    picBox.style.width = makeSize() +"%";
    document.getElementById("pictures").appendChild(picBox);

}

function makeSize(){
    var s = 10;
    s += Math.floor(Math.random() * 30);
    return s;
}

function fireworks(){
    document.getElementById("header").innerHTML = "Mouse over!";

}

function unfireworks(){
    document.getElementById("header").innerHTML = "Pictures!";

}
