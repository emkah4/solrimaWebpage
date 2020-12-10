const menuBtn = document.getElementById("menu-btn");
const dropDownMenu = document.querySelector(".drop-down");
let menuOpen = false;
let navBarOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen && !navBarOpen) {
        menuBtn.classList.add('active');
        dropDownMenu.classList.add('active');
        menuOpen = true;
        navBarOpen = true;
        header.style.backgroundColor = "white";
    } else {
        menuBtn.classList.remove('active');
        dropDownMenu.classList.remove('active');
        menuOpen = false;
        navBarOpen = false;
        if(window.scrollY < 150) {
            header.style.backgroundColor = "transparent"
        } else {
            header.style.backgroundColor = "white";
        }
        
    }
});