//Toggle Menu

var secondul = document.getElementById("second-ul");

var secondli = document.querySelectorAll(".nav-bar #nav-bar-menu li:nth-of-type(7)");

secondli[0].onclick = function(){
    secondul.classList.toggle("ulactive");
}


var togglemenu =document.getElementById("toggle-menu"),
navbarmenu = document.getElementById("nav-bar-menu");

togglemenu.onclick = function(){
    navbarmenu.classList.toggle("nav-bar-menu-active");
}
//Icon Scroll Control

var IconScroll = document.getElementById("Scroll-Control"),

BookTable = document.querySelectorAll(".book-table");

IconScroll.onclick = function(){
    window.scrollTo(0, 0);
}

window.addEventListener("scroll",(x)=>{
    if (window.scrollY >= (BookTable[0].scrollHeight)) {
        IconScroll.classList.add("Scroll-Control-Active");
    }else{
        IconScroll.classList.remove("Scroll-Control-Active");
    }
})

//Scroll Navbar
var navbar = document.getElementsByClassName("nav-bar"),

AllaInNavBar = document.querySelectorAll(".nav-bar  ul > li > a"),

LiTest = document.getElementById("test");
window.addEventListener("scroll" , (e)=>{
    if (window.scrollY >= 60) {
        navbar[0].style.background = "white";
        navbar[0].style.padding = "10px";
        navbar[0].style.boxShadow = "0 0 15px 0";
        AllaInNavBar.forEach(a=>{
            a.style.color = "black";
        });
        LiTest.style.color="black";
        if (navbarmenu.classList.contains("nav-bar-menu-active")) {
            console.log("true")
            navbarmenu.classList.add("shadow");
        }
        else{
            navbarmenu.classList.remove("shadow");
        }
    }
    else{
        navbar[0].style.background = "transparent";
        navbar[0].style.padding = "20px";
        LiTest.style.color="white";
        AllaInNavBar.forEach(a=>{
            a.style.color = "white";
        });
        
        navbar[0].style.boxShadow = "0 0 0 0";
    }
})

//Bobabb 

var ImageBox = document.getElementById("image-box"),

ImageBoxDivClick = document.getElementsByClassName("for-click"),

jsappear = document.getElementById("js-appear"),

exit = document.getElementById("exit");

ImageBoxDivClick[0].onclick = function(){

    var OverLay = document.createElement("div");//OverLay

    OverLay.classList.add("OverLay");

    document.body.appendChild(OverLay);

    jsappear.style.display="block";

    exit.onclick = function(){

        jsappear.style.display="none";

        document.body.removeChild(OverLay);
    }
};

// Control Buttons Of Menu

var ButtonsOfMenu = document.querySelectorAll(".food-menu .container .box-buttom button");

var BoxMoving = document.querySelectorAll(".food-menu .container .content-box .box");

var count = 1 ;

function ClearAllActiveCalss(){
    BoxMoving.forEach(e=>{
        e.classList.remove("Motion-Active");
    })
    ButtonsOfMenu.forEach(E=>{
        E.classList.remove("Active-Buttons")
    })
}

ButtonsOfMenu[0].onclick = ()=>{
    ClearAllActiveCalss();
    BoxMoving[0].classList.remove("Motion-Active-Burger")
    ButtonsOfMenu[0].classList.add("Active-Buttons")
}
ButtonsOfMenu[1].onclick = ()=>{
    ClearAllActiveCalss();
    BoxMoving[1].classList.add("Motion-Active");
    BoxMoving[0].classList.add("Motion-Active-Burger")
    ButtonsOfMenu[1].classList.add("Active-Buttons")
}
ButtonsOfMenu[2].onclick = ()=>{
    ClearAllActiveCalss();
    BoxMoving[2].classList.add("Motion-Active");
    BoxMoving[0].classList.add("Motion-Active-Burger")
    ButtonsOfMenu[2].classList.add("Active-Buttons")
}
//Test

