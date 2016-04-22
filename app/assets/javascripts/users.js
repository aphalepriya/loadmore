// when the page is ready for manipulation
var myFuncCalls = 1;

$(document).ready(function(){
    
	// when the load more link is clicked
	$('a.button').click(function(e){
        setInterval(function(){
		// prevent the default click action
		e.preventDefault();
        
        // hide load more link
        $('.button').hide();

		// get the last id and save it in a variable 'last-id'
        var last_id = $('.record').last().attr('data-id');

        // make an ajax call passing along our last user id
        $.ajax({

        	// make a get request to the server
            type: "GET",
            // get the url from the href attribute of our link
            url: $(this).attr('href'),
            // send the last id to our rails app
            data: { id: last_id },
            // the response will be a script
            dataType: "script",

            // upon success 
        });
    },1000);
	});
     
});
