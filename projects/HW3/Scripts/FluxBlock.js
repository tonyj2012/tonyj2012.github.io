class FluxBlock extends Block{
    constructor(x,y,image){
        super(x,y,image);
    }

    isTouchingX(gameObject,ratio){
        if(game.getLevel() >= badges){
            return super.isTouchingX(gameObject,ratio);
        }
        else{
            return super.isTouchingX(gameObject,0.0);
        }
    }
    isTouchingY(gameObject,ratio){
        if(game.getLevel() >= badges){
            return super.isTouchingY(gameObject,ratio);
        }
        else{
            return super.isTouchingY(gameObject,0.0);
        }
    }
    isTouching(gameObject){
        if(game.getLevel() >= badges){
            return super.isTouching(gameObject);
        }
        else{
            return super.isTouching(gameObject);
        }
    }
}