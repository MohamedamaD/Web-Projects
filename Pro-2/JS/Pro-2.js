//Header Control 

var mainul = document.getElementById("header-ul"),
liitem = document.querySelectorAll("#header-ul li a");


//Reset active
var home = document.getElementById("home");

window.addEventListener("scroll" , (e)=>{
    if (home.scrollHeight >= window.scrollY) {
        liitem[0].classList.add("links-hover-active");
        
    }
})


//Control Image Landding

var arrowchange = Array.from(document.getElementsByClassName("change-background"));

var bullteschange = document.querySelectorAll("#home ul.bulltes li");


var image = [
    "../Photo/Background1.jpg",
    "../Photo/Background2.jpg",
    "../Photo/Background3.jpg"
];

var count = 1;

// Next Arrow

arrowchange[1].onclick =()=>{
    if (image.length > count && count > 0) {
        count++;
        home.style.backgroundImage = `url(../Photo/Background${count}.jpg)`;

        // Bulltes Active 

        // Remove Class Active
        bullteschange.forEach(li=>{
            li.classList.remove('active')
        })
        // Add Class Active
        bullteschange[count - 1].classList.add('active');
    }
    else{
        count = 1;
        home.style.backgroundImage = `url(../Photo/Background${count}.jpg)`;

        // Bulltes Active 

        // Remove Class Active
        bullteschange.forEach(li=>{
            li.classList.remove('active')
        })
        // Add Class Active
        bullteschange[0].classList.add('active');
    }

}
// Prevouis Arrow

arrowchange[0].onclick =()=>{

    
    if (image.length >= count && count > 1) {
        count--;
        home.style.backgroundImage = `url(../Photo/Background${count}.jpg)`;

         // Bulltes Active 

                 // Remove Class Active
        bullteschange.forEach(li=>{
            li.classList.remove('active')
        })
        // Add Class Active
        bullteschange[count - 1].classList.add('active');

    }else{
        count = 3;
        home.style.backgroundImage = `url(../Photo/Background${count}.jpg)`;

         // Bulltes Active 

                 // Remove Class Active
        bullteschange.forEach(li=>{
            li.classList.remove('active')
        })
        // Add Class Active
        bullteschange[2].classList.add('active');
    }
}


// BulltesChange Control

bullteschange.forEach(li=>{
    li.addEventListener('click',(e)=>{
        // Remove Class Active
        bullteschange.forEach(li=>{
            li.classList.remove('active')
        })

        // Add Class Active
        bullteschange[li.dataset.bullteschangecontroll - 1].classList.add('active');

        // Main Propuse
        home.style.backgroundImage = `url(../Photo/Background${li.dataset.bullteschangecontroll}.jpg)`;

        // Must Be Count Equal Date 
        count = li.dataset.bullteschangecontroll ;
    })
})



//Toggle menu

var togglemenu = document.getElementsByClassName("toggle-menu");

var ultoggle = document.getElementById("header-ul");

togglemenu[0].onclick = function(){
    ultoggle.classList.toggle("ul-active");
}

//Progress

var divofprog = document.querySelectorAll(".our-skills .skills .prog .pro span");
var partofskills = document.getElementsByClassName("our-skills");
divofprog.forEach(span=>{
    span.style.width = "0";
});

window.addEventListener("scroll",(l)=>{
    let x = partofskills[0].offsetTop; // الاسكرول بتاعو بدا منين (كل الي فوقه)
    let z = partofskills[0].offsetHeight;//طوله
    let y = window.innerHeight;//طول الشاشه
    let i = window.scrollY; //الاسكرول بتاع الشاشه;
    if (i+y >= x) {
        divofprog.forEach(span=>{
            span.style.width = span.dataset.progress;
        });
    }else{
        divofprog.forEach(span=>{
            span.style.width = "0";
        });
    }
})

// Suffle Control 

var ShuffleLi = document.querySelectorAll('.shuffle li'),
    ShBox = document.querySelectorAll('.imgs-cont .box');
    
    
    ShuffleLi.forEach(li=>{
        li.addEventListener('click', (e)=>{

            // Part Of Shuffle
            ShBox.forEach(box=>{
                box.style.display = "none";
                box.classList.remove('Active');
                if (box.classList.contains(li.dataset.shuffle)) {
                    box.classList.add('Active')
                }
            })

            // Part Of Li Remove Class active
            ShuffleLi.forEach(e=>{
                e.classList.remove('active')
            })

            // Part Of Li Add Class active For Click 
            li.classList.add('active')
        })
    })