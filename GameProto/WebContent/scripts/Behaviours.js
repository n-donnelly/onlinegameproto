function Behaviour() {
    this.type = "auto";
    this.name = "";
    this.numberOfBehaviourObjects = 0;
    this.relatedObjects = [];
    this.run = function(){
        
    }
    
    this.addObjectToBehaviour = function(name, obj){
        this.relatedObjects[name] = obj;
        this.numberOfBehaviourObjects++;
    }
    
    this.removeObjectToBehaviour = function(name){
        this.relatedObjects[name] = null;
        this.numberOfBehaviourObjects--;
    }
};

function TwoDMove(runFunc, inp) {
    this.behav = new Behaviour();
    this.behav.type = "move";
    this.behav.name = "2D Move";
    this.behav.run = runFunc;
    this.rightPressed = false;
    this.leftPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    
    inp.subscribeObject(this);
    
    this.keyDownEvent = function(key){
        switch(key){
            case "A":
                this.leftPressed = true;
                break;
            case "D":
                this.rightPressed = true;
                break;
            default:
                break;
        }
    }
    
    this.keyUpEvent = function(key){
        switch(key){
            case "W":
                this.upPressed = true;
                break;
            case "D":
                this.downPressed = true;
                break;
            default:
                break;
        }
    }
}