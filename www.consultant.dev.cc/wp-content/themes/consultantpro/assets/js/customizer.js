/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( to ) { 
				$( '.main-title h1, .main-title p' ).css( {
					'color': to,
				} );
			}
		} );
	} );

	// Header Image
	wp.customize( 'header_image', function( value ) {
		value.bind( function( to ) {
			if ( to ) { 
				$( '.mainmenu.scrol' ).css( {
					'background-image': ' url(' + to + ')',
				} );
			}
		} );
	} );

	// Background Image
	wp.customize( 'background_image', function( value ) {

		value.bind( function( to ) {
 
			if ( to ) { 
				$( '.rm' ).css( {
					'border-color': 'transparent',
					'background-color': 'transparent',
				} );
			} else {
				$( '.rm' ).css( {
					'border-color': 'inherit',
					'background-color': 'inherit',
				} );
			}
		} );
	} );

	// Background Color
	wp.customize( 'background_color', function( value ) {

		value.bind( function( to ) {
 
			if ( to != 'f9f9f9' ) { 
				$( '.rm' ).css( {
					'border-color': 'transparent',
					'background-color': 'transparent',
				} );
			} else {
				$( '.rm' ).css( {
					'border-color': 'inherit',
					'background-color': 'inherit',
				} );
			}
		} );
	} );

} )( jQuery );
