/*
 * jquery.simple-lightbox
 * 
 * @author  Chris Jung <campino2k@gmail.com>
 * @license CC-BY-NC-SA
 * 
*/

(function($) {
	$.fn.simpleLightbox = function(options) {
		options = $.extend( {}, $.fn.simpleLightbox.defaults, options );
		return this.each( function(){
			$(this).click( function() {
				$this = $(this);
				$ovl = $('<div/>', {
					'id': 'simple-lightbox-overlay',
					'click': function(e){ 
						$(this).remove();
					},
					css: ({
						'height': $(document).height() + 'px'
					}),
				})
				$ovl.appendTo( 'body' );
				$(document).one( 'keydown',  function(e) { // add "self-destruct"-event	to close the lightbox
					if( e.which == 27 ) {
						$ovl.trigger('click');
					}
				})
				$pic = $( '<img />', {
					'src': $this.attr('href'),
					css: ({'display': 'none'}),
					'load': function(){
						$(this).appendTo( $ovl ).css({
							'top': ( ( $(window).height()/2) - ($pic.height() / 2) + $(document).scrollTop()  ) + "px",
							'left': ( ( $(window).width()/2) - ($pic.width() / 2)  ) + "px"
						}).fadeIn( options.fadeSpeed  )
					},
					'click': function(){
						$(this).parent().trigger('click');
					}
				});
				return false; // prevent link click event
			})
		})
	},
	$.fn.simpleLightbox.defaults = {
		fadeSpeed: 'slow'
	}
})(jQuery);
