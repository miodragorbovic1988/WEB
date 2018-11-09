
$(function () {

    var $pitch = $('.pitch');
    var $player = $('img');
    var $stop = $('button');

    $pitch.on('click', move);

    $stop.on('click', stopMoving);

    function move(e) {

        $player.offset({
            top: e.clientY - $player.height() / 2,
            left: e.clientX - $player.width() / 2
        });
    }

    function stopMoving() {
        $pitch.off('click', move);
    }
});


