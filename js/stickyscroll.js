
// détecter lorsqu'on scroll
window.onscroll = function() { sticky() };

// récupérer les éléments
let header = document.getElementById("sticky-header");
let stickycomponent = header.offsetTop;

// faire la fonction
function sticky() {
    console.log(window.pageYOffset); 
    if (window.pageYOffset > stickycomponent) {
        header.classList.add("sticky");
    }
    else{
        header.classList.remove ("sticky");
    }
}