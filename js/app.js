$(document).ready(function() {
	//* listen
		$("#itemtyped").keyup(function(event) {
	event.preventDefault();
		if (event.which === 13) {
			$("#itemtyped").trigger(additem);
		}
});
	var additem = function () {
		var currentitem = $("#itemtyped").val();
		var newlistitem = $("<ul id="actuallist"><input type="checkbox">"+currentitem+"</ul>");
		$(".item").show();
		$(".item").append(newlistitem);
		$("#itemtyped").text(" ");
		$("input").val("");
};
});
	//* remove the list item
