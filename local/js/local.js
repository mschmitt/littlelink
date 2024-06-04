$(document).ready(function(){
	$('#whatsapp-dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 300,
	});
	$('.button-whatsapp').click(function(event){
		event.preventDefault();
		$('#whatsapp-dialog').dialog('open');
	});

});
