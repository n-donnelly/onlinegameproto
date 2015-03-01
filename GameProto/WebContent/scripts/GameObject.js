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
            case "circle":
                con.fillStyle = this.color;
                con.arc(this.position['x'], this.position['y'], this.size['rad'], 0, 2*Math.PI, true);
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

function Behaviour() {
    this.type = "auto";
    this.name = "";
    this.relatedObjects = [];
    this.run = function(){
        
    }
};