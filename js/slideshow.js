$(document).ready(function () {
    let interval = 3000;
    let slideshow = [
        {
            "src": "http://2018.igem.org/wiki/images/2/29/T--DLUT_China_B--logo.png",
            "title": "DLUT China B Logo",
            "description": "DLUT China B Logo",
            "link": "#"
        },
        {
            "src": "http://2018.igem.org/wiki/images/9/96/T--DLUT_China_B--laboratory.jpg",
            "title": "Laboratory",
            "description": "Laboratory.",
            "link": "#"
        },
        {
            "src": "http://2018.igem.org/wiki/images/b/b6/T--DLUT_China_B--Clean_Bench.jpg",
            "title": "Clean Bench",
            "description": "Clean Bench.",
            "link": "#"
        }
    ];
    let length = slideshow.length;
    for (let i = 0; i < length; i++) {
        // $('#box_tab').append('<a href="javascript:(void)">' + (i+1) + '</a>');
        $('#box_img ul').append('<li><a href="' + slideshow[i].link + '"><img src="' + slideshow[i].src + '"></a>');
        $('#word ul').append("<li><h4>" + slideshow[i].title + "</h4><p>" + slideshow[i].description + "</p></li>");
    }
    let active = 0;

    $('#box_img ul li').eq(0).show();
    $('#word ul li').eq(0).show();
    // $('#box_tab a').eq(0).addClass('active');
    // $('#box_tab a').mouseover(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    //     let index = $(this).index();
    //     active = index;
    //     $('#box_img ul li').eq(index).fadeIn(300).siblings().fadeOut(300);
    //     $('#item ul li').eq(index).fadeIn(300).siblings().fadeOut(300);
    // });

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
        // $('#box_tab a').eq(active).addClass('active').siblings().removeClass('active');
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
});