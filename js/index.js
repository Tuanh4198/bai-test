$(document).ready(function() {
	$(".autoplay").each(function() {
		$(this).slick($(this).data());
	});

	$('input[type="file"]').each(function() {
		var label = $(this).parents('.form-group').find('label').text();
		label = (label) ? label : 'Upload File';

		$(this).wrap('<div class="input-file"></div>');
		$(this).before('<span class="btn">'+label+'</span>');
	
		$(this).change(function(e){
			var val = $(this).val();
			var filename = val.replace(/^.*[\\\/]/, '');
			$(this).siblings('.btn').text(filename);
		});
	});
	
	$('.input-file .btn').click(function() {
		$(this).siblings('input[type="file"]').trigger('click');
	});
});