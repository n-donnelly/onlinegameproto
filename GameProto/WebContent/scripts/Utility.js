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

var imageLoader = {
    loaded:true,
    loadedImages:0,
    totalImages:0,
    load:function(url, func) {
        this.totalImages++;
        this.loaded = false;
        var image = new Image();
        image.src = url;
        image.onload = function(){
            imageLoader.loadedImages++;
            if(imageLoader.loadedImages === imageLoader.totalImages){
                imageLoader.loaded = true;
            }
            func(this);
        };
    }
};