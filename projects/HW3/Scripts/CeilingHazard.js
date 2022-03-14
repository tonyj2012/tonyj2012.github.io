class CeilingHazard extends Block{
    #test;
    
    constructor(x,y,z){
        switch(z){
            case "V": console.log("test");
        }
        super(x,y,"Assets/tile-spikes-ceiling.png");
    }

    isTouching(player){
        return super.isTouchingX(player,0.75) && this.isTouchingY(player);
    }

    isTouchingY(player){
        const topHalf=this.getY() <= (player.getY()+player.getHeight());
        const bottomHalf=player.getY() <= (this.getY()+this.getHeight()/2);
        return topHalf && bottomHalf;
    }
}