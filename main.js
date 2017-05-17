//save original window size
var width = $('#response').width();
var height = $('#response').height();

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
            $('#response').css({'width': '400px', 'height': '250px', 'display': 'block'});
            $('#form').css('display', 'flex');
            $('#image').attr('src', source);
            $('#share').text('Want to SHARE this with friends?');
            $('#form').css('visibility', 'visible');
            $('#url').css('visibility', 'visible');
            $('#copy').css('display', 'block');
            $('#url').attr({readonly:true, type:'text', value:data.data[arraySelector].bitly_url});
            $("#copy").on('click', function (event) {
                event.preventDefault();
                $('#url').select();
                document.execCommand("copy");
            });
        }
    })
};
//calling Giphy function when submit or enter button is pressed
function runGiphy () {
        //check if input is populated and ends with question mark
        var question = $('#question').val().length;
        var isInput = $('#question').val();
        var inputArr = isInput.split('').reverse();
        if (question > 0 && inputArr[0] === '?') {
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
            $('#answer').text('Please ask a question!');
            $('#share').css('display', 'none');
            $('#form').css('display', 'none');
            $('#copy').css('display', 'none');
            $('#response').css({'width': width, 'height': height});
        }
};
//event listeners
$("#submit").on('click', runGiphy);
$("#question").on('keypress', function (key) {
    if (key.keyCode === 13) {
        runGiphy();
    }
});
//refresh page button
$("#refresh").on('click', function () {
    window.location.reload();
});