$(document).ready(function() {
	// $('.datepicker').datepicker({
	// format : 'dd/mm/yyyy',
	// weekStart : 1
	// });

	var datepickers = $('.datepicker').datepicker({
		format : 'dd/mm/yyyy',
		weekStart : 1
	}).on('changeDate', function(ev) {
		$(this).datepicker('hide');
	});

	// $('.date').datepicker({
	// format : 'dd/mm/yyyy',
	// weekStart : 1
	// });

	// $('.wysihtml5').wysihtml5();

	// $('.combobox').combobox();

	//$(".select2").select2();
	$('.select2').each(function() {
		$(this).select2();
	});

//	$(".select2Multiple").select2({
//		multiple : true
//	});
	
	$('.select2Clear').each(function() {
		$(this).select2({
			 placeholder: "Seleziona",
			 allowClear: true
		});
	});	
	 
});