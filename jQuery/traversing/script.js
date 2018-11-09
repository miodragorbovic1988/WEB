$(function () {

    function removeRedBorder() {
        // $('.selected').removeClass('selected');
        // $('img').find('.selected').removeClass('selected');
        $('.selected')
            .removeClass('selected')
            .parent()
            .next()
            .children()
            .eq(1)
            .addClass('selected');
    }

    removeRedBorder();
});