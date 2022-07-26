
$(window).scroll(function () {
    last = $("body").height() - $(window).height() - 9000
    if ($(window).scrollTop() >= last) {
        $("nav").hide()
    } else {
        $("nav").show()
    }
})








