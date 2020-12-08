var firstScroll = false;
var header = document.getElementById("header");
var list = document.getElementById("header-list");

window.onscroll = () => {
  headerFunc();
  if (window.scrollY > 1200 && !firstScroll) {
    increaser();
    firstScroll = true; 
  }
};

function increaser(){
        var num = 0;
        var funk = setInterval(() => {
            num++;
            document.getElementById("counter").innerHTML = num;
            if(num === 26) {
            clearInterval(funk);
        }    
    }, 65);
}

function headerFunc() {
    if(window.scrollY > 150) {
      header.style.backgroundColor = "white";
      list.classList.remove("not-scrolled");
      list.classList.add("scrolled");
    } else {
      header.style.backgroundColor = "transparent";
      list.classList.add("not-scrolled");
      list.classList.remove("scrolled");
    }
}

