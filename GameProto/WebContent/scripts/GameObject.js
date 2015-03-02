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

function Behaviour() {
    this.type = "auto";
    this.name = "";
    this.relatedObjects = [];
    this.run = function(){
        
    }
};