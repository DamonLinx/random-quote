$(document).ready(function () {
    $('#getQuote').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
            type: "GET",
            dataType: "json",
            data: {
                format: "json"
            },
            success: function (result) {
                update(result[0].title, result[0].content);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            },
            cache: false
        })
    
    })

    function update(title, content) {
        $('#quote-title').html(title);
        $('#quote-content').html(content);
    }
})