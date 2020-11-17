window.addEventListener("load", function () {

    var tag = false;

    var blueSquares = document.querySelectorAll('.blue');

    blueSquares.forEach(function (blue) {
        
        blue.addEventListener('mouseover', onHoverOverWalls);
    });

    function onHoverOverWalls(.blue) {
        //what you want to happen when someone hits the walls
    }

});