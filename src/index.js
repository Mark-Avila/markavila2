function toggleMobileNav() {
    let state = $("#mobile-nav").css('display');

    if (state === 'block'){
        state.css({"display: none"});
    }
}