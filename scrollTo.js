import $ from 'jquery';
window.$ = $;
$('.scrollto').on( 'click', function( e ){
    e.preventDefault();

    // id, class or DOM element to scroll
    var scroll_to = $(this).data( 'scroll-to' );

    // offset
    var offset = $(this).data( 'offset' );

    // easing 
    var easing = $(this).data( 'easing' );

    // what is base of scroll - default is home, body
    var base = $(this).data( 'base' );

    // how long animaton takes
    var duration = $(this).data( 'duration' );

    if ( offset === undefined ) {
        offset = 0;
    }

    if ( easing === undefined ) {
        easing = 'swing';
    }

    if ( base === undefined ) {
        base = 'html, body';
    }

    if ( duration === undefined ) {
        duration = 400;
    }
    
    // check if element exists
    if ( $( scroll_to ).length ) {

        var scrollTop = $( scroll_to ).offset().top - offset;

        
        if( offset !== undefined && scroll_to !== undefined && easing !== undefined ) {
            $( base ).animate(
                {
                    'scrollTop': scrollTop 
                },
                duration,
                easing
            );
        }
    }
    
});