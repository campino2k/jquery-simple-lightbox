$("a[href$='png']:has(img), a[href$='jpg']:has(img), a[href$='gif']:has(img)").click(
	function(e) {
		$this = $(this);
		var pic = $('<img />', {
			'src': $this.attr('href'),
			click: function(){
				$(this).parent().trigger('click'); //fadeOut();
			}
		});
/*
		pic.css({display:'none'}).appendTo('body');
                tried = 0;
                picH = 0; picW = 0;
                while( ( picH == 0 || picW == 0 ) && tried < 30 ) {
                    window.setTimeOut("", 200)
                    picH = pic.height();
                    picW = pic.width();
                    tried++;
                    console.log(tried)
                }
*/
		var xOvl = $('<div/>', {
				'click': function(e){ $(this).remove()},
				'id': 'simple-gallery-overly'
		})
		xOvl.css({
// usually, one would use this: but this causes errors in IE, so please style this via css				
					'backgroundColor': 'rgba(0,0,0,0.8)',
//					'backgroundColor': '#000',
 
				'position': 'absolute',
				'margin': '0px',
				'padding': '0px',
				'top': '0px',
				'bottom': '0px',
				'left': '0px',
				'right': '0px',
				'height': $(document).height() + 'px'
		});
		xOvl.appendTo( 'body' );
		pic.appendTo( xOvl ).css({
				'position': 'absolute',
				'top': ( ( $(window).height()/2) - (pic.height() / 2) + $(document).scrollTop()  ) + "px",
				'left': ( ( $(window).width()/2) - (pic.width() / 2)  ) + "px",
				'border': '5px solid #9BBDDE',
				'zIndex': '9999'
			}).fadeIn('slow').css({
				'top': ( ( $(window).height()/2) - (pic.height() / 2) + $(document).scrollTop()  ) + "px",
				'left': ( ( $(window).width()/2) - (pic.width() / 2)  ) + "px",
			})
	return false;
	}
)