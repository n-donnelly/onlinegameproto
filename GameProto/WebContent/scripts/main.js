var canvas = document.querySelector('canvas');
fitToContainer(canvas);
var context = canvas.getContext("2d");


$("#hor_resizer").draggable({
    axis: "y",
    drag: function() {
        
    }
});

$("#vert_resizer").draggable({
    axis: "x",
    drag: function() {
        $("#gameView").html("Dragged");
    }
});

fillCanvasTest();
gameInit(canvas);

function fitToContainer(canvas){
  // Make it visually fill the positioned parent
  canvas.style.width ='100%';
  canvas.style.height='100%';
  // ...then set the internal size to match
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function  fillCanvasTest() {
    context.fillRect(10, 10, 10,10);
}
