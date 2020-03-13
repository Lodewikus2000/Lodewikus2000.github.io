// When the user scrolls the page, execute myFunction
window.onload=function() {

    setBarHeight();

    window.onresize= function() {setBarHeight();};


    function setBarHeight () {
        var h = document.getElementById('navbarbox').clientHeight;
        var bars = document.getElementsByClassName("boxbar");
        Array.prototype.forEach.call(bars, function(bar) {
            // Do stuff here
            bar.style.top = h + "px";

        });
    };
};
