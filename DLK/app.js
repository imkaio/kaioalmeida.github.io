// Menu Stick
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 0) {
        document.querySelector("nav.menu").style.height = "60px";
        document.querySelector("nav.menu").style.background = "#000";
    } else {
        document.querySelector("nav.menu").style.height = "115px";
        document.querySelector("nav.menu").style.background = "linear-gradient(#000 0%, rgba(0, 0, 0, 0) 100%)";
    }
}

// Barra de Frete
function fecharFaixaFrete() {
    const element = document.querySelector(".faixa__frete--gratis");
    element.classList.add("fecharFaixa");
}

