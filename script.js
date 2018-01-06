$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function () {
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
})

$("input").keypress(function (event) {
    if (event.which === 13) {
        var todo = $("input").val();
        $("input").val("");
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todo + "</li>");
    }
})
