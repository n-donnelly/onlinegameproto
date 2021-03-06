function GameObject(type) {
    this.id = "";
    this.name;
    this.position = [];
    this.size = [];
    this.color = "#000";
    this.type = type;
    this.behaviours = [];
    
    this.draw = function(con){
        switch(type){
            case "fill_rect":
                con.fillStyle = this.color;
                con.fillRect(this.position['x'], 
                    this.position['y'],
                    this.size['width'],
                    this.size['height']);
                break;
            case "image":
                break;
            default:
                break;
        }
    }
    
    this.update = function() {
        for(var b in this.behaviours){
            b();
        }
    }
    
    this.getID = function() {
        return this.id;
    }
    
    this.getName = function() {
        return this.name;
    }
    
    this.getType = function() {
        return this.type;
    }
    
    this.createRect = function(id, name, x, y, w, h, color){
        this.id = id;
        this.name = name;
        this.position['x'] = x;
        this.position['y'] = y;
        this.size['width'] = w;
        this.size['height'] = h;
        this.color = color;
    }
    
    this.setPosition = function(x, y){
        this.position['x'] = x;
        this.position['y'] = y;
    }
    
    this.setSize = function(w, h){
        this.size['width'] = w;
        this.size['height'] = h;
    }
    
    this.getPosition = function() {
        return this.position;
    }
    
    this.getSize = function() {
        return this.size;
    }
    
    this.setColour = function(col) {
        this.colour = col;
    }
    
    this.getColour = function() {
        return this.colour;
    }
};

function Circle(id, name, radius, x, y, color) {
    this.gObj = new GameObject("Circle");
    this.gObj.name = name;
    this.gObj.id = id;
    this.radius = radius;
    this.gObj.position['x'] = x;
    this.gObj.position['y'] = y;
    this.gObj.color = color;
    
    this.draw = function(con){
        con.strokeStyle = color;
        con.fillStyle = color;
        con.beginPath();
        con.arc(this.gObj.position['x'], this.gObj.position['y'], this.radius, 0, 2*Math.PI, true);
        con.fill();
        con.stroke();
    }
    
    this.update = function() {
        this.gObj.update();
    }
    
    this.getName = function() {
        return this.gObj.getName();
    }
    
    this.getID = function() {
        return this.gObj.getID();
    }
    
    this.getRadius = function() {
        return this.radius;
    }
    
    this.setRadius = function(rad) {
        this.radius = rad;
    }
    
    this.getPosition = function() {
        return this.gObj.position;
    }
    
    this.setPosition = function(x, y) {
        this.gObj.setPosition(x,y);
    }
    
    this.setColour = function(col) {
        this.gObj.setColour(col);
    }
    
    this.getColour = function(){
        return this.gObj.getColour();
    }
}

function Line(id, name, x1, y1, x2, y2, width, color) {
    this.gObj = new GameObject("Circle");
    this.gObj.name = name;
    this.gObj.id = id;
    this.gObj.position['x1'] = x1;
    this.gObj.position['y1'] = y1;
    this.gObj.position['x2'] = x2;
    this.gObj.position['y2'] = y2;
    this.width = width;
    this.gObj.color = color;
    
    this.draw = function(con){
        con.strokeStyle = color;
        con.fillStyle = color;
        var lineWidth = con.lineWidth;
        con.beginPath();
        con.moveTo(this.gObj.position['x1'], this.gObj.position['y1']);
        con.lineTo(this.gObj.position['x2'], this.gObj.position['y2']);
        con.lineWidth = this.width;
        con.stroke();
    }
    
    this.update = function() {
        this.gObj.update();
    }
    
    this.getName = function() {
        return this.gObj.getName();
    }
    
    this.getID = function() {
        return this.gObj.getID();
    }
    
    this.getPositions = function() {
        return this.gObj.position;
    }
    
    this.setPositions = function(x1, y1, x2, y2) {
        this.gObj.position['x1'] = x1;
        this.gObj.position['y1'] = y1;
        this.gObj.position['x2'] = x2;
        this.gObj.position['y2'] = y2;
    }
    
    this.setColour = function(col) {
        this.gObj.setColour(col);
    }
    
    this.getColour = function(){
        return this.gObj.getColour();
    }
    
    this.getLineWidth = function(){
        return this.width;
    }
    
    this.setLineWidth = function(lineW){
        this.width = lineW;
    }
}

function Text(id, name, x, y, text, size, font, color) {
    this.gObj = new GameObject("Text");
    this.gObj.name = name;
    this.gObj.id = id;
    this.gObj.position['x'] = x;
    this.gObj.position['y'] = y;
    this.text = text;
    this.size = size;
    this.font = font;
    this.gObj.color = color;
    
    this.draw = function(con){
        con.strokeStyle = color;
        con.fillStyle = color;
        con.font = size + "px " + font;
        con.fillText(this.text, this.gObj.position['x'], this.gObj.position['y']);
    }
    
    this.update = function() {
        this.gObj.update();
    }
    
    this.getName = function() {
        return this.gObj.getName();
    }
    
    this.getID = function() {
        return this.gObj.getID();
    }
    
    this.getPositions = function() {
        return this.gObj.position;
    }
    
    this.setPositions = function(x1, y1) {
        this.gObj.position['x1'] = x1;
        this.gObj.position['y1'] = y1;
    }
    
    this.setColour = function(col) {
        this.gObj.setColour(col);
    }
    
    this.getColour = function(){
        return this.gObj.getColour();
    }
    
    this.getText = function(){
        return this.text;
    }
    
    this.setText = function(newText){
        this.text = newText;
    }
    
    this.getSize = function(){
        return this.size;
    }
    
    this.setSize = function(newSize){
        this.size = newSize;
    }
    
    this.getFont = function(){
        return this.font;
    }
    
    this.setText = function(newFont){
        this.font = newFont;
    }
}

function protoImage(id, name, Image, x, y, w, h) {
    this.gObj = new GameObject("Image");
    this.gObj.name = name;
    this.gObj.id = id;
    this.image = Image;
    this.isLoaded = false
    this.gObj.position['x'] = x;
    this.gObj.position['y'] = y;
    this.gObj.size['width'] = w;
    this.gObj.size['height'] = h;
    
    this.draw = function(con){
        con.drawImage(this.image, this.gObj.position['x'], this.gObj.position['y'], this.gObj.size['width'], this.gObj.size['height']);
    }
    
    this.update = function() {
        this.gObj.update();
    }
    
    this.getName = function() {
        return this.gObj.getName();
    }
    
    this.getID = function() {
        return this.gObj.getID();
    }
    
    this.getPosition = function() {
        return this.gObj.position;
    }
    
    this.setPosition = function(x, y) {
        this.gObj.setPosition(x,y);
    }
    
    this.getImage = function() {
        return this.image;
    }
    
    this.setSize = function(w,h) {
        this.gObj.setSize(w,h);
    }
    
    this.getSize = function() {
        return this.gObj.getSize();
    }
}

function protoAnim(id, name, Image, x, y, w, h, numImages, rows, speed){
    this.gObj = new GameObject("Sprite");
    this.gObj.name = name;
    this.gObj.id = id;
    this.image = Image;
    this.rows = rows;
    this.numImages = numImages;
    this.lastTime = 0;
    this.pauseTime = 0;
    this.paused = false;
    this.speed = speed;
    this.gObj.position['x'] = x;
    this.gObj.position['y'] = y;
    this.gObj.size['width'] = w;
    this.gObj.size['height'] = h;
    
    function frame(id, fX, fY, fW, fH){
        this.id = id;
        this.x = fX;
        this.y = fY;
        this.w = fW;
        this.h = fH;
        
        this.draw = function(context, image, iX, iY){
            context.drawImage(image, this.x, this.y, this.w, this.h, iX, iY, this.w, this.h);
        }
    }
    
    this.frames = [];
    var i = 0;
    var tX = 0;
    var tY = 0;
    for(i = 0; i < numImages; i++){
        this.frames[i] = new frame(i, tX, tY, w, h)
        
        if(tX + this.gObj.size['width'] < this.image.width){
            tX = tX + this.gObj.size['width'];
        } else {
            if(tY + this.gObj.size['height'] < this.image.height && rows > (this.image.height/this.gObj.size['height'])){
                tY = tY + this.gObj.size['height'];
            }
        }
    }
    this.frameIndex = 0;
    
    this.getNextFrame = function(){
        this.frameIndex = (this.frameIndex+1)%numImages;
    }
    
    this.draw = function(con){
        if(!this.paused){
            this.frames[this.frameIndex].draw(con, this.image, this.gObj.position['x'], this.gObj.position['y']);
        }
    }
    
    this.update = function() {
        this.lastTime = Date.now();
        
        this.update = function(){
            var currentTime = Date.now();
            if(this.paused){
                var delta = currentTime - this.pauseTime;
                this.lastTime = this.lastTime + delta;
                this.pauseTime = currentTime;
            } else {
                var delta = currentTime - this.lastTime;
                if(delta > 1000/speed){
                    this.lastTime = currentTime;
                    this.getNextFrame();
                }
            }
        }
    }
    
    this.pause = function() {
        this.paused = true;
        this.pauseTime = Date.now();
    }
    
    this.play = function() {
        this.paused = false;
        this.pauseTime = 0;
    }
    
    this.reset = function() {
        this.frameIndex = 0;
        this.lastTime = Date.now();
    }
    
    this.getName = function() {
        return this.gObj.getName();
    }
    
    this.getID = function() {
        return this.gObj.getID();
    }
    
    this.getPosition = function() {
        return this.gObj.position;
    }
    
    this.setPosition = function(x, y) {
        this.gObj.setPosition(x,y);
    }
    
    this.getImage = function() {
        return this.image;
    }
    
    this.setSize = function(w,h) {
        this.gObj.setSize(w,h);
    }
    
    this.getSize = function() {
        return this.gObj.getSize();
    }
}