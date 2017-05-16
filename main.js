//ajax call to Giphy
function giphyCall(answer, query) {
    var callUrl = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC";
    $.ajax({
            type: "GET",
            url: callUrl,
            dataType: "json",
            success: function (data) {
                var arraySelector = Math.floor(Math.random() * 25);
                var source = data.data[arraySelector].images.fixed_height.url;
                $('#answer').text(answer);
                $('#image').attr('src', source);
                $('#share').text('Want to SHARE this with friends?');
                $('#url').css('visibility', 'visible');
                $('#url').attr({readonly:true, type:'text', value:data.data[arraySelector].bitly_url});
                
            }
        })
};

//calling Giphy function when submit button is pressed
$("#submit").on('click', function () {
        //check if input is populated
        var question = $('#question').val().length;
        if (question > 0) {
            var num = Math.random() * 12;
            //response is "Yes!"
            if (num > 0 && num <=2){
                giphyCall("Yes!", "yes");
            //response is "Yes, absolutely!"
            } else if (num > 2 && num <=4) {
                giphyCall("Yes, absolutely!", "yes+absolutely");
            //response is "Sounds good to me!"
            } else if (num > 4 && num <= 6) {
                giphyCall("Sounds good to me!", "sounds+good");
            //response is "No"
            } else if (num > 6 && num <= 8) {
                giphyCall("No!", "no");
            //response is "No, defintely not!"
            } else if (num > 8 && num <= 10) {
                giphyCall("No, definitely not!", "definitely+not");
            //response is "Maybe..."
            } else if (num > 10 && num <= 12) {
                giphyCall("Maybe...", "maybe");
            }
        } else {
            $('#image').attr('src', '');
            $('#answer').text('Please ask a question!')
        }
})

//refresh button page
$("#refresh").on('click', function () {
    window.location.reload();
})