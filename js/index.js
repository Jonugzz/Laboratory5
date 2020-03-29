function watchForm(){
	$( '#add' ).on( 'submit', function( event ){
		event.preventDefault();
		
		let inp = $("input:text").val();
		if (inp == ""){
			$('#addError').text("Write an item name");
		}
		else {
			$('#addError').text("");
			$('#list').append(`<li class="taskItem" value=` + inp + `> 
										` + inp + 
										`<button type="submit" class="check">
											Check
										</button>
										<button type="submit" class="delete">
											Delete
										</button>
									</li>`);
			$("input:text").val("");
		}
	});
	
	$('#list').on('click', '.check', function(event){
		event.preventDefault();
		$(this).parent().toggleClass("lined");
	});
	
	function deleteItem(e, item) {
		e.preventDefault();
		$(item).parent().remove();
	}
	
	$('#list').on('click', '.delete', function(event){
		event.preventDefault();
		deleteItem(event,this);
	});
	
	
}

watchForm();