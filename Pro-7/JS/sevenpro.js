// localStorage
let maincolor = localStorage.getItem("color_option");

if(maincolor !== null){

    document.documentElement.style.setProperty("--MainColor",maincolor);

    document.querySelectorAll(".colors-list li").forEach(element => {

        element.classList.remove("active");

        if(element.dataset.color === maincolor){
            element.classList.add("active");
        }
    })
}

// Background
var mylanding = document.getElementById("landing");

var imgarr = [
    "../Photo/RyYnZSJ.jpg",
    "../Photo/343619.jpg",
    "../Photo/7wcFi9.jpg",
    "../Photo/2-21787_space-hd-wallpapers-for-pc.jpg",
];
var counter = 0;

var databackground = true;

var changebackground ;

function test(){
    if(databackground){
        changebackground  = setInterval(function(){
            if (counter>imgarr.length-1) {
                mylanding.style.transition="all 0.4s"
                counter=0;
                mylanding.style.background = "url(../Photo/wp2476608.jpg)";
                mylanding.style.backgroundSize="cover";
            }
            else{
                mylanding.style.transition="all 0.4s"
                mylanding.style.background = `url(${imgarr[counter]})`;
                mylanding.style.backgroundSize="cover";
                counter++;
            }
            
        },5000)
    }
    else{
        clearInterval(changebackground);
    }
};

test();
// open icon 

var settingboxicon = document.getElementById("setting-box-icon"),
settingbox = document.getElementById("setting-box");

settingboxicon.onclick = function(){

    settingbox.classList.toggle("disappear");
};
// switch colors
var colorsli = document.querySelectorAll(".colors-list li");

colorsli.forEach(function(li){
    li.addEventListener("click", (e) =>{

        document.documentElement.style.setProperty("--MainColor",e.target.dataset.color);

        localStorage.setItem("color_option",e.target.dataset.color);

        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");

        })
        
        e.target.classList.add("active");
    });
});
// control background
var onbutton = document.getElementsByClassName("yes"),
offbutton = document.getElementsByClassName("no");

offbutton[0].addEventListener("click", function (){
    this.classList.add("active");
    databackground = false;
    onbutton[0].classList.remove("active");
    test();
    localStorage.setItem("option-storg",false);
});

onbutton[0].addEventListener("click",function(){
    this.classList.add("active");
    offbutton[0].classList.remove("active");
    databackground = true;
    test();
    localStorage.setItem("option-storg",true);
});

// localstorge control background

var backgroundlocal = localStorage.getItem("option-storg");

if(backgroundlocal !== null){
    if (backgroundlocal === 'true') {
        databackground = true;
        onbutton[0].classList.add("active");
    }else{
        databackground = false;
        offbutton[0].classList.add("active");
        onbutton[0].classList.remove("active");
        test();
    }
    
};

// iconcontrol responsive

var iconresponsive = document.getElementsByClassName("control-icon");

var ulresponsive = document.getElementsByClassName("links");

var liresponsive = document.querySelectorAll(".links li");

iconresponsive[0].onclick = function(){

    ulresponsive[0].classList.toggle("ul-appear");

    liresponsive.forEach(function(li){
        li.classList.toggle("li-appear");
    });

}
//Animation 

// var animation = document.getElementById("about-us");

// liresponsive[0].onclick = function(){
//     animation.style.display="block";
// }
//Scroll
var iconscrool = document.getElementsByClassName("scroll-controll");

iconscrool[0].onclick = function(){
    window.scrollTo(0,0);
}
window.addEventListener("scroll" , ()=>{
    if(window.scrollY >= 245){
        iconscrool[0].style.display="block";
    }
    else{
        iconscrool[0].style.display="none";
    }
} )

//Data Progress

var boxofitem = document.querySelector(".our-skills"),

    spanitem =Array.from(document.querySelectorAll(".our-skills .box-progress span")) ;

window.onscroll = function(){
    
    let x = boxofitem.offsetTop; // الاسكرول بتاعو بدا منين (كل الي فوقه)
    let z = boxofitem.offsetHeight;//طوله
    let y = window.innerHeight;//طول الشاشه
    let i = window.scrollY; //الاسكرول بتاع الشاشه;

    if( i+y >= x){
        spanitem.forEach(span1=>{

                span1.style.width = span1.dataset.progress;

                });

    }else{
        spanitem.forEach(span1=>{

            span1.style.width = "0";

            });
    }
}

//Gallary

var imggallary = document.querySelectorAll(".Our-Gallary img");


imggallary.forEach(img =>{
    img.addEventListener('click' , (e)=>{
        

        var divscreen = document.createElement("div");

        divscreen.className = "divscreen";
        
        document.body.appendChild(divscreen);

        var divbox = document.createElement("div");

        divbox.className = "divbox";

        if (img.alt !== null) {
            var captiontext = document.createElement("span");

            captiontext.className = "span-caption-text";

            var captionalt = document.createTextNode(img.alt);

            captiontext.appendChild(captionalt);

            divbox.appendChild(captiontext);
            
            var exitspan = document.createElement("span");
            
            exitspan.className = "spanexit";
            
            var exitspantext = document.createTextNode("x")

            exitspan.appendChild(exitspantext);

            divbox.appendChild(exitspan);

            
        }else{

        }

        var divimgscreen = document.createElement("img");

        divimgscreen.className = "divimgscreen";

        divimgscreen.src = img.src;

        divbox.appendChild(divimgscreen);

        document.body.appendChild(divbox);

        exitspan.onclick = ()=>{
            divbox.remove();
            divscreen.remove();
        }
    })
});

//bullets nav

var bulletsnav = document.querySelectorAll(".bullet-box .bullet");

bulletsnav.forEach(bullet =>{
    bullet.addEventListener("click", (e)=>{
        document.querySelector(e.target.dataset.goingto).scrollIntoView({
            behavior: 'smooth'
        })
    })

})

// control bullets nav

var buttoncontrolbulltes = document.querySelectorAll(".option-box2 button");

var bulletbox = document.getElementsByClassName("bullet-box");

// control bullets nav Local Storage

var controlbulletslocalstorge = localStorage.getItem("control-bullets2");

if (controlbulletslocalstorge !== null) {

    buttoncontrolbulltes.forEach(bulleta => {
        bulleta.classList.remove("active");
    });

    if (controlbulletslocalstorge === "block") {
        buttoncontrolbulltes[0].classList.add("active");
        bulletbox[0].style.display = "block";
    }else{
        buttoncontrolbulltes[1].classList.add("active");
        bulletbox[0].style.display = "none";
    }

}



buttoncontrolbulltes.forEach(button =>{
    button.addEventListener('click' , (e) =>{
        if (button.classList.contains("show")) {
            bulletbox[0].style.display = "block";
            e.target.classList.add("active");
            buttoncontrolbulltes[1].classList.remove("active");
            localStorage.setItem("control-bullets2" ,"block");
        }else{
            bulletbox[0].style.display = "none";
            e.target.classList.add("active");
            buttoncontrolbulltes[0].classList.remove("active");
            localStorage.setItem("control-bullets2" ,"none");
        }
    })
    
})
//resetbuttom
var resetbuttom = document.getElementsByClassName("button-rest");

resetbuttom[0].onclick = function(){
    localStorage.clear();

    window.location.reload();
}