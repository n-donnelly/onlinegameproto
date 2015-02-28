function Object(type) {
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
};

function Behaviour() {
    this.type = "auto";
    this.name = "";
    this.relatedObjects = [];
    this.run = function(){
        
    }
}