var terapija = document.getElementById("terapinis-text");
var kanaluGydymas = document.getElementById("kanalu-gydymas-text");
var protezavimas = document.getElementById("protezavimas-text");
var chirurgija = document.getElementById("chirurgija-text");
var higiena = document.getElementById("higiena-text");
var allCells = document.querySelectorAll(".service-button");

document.getElementById("terapinis").addEventListener("click", () => {
    removeClass();
    document.getElementById("terapinis").classList.add("active");
    terapija.classList.add("active");
    kanaluGydymas.classList.remove("active");
    protezavimas.classList.remove("active");
    chirurgija.classList.remove("active");
    higiena.classList.remove("active");
})

document.getElementById("kanalu-gydymas").addEventListener("click", () => {
    removeClass();
    document.getElementById("kanalu-gydymas").classList.add("active");
    kanaluGydymas.classList.add("active");
    terapija.classList.remove("active");
    protezavimas.classList.remove("active");
    chirurgija.classList.remove("active");
    higiena.classList.remove("active");
})

document.getElementById("protezavimas").addEventListener("click", () => {
    removeClass();
    document.getElementById("protezavimas").classList.add("active");
    protezavimas.classList.add("active");
    kanaluGydymas.classList.remove("active");
    terapija.classList.remove("active");
    chirurgija.classList.remove("active");
    higiena.classList.remove("active");
})

document.getElementById("chirurgija").addEventListener("click", () => {
    removeClass();
    document.getElementById("chirurgija").classList.add("active");
    chirurgija.classList.add("active");
    kanaluGydymas.classList.remove("active");
    protezavimas.classList.remove("active");
    terapija.classList.remove("active");
    higiena.classList.remove("active");
})

document.getElementById("higiena").addEventListener("click", () => {
    removeClass();
    document.getElementById("higiena").classList.add("active");
    higiena.classList.add("active");
    kanaluGydymas.classList.remove("active");
    protezavimas.classList.remove("active");
    chirurgija.classList.remove("active");
    terapija.classList.remove("active");
})

function removeClass () {
    allCells.forEach(item => {
        item.classList.remove("active");
    });
}