class Physics2{
    /* Physics Properties */
    #speed;
    #gravity;
    #terminal;
    #velocityX;
    #velocityY;
    #friction;

    constructor(speed){
        this.#speed=speed;
        this.#gravity=0.0;
        this.#terminal=8;
        this.#velocityX=0.0;
        this.#velocityY=0.0;
        this.#friction=1.0;
    }

    applyGravity(){
        if(this.#velocityY<this.#terminal){
            this.#velocityY+=this.#gravity;
        }
    }

    update(blocks,fluxblocks,player){
        this.applyGravity();
        this.applyFriction();
        this.checkCollisions(blocks,player);
        this.checkCollisions(fluxblocks,player);
    }

    getVelocityX(){
        return this.#velocityX;
    }
    getVelocityY(){
        return this.#velocityY;
    }

    jump(){
        this.#velocityY= -this.#speed*2;
    }

    moveLeft(){
        if(this.#velocityX>-this.#speed){
            this.#velocityX--;
        }
    }
    moveRight(){
        if(this.#velocityX<this.#speed){
            this.#velocityX++;
        }
    }

    checkCollisions(blocks,player){
        for(let block of blocks){
            if(block.isTouching(player)){
                this.checkCollisionFloor(block,player);
                this.checkCollisionCeiling(block,player);
                this.checkCollisionLeft(block,player);
                this.checkCollisionRight(block,player);
            }
        }
    }

    checkCollisionFloor(block,player){
        if(player.getY()<block.getY() && this.#velocityY>0){ //player higher than block & falling
            if(block.isTouchingX(player,0.5)){ //no wall jump, i.e. player/block on same column
                this.#velocityY=0;
                player.isJumping(false);
            }
        }
    }
    checkCollisionCeiling(block,player){
        if(player.getY()>block.getY() && this.#velocityY<0){ //player lower than block & jumping
            this.#velocityY=0;
        }
    }
    checkCollisionRight(block,player){
        if(player.getX()<block.getX() && this.#velocityX>0){ //player left of block & moving right
            if(block.isTouchingY(player,0.5)){ //ensure player and block on same row
                this.#velocityX=0;
            }
        }
    }
    checkCollisionLeft(block,player){
        if(player.getX()>block.getX() && this.#velocityX<0){ //player right of block & moving left
            if(block.isTouchingY(player,0.5)){ //ensure player and block on same row
                this.#velocityX=0;
            }
        }
    }

    applyFriction(){
        this.#velocityX*=this.#friction;
    }
}