window.onscroll = function() {
    stickElement();
}
var sidebar = document.querySelector(".header-top");
var sticky = sidebar.offsetTop;
function stickElement() {
    if(window.pageYOffset >= sticky) {
        sidebar.classList.add("header-top_sticky_true")
        
    }  else{
        sidebar.classList.remove("header-top_sticky_true")
        

    }
}