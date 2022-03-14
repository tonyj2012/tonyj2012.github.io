class IceBlock extends Block{
    constructor(x,y){
        super(x,y,"Assets/tile-ice.png");
    }
    
    isTouching(player){
        return super.isTouchingX(player,0.75) && super.isTouchingY(player,0.75);
    }
}