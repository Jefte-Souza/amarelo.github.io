// Obtém o elemento navbar
let navbar = document.getElementById("navbar");
let começo = document.getElementById("começo");

// Obtém a posição original da navbar
let sticky  = navbar.offsetTop;


// Função que será executada ao rolar a página
window.onscroll = function() { fixarNavbar() };


function fixarNavbar(){
    // Verifica se a página foi rolada além da posição original da navbar
    if (window.scrollY >= sticky ) {
        navbar.classList.add("fixed");// Adiciona a classe que fixa a navbar no topo
        começo.classList.add("começo");
    } else {
        navbar.classList.remove("fixed");// Remove a classe quando a página volta ao topo
        começo.classList.remove("começo");
    }
}







