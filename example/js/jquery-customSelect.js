(function($) {
	$.fn.extend({
		customSelect: function(options) {
			if (!$.browser.msie || ($.browser.msie && $.browser.msie.version <= 6)) {
				return this.each(function() {
					$(this).after('<span class="customSelectBox"><span class="customSelectBoxInner">' + $(this).find(':selected').text() + '</span></span>').css({
						fontSize: $(this).next().css('font-size')
					}).addClass("transformed");
					var selectBoxSpan = $(this).next(),
						selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) - parseInt(selectBoxSpan.css('padding-right')),
						selectBoxSpanInner = selectBoxSpan.find(':first-child'),
						selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
					selectBoxSpan.css({
						display: 'inline-block'
					});
					selectBoxSpanInner.css({
						width: selectBoxWidth,
						display: 'inline-block'
					});
					$(this).height(selectBoxHeight).change(function() {
						// selectBoxSpanInner.text($(this).val()).parent().addClass('changed');   This was not ideal
						selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
						// Thanks to Juarez Filho & PaddyMurphy
					});
				});
			}
		}
	});
})(jQuery);

// Tested with: Safari 5.1, Chrome 17, FF 10,
