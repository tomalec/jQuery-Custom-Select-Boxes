/*global jQuery: false */

(function ($) {
	'use strict';
	$.fn.extend({
		customSelect: function () {
			if (!$.browser.msie || ($.browser.msie && $.browser.version >= 6)) {
				return this.each(function () {
					$(this).after('<span class="customSelectBox"><span class="customSelectBoxInner">' + $(this).find(':selected').text() + '</span></span>').css({
						fontSize: $(this).next().css('font-size')
					}).addClass("transformed");
					var selectBoxSpan = $(this).next(),
						selectBoxWidth = parseInt($(this).width(), 10) - parseInt(selectBoxSpan.css('padding-left'), 10) - parseInt(selectBoxSpan.css('padding-right'), 10),
						selectBoxSpanInner = selectBoxSpan.find(':first-child'),
						selectBoxHeight = parseInt(selectBoxSpan.height(), 10) + parseInt(selectBoxSpan.css('padding-top'), 10) + parseInt(selectBoxSpan.css('padding-bottom'), 10);
					selectBoxSpan.css({
						display: 'inline-block'
					});
					selectBoxSpanInner.css({
						width: selectBoxWidth,
						display: 'inline-block'
					});
					$(this).height(selectBoxHeight).change(function () {
						selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
					});
				});
			}
		}
	});
}(jQuery));

// Tested with: Safari 5.1, Chrome 17, FF 10,
