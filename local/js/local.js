$(document).ready(function(){
	$('#jshint').css('display', 'none');
	$('#mail').text(atob('bWFzQHNjc3kuZGU='));
	$('.button-mail').attr('href', atob('bWFpbHRvOm1hc0BzY3N5LmRlCg=='));
	$('#phone').text(atob('KzQ5LTY0MDMtOTY5MDg3OA=='));
	$('.button-phone').attr('href', atob('dGVsOjQ5LTY0MDMtOTY5MDg3OA=='));
	$('#gulp-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		buttons: { 
			"OK": function() { 
				$(this).dialog("close") 
			}
		}
	});
	$('#cv-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
		buttons: { 
			"OK": function() { 
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
