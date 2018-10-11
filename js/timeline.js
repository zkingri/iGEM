let elem = $('.time');
let tree = document.createElement("ul");
let node = undefined;
let time=[
    "20 July ~ 30 July",
    "23 Aug",
    "25 Aug",
    "30 Aug ~ 2 Sept",
    "8 Sept ~ 10 Sept",
    "12 Sept",
    "15 Sept",
    "19 Sept",
    "26 Sept ~ 27 Sept"
];
for (let i = 0; i < elem.length; ++i) {
    node = document.createElement("li");
    node.innerHTML = time[i];
    tree.appendChild(node);
    elem[i].setAttribute("id", "time" + i);
}
elem = tree.childNodes;
for (let i = 0; i < elem.length; ++i) {
    elem[i].onclick = function () {
        for (let j = 0; j < elem.length; ++j)
            elem[j].classList.remove("active");
        elem[i].classList.add("active");
        $('html,body').animate({scrollTop: $('#time' + i).offset().top - 45}, 500);
    };
}
document.getElementById("contents").appendChild(tree);
function contentsAnchor() {
    let p = $(document).scrollTop() + 45;
    if (p < $('#time0').offset().top)
        for (let j = 0; j < elem.length; ++j)
            elem[j].classList.remove("active");
    else
        for (let i = 0; i < elem.length; ++i) {
            if (i < elem.length - 1 && $('#time' + i).offset().top - 1 <= p && p < $('#time' + (i + 1)).offset().top - 1) {
                for (let j = 0; j < elem.length; ++j)
                    elem[j].classList.remove("active");
                elem[i].classList.add("active");
                break;
            }
            else {
                for (let j = 0; j < elem.length - 1; ++j)
                    elem[j].classList.remove("active");
                elem[elem.length - 1].classList.add("active");
            }
        }
}

function layout() {
    if ($(window).width() < 800) {
        document.getElementById('contents').style.display = "none";
        document.getElementById("mainBody").style.width = "auto";
        document.getElementById("article").style.width = "auto";
        document.getElementById("mainBody").style.marginLeft = "20px";
        document.getElementById("mainBody").style.marginRight = "20px";
    }
    else if (800 <= $(window).width() && $(window).width() < 1000) {
        document.getElementById("contents").style.display = "block";
        document.getElementById("mainBody").style.width = "800px";
        document.getElementById("contents").style.width = "250px";
        document.getElementById("article").style.width = "550px";
        document.getElementById("mainBody").style.marginLeft = "auto";
        document.getElementById("mainBody").style.marginRight = "auto";
    }
    else {
        document.getElementById("contents").style.display = "block";
        document.getElementById("mainBody").style.width = ($(window).width()-200)+"px";
        document.getElementById("contents").style.width = "250px";
        document.getElementById("article").style.width="auto";
        document.getElementById("mainBody").style.marginLeft = "100px";
        document.getElementById("mainBody").style.marginRight = "100px";
    }
}

$(document).ready(function () {
    layout();
});
window.onresize = function () {
    layout();
};