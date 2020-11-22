var buttons = document.getElementsByClassName('content__daugiau');
var cards = document.getElementsByClassName('content__card');

for (let i=0; i>cards.length; i++) {
    cards[i].addEventListener("mouseenter", function(){
        document.createElement("button").appendChild(this);
        console.log("veikia")

    })
}

