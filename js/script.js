// When the user scrolls the page, execute myFunction
window.onload=function() {

    setBarHeight();

    window.onresize= function() {setBarHeight();};


    function setBarHeight () {
        var h = document.getElementById('navbar').clientHeight;
        var bars = document.getElementsByClassName("header_box");
        Array.prototype.forEach.call(bars, function(bar) {

            bar.style.top = h - 1 + "px";

        });
    };


    // const title_box = document.getElementById('title_box');
    //
    // title_box.onmouseover = function() {
    //     title_box.style.animation ="headerHover 0.5s linear, headerHover2 0.25s linear 0.5s";
    // }



};
