window.addEventListener("load", function () {

    var tag = false;

    var blueSquares = document.querySelectorAll('.blue');

    blueSquares.forEach(function (blue) {
        
        blue.addEventListener('mouseover', onHoverOverWalls);
    });

    function onHoverOverWalls(blue) {
        if (!tag) {
            alert('Do not hit the walls!');
            tag = true;
        }
        
    }
    var yellowSquares = document.querySelectorAll('.finish');

    yellowSquares.forEach(function (yellow) {
        
        yellow.addEventListener('mouseover', onHoverOver);
    });

    function onHoverOver(yellow) {
        alert('You won!')
        
    }

});