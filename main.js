$("#submit").on('click', function (){
    var num = Math.random() * 12;
    //response is "Yes!""
    if (num > 0 && num <=2) {
        $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=yes&api_key=dc6zaTOxFJmzC",
        dataType: "json",
        success: function (data) {
            var arraySelector = Math.floor(Math.random() * 25);
            var source = data.data[arraySelector].images.fixed_height.url;
            $('#answer').text('Yes!');
            $('#image').attr('src', source);
        }
    })
    //response is "Yes, absolutely!""
    } else if (num > 2 && num <=4) {
        $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=yes+absolutely&api_key=dc6zaTOxFJmzC",
        dataType: "json",
        success: function (data) {
            var arraySelector = Math.floor(Math.random() * 25);
            var source = data.data[arraySelector].images.fixed_height.url;
            $('#answer').text('Yes, absolutely!');
            $('#image').attr('src', source);
        }
    })
    //response is "Sounds good to me!"
    } else if (num > 4 && num <= 6) {
        $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=sounds+good&api_key=dc6zaTOxFJmzC",
        dataType: "json",
        success: function (data) {
            var arraySelector = Math.floor(Math.random() * 25);
            var source = data.data[arraySelector].images.fixed_height.url;
            $('#answer').text('Sounds good to me!');
            $('#image').attr('src', source);
        }
    })
    //response is "No"
    } else if (num > 6 && num <= 8) {
        $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=no&api_key=dc6zaTOxFJmzC",
        dataType: "json",
        success: function (data) {
            var arraySelector = Math.floor(Math.random() * 25);
            var source = data.data[arraySelector].images.fixed_height.url;
            $('#answer').text('No!');
            $('#image').attr('src', source);
        }
    })
    //response is "No, defintely not!"
    } else if (num > 8 && num <= 10) {
        $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=definitely+not&api_key=dc6zaTOxFJmzC",
        dataType: "json",
        success: function (data) {
            var arraySelector = Math.floor(Math.random() * 25);
            var source = data.data[arraySelector].images.fixed_height.url;
            $('#answer').text('No, definitely not!');
            $('#image').attr('src', source);
        }
    })
    //response is "Maybe..."
    } else if (num > 10 && num <= 12) {
        $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/search?q=maybe&api_key=dc6zaTOxFJmzC",
        dataType: "json",
        success: function (data) {
            var arraySelector = Math.floor(Math.random() * 25);
            var source = data.data[arraySelector].images.fixed_height.url;
            $('#answer').text("Maybe...");
            $('#image').attr('src', source);
        }
    })
    }
})