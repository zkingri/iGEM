function slideshow(data) {
    let interval = 3000;
    let length = data.length;
    for (let i = 0; i < length; i++) {
        $('#box_img ul').append('<li><a href="'+data[i].src+'" target="_blank"><img src="' + data[i].src + '"></a>');
        $('#word ul').append("<li><h4>" + data[i].title + "</h4></li>");
    }
    let active = 0;

    $('#box_img ul li').eq(0).show();
    $('#word ul li').eq(0).show();

    function move(forward) {
        if (forward === true) {
            active++;
            if (active === length)
                active = 0;
        }
        else {
            active--;
            if (active === -1)
                active = length - 1;
        }
        $('#box_img ul li').eq(active).fadeIn(300).siblings().fadeOut(300);
        $('#word ul li').eq(active).fadeIn(300).siblings().fadeOut(300);
    }

    document.getElementById('forward').onclick = function () {
        move(true);
    };
    document.getElementById('backward').onclick = function () {
        move(false);
    };

    let si = setInterval(move, interval);
    $('#box').hover(function () {
        clearInterval(si);
    }, function () {
        si = setInterval(move, interval, true);
    });
}