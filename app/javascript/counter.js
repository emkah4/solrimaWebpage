var firstScroll = false;

window.onscroll = () => {
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

