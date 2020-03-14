// When the user scrolls the page, execute myFunction
window.onload=function() {

    setBarHeight();

    window.onresize= function() {setBarHeight();};


    function setBarHeight () {
        var h = document.getElementById('navbar').clientHeight;
        var bars = document.getElementsByClassName("header_box");
        Array.prototype.forEach.call(bars, function(bar) {
            // Do stuff here
            bar.style.top = h - 1 + "px";

        });
    };
};
