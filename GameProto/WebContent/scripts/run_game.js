var gameObjects = [];
var FPS = 60;

function gameInit(canvas) {
    var gameObject1 = new GameObject("fill_rect");
    var gameObject2 = new GameObject("fill_rect");
    gameObject1.createRect("rect1", "rect", 100, 100, 200, 100, "#f00");
    gameObject2.createRect("rect2", "rect", 220, 120, 200, 100, "#0f0");  
    gameObjects.push(gameObject1);
    gameObjects.push(gameObject2);
    
    var circle1 = new Circle("circle1", "circle1", 100, 400, 300, "#00f");
    gameObjects.push(circle1);
    
    var line1 = new Line("line1", "line1", 10, 10, 100, 100, 10, "#000");
    gameObjects.push(line1);
    
    var t = "SAMPLE TEXT";
    var text1 = new Text("text1", "text1", 100, 50, t, "30", "Arial", "#f0f");
    gameObjects.push(text1);
    
    context.scale(winWidth/canvasWidth, winHeight/canvasHeight);
    
    var image1;
    imageLoader.load("/GameProto/WebContent/TestImages/korra_sprite.png", function(im) {
        image1 = new protoImage("kI", "Korra", im, 0, 0, im.width*1.5, im.height*1.5);
        gameObjects.push(image1);
    });
    
    var anim1;
    imageLoader.load("/GameProto/WebContent/TestImages/NegaScot.png", function(anim) {
       anim1 = new protoAnim("ns1", "Nega Scott", anim, 0, 50, 43, 61, 9, 1, 8);
       gameObjects.push(anim1);
    });
    //gameObjects.push(image1);
    
    //setInterval(update(), 500);
    //setInterval(draw(context), 500);
    update();
    draw(context);
};

function update() {
    if(gameObjects.length > 0) {
        gameObjects.forEach(function(e){
            e.update();
        });
    }
    setTimeout(function(){
        update()
    }, 1000/FPS);
};

function draw(context) {
    context.clearRect(0,0,canvas.width, canvas.height);
    if(gameObjects.length > 0) {
        gameObjects.forEach(function(e) {
            e.draw(context);
        });
    }
    setTimeout(function(){
        draw(context)
    }, 1000/FPS);
};

function addObject(obj) {
    gameObjects.push(obj);
};

function removeObject(id) {
    gameObjects[id] = null;
};

function updateObject(id,obj) {
    gameObjects[id] = obj;
};