var gameObjects = [];

function gameInit(canvas) {
    var gameObject1 = new GameObject("fill_rect");
    var gameObject2 = new GameObject("fill_rect");
    gameObject1.createRect("rect1", "rect", 100, 100, 100, 100, "#f00");
    gameObject2.createRect("rect2", "rect", 220, 120, 100, 100, "#0f0");  
    gameObjects.push(gameObject1);
    gameObjects.push(gameObject2);
    
    update();
    draw(context);
};

function update() {
    if(gameObjects.length > 0) {
        gameObjects.forEach(function(e){
            e.update();
        });
    }
        //setTimeout(update, 1000/60);
};

function draw(context) {
    context.clearRect(0,0,canvas.width, canvas.height);
    if(gameObjects.length > 0) {
        gameObjects.forEach(function(e) {
            e.draw(context);
        });
    }
    //setTimeout(draw(context), 1000/60);
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