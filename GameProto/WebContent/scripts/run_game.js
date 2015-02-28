var objects = [];

function init(canvas) {
    
};

function update() {
    for(var o in objects){
        o.update();
    }    
};

function draw(context) {
    context.clearRect(0,0,canvas.width, canvas.height);
    for(var o in objects){
        o.draw(context);
    }
};

function addObject(obj) {
    objects.push(obj);
};

function removeObject(id) {
    objects[id] = null;
};

function updateObject(id,obj) {
    objects[id] = obj;
};