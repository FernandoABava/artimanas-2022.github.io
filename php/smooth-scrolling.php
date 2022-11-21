<!DOCTYPE php>
add_filter( 'generate_smooth_scroll_elements', function( $elements ) {
                $elements[] = 'a[href*="#"]';
                
                return $elements;
                } );