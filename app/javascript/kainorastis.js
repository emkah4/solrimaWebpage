
const blocks = document.querySelectorAll('.plus-block');
const cells = document.querySelectorAll('.cell');
const wrappers = document.querySelectorAll('.title-wrapper');

cells.forEach(item => {
    item.addEventListener("click", () => {

        var titleWrapper = item.firstElementChild;
        var plusBlock = titleWrapper.firstElementChild;
        var stick = plusBlock.firstElementChild;

        if(item.classList.contains("active")) {
            item.classList.remove("active");
            stick.classList.add('plus');
        }
        else {
                item.classList.add("active");
                stick.classList.remove('plus');
            }
    });
});

wrappers.forEach(item => {
    item.addEventListener("mouseenter", e => {
        e.target.style.color = "#36AF4C";
        
        e.target.firstElementChild.style.backgroundColor = "#36AF4C";
    });
    item.addEventListener("mouseleave", e => {
        e.target.style.color = "";

        e.target.firstElementChild.style.backgroundColor = "";
    });
});