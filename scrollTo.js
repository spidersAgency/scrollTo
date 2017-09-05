$('.scrollto').on( 'click', function(){
    var scroll_to = $(this).data( 'scroll-to' );
    var offset = $(this).data( 'offset' );
    var easing = $(this).data( 'easing' );

    if ( offset === undefined ) {
        offset = 0;
    }
    if ( easing === undefined ) {
        easing = 'swing';
    }

    var scrollTop = $( scroll_to ).offset().top - offset;

    if( offset !== undefined && scroll_to !== undefined && easing !== undefined ) {
        $( 'html,body' ).animate(
            {
                scrollTop: scrollTop 
            },
            easing
        );
    }
    
});