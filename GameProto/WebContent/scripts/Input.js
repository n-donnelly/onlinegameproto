function Input() {
    this.behaviours = [];
    this.numberOfSubscribedObjects = 0;

    this.initInput = function() {
        document.addEventListener("keyDown", this.keyDownListener, false);
        document.addEventListener("keyUp", this.keyUpListener, false);
    }
    
    this.keyDownListener = function(event) {
        var keyPressed = String.fromCharCode(event.keyCode);
        for(var obj in this.behaviours){
            if(this.behaviours.hasOwnProperty(obj)){
                obj.keyDownEvent(keyPressed);
            }
        }
    };
    
    this.keyUpListener = function(event) {
        var keyPressed = String.fromCharCode(event.keyCode);
        for(var obj in this.behaviours){
            if(this.behaviours.hasOwnProperty(obj)){
                obj.keyUpEvent(keyPressed);
            }
        }
    };
    
    this.subscribeObject = function(name, obj){
        this.behaviours[name] = obj;
        this.numberOfSubscribedObjects++;
    };
    
    this.unsubscribeObject = function(name){
        this.behaviours[name] = null;
        this.numberOfSubscribedObjects--;
    };
}