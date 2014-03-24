//listen for click/enter button
$(document).ready(function() {
	$("#in").focus();
	$("#add").on("click", function() {
		add_data();
	});

	$("#in").keypress(function(event){
		if(event.which === 13) {
			add_data();
		}
	});
//add the function add_data
function add_data()	{
	if($.trim($("#in").val()) =="") {
		alert("please type in an item");
		$("#in").val().focus();
	}
	else {
		$("#thelist").append("<li>"+$("#in").val()+"</li>");
		$("#in").val("");
		$("#in").focus();
	}
};