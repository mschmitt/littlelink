$(document).ready(function(){
	$('#gulp-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		buttons: { 
			"Got it!": function() { 
				$(this).dialog("close") 
			}
		}
	});
	$('#cv-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		buttons: { 
			"Got it!": function() { 
				$(this).dialog("close") 
			}
		}
	});
	$('.button-gulp').click(function(event){
		event.preventDefault();
		$('#gulp-dialog').dialog('open');
	});
	$('.button-cv').click(function(event){
		event.preventDefault();
		$('#cv-dialog').dialog('open');
	});
});
