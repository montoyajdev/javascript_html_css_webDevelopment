//jQuery is required to run this code
$( document ).ready(function() {
    
    /* Sticky Navigation */
    $('.js--section-services').waypoint(function(direction){
       if(direction == "up"){
           $('nav').removeClass('sticky');
       }else{
           $('nav').addClass('sticky');
       }
   },{
       offset: '60px;'
   });
    
    /* Navigation Scroll */
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
    
    /*Animations On Scroll */
    $('.js--wp-0').waypoint(function(direction){
       $('.js--wp-0').addClass('animated fadeInDown');
    },{
        offset:'50%'
    });
    
    $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset:'60%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeIn');
    },{
        offset:'50%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('fa-navicon')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-navicon');
        }else{
            icon.addClass('fa-navicon');
            icon.removeClass('fa-times');
        }
    });
  
    /*Instagram*/
    var userFeed = new Instafeed({
        get: 'user',
        userId: '5560878342',
        limit: 4,
        resolution:'standard_resolution',
        accessToken: '5560878342.1677ed0.c9bd8f2c299645f4b65cddd3543de1cc',
        sortBy:'most-recent',
        template: '<div class="col-lg-3 col-md-4 col-sm-6 instaimg img-responsive"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-responsive"/></a></div>'
    });
    userFeed.run();
    
    
});