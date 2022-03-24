class Controller{
    /* Controller Properties */
    #player;
    #inputs;

    constructor(player){
        this.#player=player;
        this.#inputs=new Set();
        document.addEventListener("keydown",this.buttonDown);
        document.addEventListener("keyup",this.buttonUp);
    }

    buttonDown=function(event){
        const inputs=this.#inputs;
        switch(event.keyCode){
            case 37: inputs.add("left"); break;
            case 65: inputs.add("left"); break;
            case 38: inputs.add("up"); break;
            case 87: inputs.add("up"); break;
            case 39: inputs.add("right"); break;
            case 68: inputs.add("right"); break;
            case 40: inputs.add("down"); break;
            case 83: inputs.add("down"); break;
        }
    }.bind(this)
    buttonUp=function(event){
        const inputs=this.#inputs;
        switch(event.keyCode){
            case 37: inputs.delete("left"); break;
            case 65: inputs.delete("left"); break;
            case 38: inputs.delete("up"); break;
            case 87: inputs.delete("up"); break;
            case 39: inputs.delete("right"); break;
            case 68: inputs.delete("right"); break;
            case 40: inputs.delete("down"); break;
            case 83: inputs.delete("down"); break;
        }
    }.bind(this)

    update(){
        const inputs=this.#inputs;
        if(inputs.has("up")){
            this.#player.jump();
        }
        if(inputs.has("left")){
            this.#player.moveLeft();
        }
        if(inputs.has("right")){
            this.#player.moveRight();
        }
        if(inputs.has("down")){
            this.#player.moveDown();
        }
    }
}