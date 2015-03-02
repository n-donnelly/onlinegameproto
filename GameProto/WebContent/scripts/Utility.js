var winWidth = 800;
var winHeight = 600;
var canvasWidth = $("#canvas").width;
var canvasHeight = $("#canvas").height;

function getRealX(w) {
    return (w/winWidth)*canvasWidth;
}

function getRealY(h) {
    return (h/winHeight)*canvasHeight;
}