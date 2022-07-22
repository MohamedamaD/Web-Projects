var li1 = document.getElementById("li-1"),
ul1 = document.getElementById("ul-1"),
li2 = document.getElementById("li-2"),
ul2 = document.getElementById("ul-2"),
li2li = document.getElementById("li-2-li-1"),
li2ul = document.getElementById("li-2-ul");

li1.onclick = function (){
    if (ul1.classList.contains("ul-active")) {
        this.style.color = "white";
    }
    else{
        this.style.color = "black"
    }
    ul1.classList.toggle("ul-active");
    
}
li2.onclick = function (){
    if (ul2.classList.contains("ul-active")) {
        this.style.color = "white";
    }
    else{
        this.style.color = "black"
    }
    ul2.classList.add("ul-active");
    li2li.onclick = function (){
        if (li2ul.classList.contains("ul-active")) {
            this.style.color = "white";
        }
        else{
            this.style.color = "black"
        }
        li2ul.classList.toggle("ul-active");
    }
}
li1.style.userSelect = "none";
li2.style.userSelect = "none";

// Icon Scroll
var icon = document.getElementsByClassName("scroll-control"),
portfolio = document.getElementsByClassName("portfolio");

icon[0].onclick = function (){
    window.scrollTo(0,0);
}
window.addEventListener("scroll", (e)=>{
    if (window.scrollY>=portfolio[0].offsetTop) {
        icon[0].style.display = "block";
    }
    else{
        icon[0].style.display = "none";
    }
})
