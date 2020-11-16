window.addEventListener("load",function() {
    var blueSquares = document.querySelectorAll('.blue');
    
    blueSquares.forEach(function(blue) {
        //do something with the individual dark blue square
        blue.addEventListener('mouseover', onHoverOverWalls);
    });

    function onHoverOverWalls(.blue) {
        //what you want to happen when someone hits the walls
    }

})