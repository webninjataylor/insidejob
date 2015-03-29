// Global variable object namespace
var wnt = {};



// Load Check
$(function(){
	$(".icon").tipTip();
	
	$('#tabs').tabs();
	$('article').draggable();
	$('article.snap').draggable({revert: 'invalid'});
	$('#selectable').selectable();
	$('#sortable').sortable();
	$('#sortable').disableSelection();
	$('#accordion').accordion();
});