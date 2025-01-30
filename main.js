function toggleDetail(e) {
    const target = $(e.target)

    // $(target).html("Less info").addClass("active")

    if($(target).hasClass("active")) {
        $(target).html("More info").removeClass("active")
    } else {
        $(target).html("Les info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle() 
}