// Window Ready 
$(()=>{
    let $downIcon = $('i.downIcon');
    $downIcon.click(function(){
        $(this).fadeOut(400).fadeIn(500);
        $('html').animate({
            scrollTop: $('section#features').offset().top
        },400);
    });
    let $myButtonWork = $('#ourWork .showMore');
    $myButtonWork.click(function(e){
        $('#ourWork .hidden').slideDown(500);
        $(this).addClass('SID');
    });
    $('#ourWork .imageBox').mouseenter(function(e){
        console.log();
        $(e.target).siblings('.over').fadeIn(400);
    });
    $('#ourWork .imageBox').mouseleave(function(e){
        console.log();
        $(this).find('.over').fadeOut(300);
    });
    // Slider
    let $nextIcon = $('#Testimonials .nextIcon'),
    $prevIcon = $('#Testimonials .prevIcon');
    function sliderFunc () {
        $('section#Testimonials .Box .boxItem:first-child').hasClass('Active') ? $prevIcon.fadeOut(100) : $prevIcon.fadeIn(100);
        $('section#Testimonials .Box .boxItem:last-child').hasClass('Active') ? $nextIcon.fadeOut(100) : $nextIcon.fadeIn(100);
        $nextIcon.click(function () {
            $('section#Testimonials .boxItem.Active').fadeOut(400,function(){
                $(this).removeClass('Active').next().fadeIn(600).addClass('Active');
                sliderFunc();
            })
        });
        $prevIcon.click(function () { 
            $('section#Testimonials .boxItem.Active').fadeOut(400,function(){
                $(this).removeClass('Active').prev().fadeIn(600).addClass('Active');
                sliderFunc();
            })
        });
    };
    sliderFunc();
})