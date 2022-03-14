class Physics{
    /* Physics Properties */
    #speed;
    #gravity;
    #terminal;
    #velocityX;
    #velocityY;
    #friction;
    #ice;

    constructor(speed){
        this.#speed=speed;
        if(g > 0){
            this.#gravity=g;
        }
        else{
            this.#gravity=0.3;
        }
        if(s > 0){
            this.#terminal=2*s;
        }
        else{
            this.#terminal=2*speed;
        }
        this.#velocityX=0.0;
        this.#velocityY=0.0;
        if(f > 0){
            this.#friction=f;
        }
        else{
            this.#friction=0.8;
        }
        this.#ice=1;
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
        if(level !== iceworld){
            this.#velocityY= -this.#speed*2;
        }
        else{
            this.#velocityY=-this.#speed;
        }
    }

    moveLeft(){
        if(level !== iceworld){
            if(this.#velocityX>-this.#speed){
                this.#velocityX-=this.#speed/4;
            }
        }
        else{
            this.#velocityX=-this.#speed;
        }
    }
    moveRight(){
        if(level !== iceworld){
            if(this.#velocityX<this.#speed){
                this.#velocityX+=this.#speed/4;
            }
        }
        else{
            this.#velocityX=this.#speed;
        }
    }
    moveDown(){
        if(this.#velocityY<this.#speed){
            this.#velocityY=this.#speed;
        }
    }

    checkCollisions(blocks,player){
        for(let block of blocks){
            if(block.isTouching(player)){
                this.checkCollisionFloor(block,player);
                if(!w || !this.#ice){
                    this.checkCollisionCeiling(block,player);
                    this.checkCollisionLeft(block,player);
                    this.checkCollisionRight(block,player);
            }   }
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
            if(block.isTouchingX(player,0.5)){ //no wall jump, i.e. player/block on same column
                this.#velocityY*=-0.5*this.#ice;
            }
        }
    }
    checkCollisionRight(block,player){
        if(player.getX()<block.getX() && this.#velocityX>0){ //player left of block & moving right
            if(block.isTouchingY(player,0.5)){ //ensure player and block on same row
                this.#velocityX*=-1*this.#ice;
            }
        }
    }
    checkCollisionLeft(block,player){
        if(player.getX()>block.getX() && this.#velocityX<0){ //player right of block & moving left
            if(block.isTouchingY(player,0.5)){ //ensure player and block on same row
                this.#velocityX*=-1*this.#ice;
            }
        }
    }

    applyFriction(){
        this.#velocityX*=this.#friction;
    }

    hasIce(){
        this.#gravity=0.0;
        this.#friction=1.0;
        this.#ice=0.0;
    }
}