$(document).ready(function(){
	$('#deltachat-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
	});
	$('.button-deltachat').click(function(event){
		event.preventDefault();
		$('#deltachat-dialog').dialog('open');
	});
	$('#whatsapp-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 400,
	});
	$('.button-whatsapp').click(function(event){
		event.preventDefault();
		$('#whatsapp-dialog').dialog('open');
	});

});
