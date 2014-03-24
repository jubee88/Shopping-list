$(document).ready(function() {
	//* set variables
	var currentitem = $("#itemtyped").val();
	var newlistitem = $("<ul id="actuallist"><input type="checkbox">"+currentitem+"</ul>");
});
	//* listen for enter March 22
		//* append the item to the_list
	//* remove the list item
		$("#itemtyped").keyup(function(event){
		if (event.which===13){
			$(currentitem).appendTo("newlistitem");
		}
});
