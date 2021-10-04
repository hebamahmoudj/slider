var imges = document.getElementsByClassName("img-item");
var newimgs = [];
var layer2 = document.getElementById("layer2")
var layer3 = document.getElementById("layer3");
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");
var currentindex = 0;
for (var i = 0; i < imges.length; i++) {
    newimgs.push(imges[i]);
    newimgs[i].addEventListener('click', function(e) {

        layer2.style.display = "flex"
        layer3.style.backgroundImage = `url("${e.target.src}")`
        currentindex = newimgs.indexOf(e.target)


    })
}

function nextslide() {
    currentindex++;
    for (var i = 0; i < newimgs.length; i++) {
        if (currentindex == newimgs.length) {
            currentindex = 0;
        }

    }
    console.log(currentindex.src)
    layer3.style.backgroundImage = `url("${newimgs[currentindex].src}")`;


}

function prevslide() {
    currentindex--;
    for (var i = 0; i < newimgs.length; i++) {
        if (currentindex < 0) {
            currentindex = 9;
        }

    }
    console.log(currentindex.src)
    layer3.style.backgroundImage = `url("${newimgs[currentindex].src}")`;


}

function closeslide() {

    layer2.style.display = "none";


}

// layer2.addEventListener('click', function(e){
//     if(e.target != layer3){
//         layer2.style.display="none";
//     }
//     console.log(e.keyCode)

// })

nextBtn.addEventListener('click', nextslide);
prevBtn.addEventListener('click', prevslide);
closeBtn.addEventListener('click', closeslide);
document.body.addEventListener('keydown', function(e) {
    if (e.keyCode == 39) {
        nextslide();
    } else if (e.keyCode == 37) {
        prevslide();
    } else if (e.keyCode == 27) {
        closeslide();
    }
})

var x = {
    name: "hbb",
    age: 34,

}

let user = new Map(Object.entries(x))
console.log(user)