jQuery(document).ready(function(){

        
	        if( $('.cd-stretchy-nav').length > 0 ) {
		        var stretchyNavs = $('.cd-stretchy-nav');
		
		            stretchyNavs.each(function(){
			                    var stretchyNav = $(this),
                        stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
                 if($(window).width() > 514){   
                    stretchyNavTrigger.on('click', function(event){
                        event.preventDefault();
                        stretchyNav.toggleClass('nav-is-visible');
                    });

                }
                else{
                    $('#anchormenu').addClass('inactiveLink');
                }

                });

                $(document).on('click', function(event){
                    ( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
	        	});
             }
           
});

$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });

        $('.animate-type').animatedHeadline({
            animationType: 'type'
        });

        $('.animate-rotate-2').animatedHeadline({
            animationType: 'rotate-2'
        });

        $('.animate-loading-bar').animatedHeadline({
            animationType: 'loading-bar'
        });

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });

        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });

        $('.animate-zoom').animatedHeadline({
            animationType: 'zoom'
        });

        $('.animate-rotate-3').animatedHeadline({
            animationType: 'rotate-3'
        });

        $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });
    });