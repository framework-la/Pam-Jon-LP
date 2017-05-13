$("#submit").on('click', function (){
    $.ajax({
        type: "GET",
        url: "https://yesno.wtf/api",
        dataType: "json",
        success: function (data) {
            $('#answer').text(data.answer);
            $('#image').attr('src', data.image);
        }
    })
})