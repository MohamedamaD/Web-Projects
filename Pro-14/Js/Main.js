$(()=>{
    // Span Text Control
    let spanTextArr = [
        'lives',
        'health',
        'day'
    ],
        $spanText = $('.spanText'),
            countOfSpan = 0;
    function spanTextFunc() { 
        if(spanTextArr.length > countOfSpan){
            $spanText.text(`${spanTextArr[countOfSpan]}`).animate({
                top: '0',
                opacity: '1'
            },100).delay(1500).animate({
                top: '40px',
                opacity: '0'
            },100);
            countOfSpan++;
        }else{
            countOfSpan = 0;
            $spanText.text(`${spanTextArr[countOfSpan]}`).animate({
                top: '0',
                opacity: '1'
            },100).delay(1500).animate({
                top: '40px',
                opacity: '0'
            },100);
            countOfSpan++;
        }
    };
    setInterval(spanTextFunc,2000);

    const sliderTesti = document.querySelector('#testimonials .slider-container') ,
        slideTesti = Array.from(document.querySelectorAll('#testimonials .slider-container .slide')) ;
    let isDragging = false ,
        indexActive = 0,
        startPos = 0 ,
        currentTranslate = 0 ,
        prevTranslate = 0 ,
        animationID = 0 ,
        currentIndex = 0;
    $('#testimonials img').on('dragstart',(e)=>{
        e.preventDefault()
    });
    slideTesti.forEach((slide,index)=>{
        // For Mobile
        slide.addEventListener('touchstart',touchStart(index));
        slide.addEventListener('touchend',touchEnd);
        slide.addEventListener('touchmove',touchMove);
        // For Pc 
        slide.addEventListener('mousedown',touchStart(index));
        slide.addEventListener('mouseup',touchEnd);
        slide.addEventListener('mouseleave',touchEnd);
        slide.addEventListener('mousemove',touchMove);
    })
    // Functions
    function touchStart(index) {
        return function (event) {
            currentIndex = index;
            startPos = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            isDragging  = true ;
            animationID = requestAnimationFrame(animation);
            sliderTesti.classList.add('grabbing')
        }
    }
    function touchEnd() {
        isDragging  = false ; 
        cancelAnimationFrame(animationID);
        const movedBy = currentTranslate - prevTranslate;
        if (movedBy < -100  && currentIndex < slideTesti.length - 1){
            currentIndex +=1;
        }  
        else if (movedBy > 100  && currentIndex > 0){
            currentIndex -=1;
        }   
        setPositionByIndex();
        sliderTesti.classList.remove('grabbing');
        slideTesti[1].classList.add('active')
    }
    function touchMove(event) {
        if (isDragging) {
            const currentPostion = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            currentTranslate = prevTranslate + currentPostion - startPos;
        }
    }
    function animation() { 
        setSliderPosition()
        if (isDragging) {
            requestAnimationFrame(animation)
        }   
    }
    function setSliderPosition() { 
        sliderTesti.style.transform = `translateX(${currentTranslate}px)`;
    }
    function setPositionByIndex() {
        currentTranslate = currentIndex * -(window.innerWidth);
        prevTranslate = currentTranslate;
        setSliderPosition()
    }
})