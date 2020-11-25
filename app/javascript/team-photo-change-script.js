let photo = document.getElementById("team-photo");
let scrollLocation

window.addEventListener('scroll', function() {
    scrollLocation = window.pageYOffset;
  });

if(Number(scrollLocation) > 1000 || Number(scrollLocation) < 1700) {
    nextImage();
}

function nextImage() {
     setTimeout(() => {
    photo.style.backgroundImage = "url('images/greta.png')";
}, 3000)
}

function prevImage() {
    setTimeout(() => {
        photo.style.backgroundImage = "url('images/mantas_p.jpeg')"
    }, 3000);
    nextImage();
}

console.log("im here");