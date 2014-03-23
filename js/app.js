$(document).ready(function() {
	//* listen for enter
		//* append the item to the_list
	$("itemtyped").keyup(function(event){
		if (event.which===13){
			$(currentitem).appendTo("#actuallist");
		}
});
	var currentitem = $("#itemtyped").val();
});
	//* remove the list item
