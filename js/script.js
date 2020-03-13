// When the user scrolls the page, execute myFunction
window.onload=function() {




    var h = document.getElementById('navbarbox').offsetHeight;
    var bars = document.getElementsByClassName("boxbar");
    console.log(bars);

    Array.prototype.forEach.call(bars, function(bar) {
    // Do stuff here
    console.log(h);
    bar.style.top = h - 2 + "px";
    console.log(bar);
    });

}
