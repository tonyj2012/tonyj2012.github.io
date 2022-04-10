class Player extends GameObject{
    /* Player Properties */
    #physics;
    #isJumping;
    #isMoving;
    #currentPose;

    constructor(x,y){
        super(x*Block.SIZE,y*Block.SIZE,Block.SIZE,Block.SIZE,"Assets/Red-sprite-right-1.png");
        if(s > 0){
            this.#physics=new Physics(s);
        }
        else{
            this.#physics=new Physics(4);
        }
        this.#isJumping=false;
        this.#isMoving=false;
        this.#currentPose=Pose.RIGHT;
        super.setImage(this.#currentPose.getImage());
    }

    move(){
        const dx=this.getX()+this.#physics.getVelocityX();
        const dy=this.getY()+this.#physics.getVelocityY();
        super.move(dx,dy);
    }

    update(blocks,fluxblocks){
        this.#physics.update(blocks,fluxblocks,this);
        this.move();
        if(this.#physics.getVelocityX() !==0 || this.#physics.getVelocityY() !== 0){
            this.#isMoving = true;
        }
        else{
            this.#isMoving = false;
        }
    }

    jump(){
        if((this.#isJumping === false && level !== iceworld) || (this.#isMoving === false && level === iceworld)){
            this.#physics.jump();
            this.#isJumping=true;
        }
    }

    moveLeft(){
        if(level !== iceworld || this.#isMoving === false){
            this.#physics.moveLeft();
            this.#currentPose=Pose.LEFT;
        }
    }
    moveRight(){
        if(level !== iceworld || this.#isMoving === false){
            this.#physics.moveRight();
            this.#currentPose=Pose.RIGHT;
        }
    }

    moveDown(){
        if(level === iceworld && this.#isMoving === false){
            this.#physics.moveDown();
        }
    }

    isJumping(isJumping){
        this.#isJumping=isJumping;
    }

    draw(){
        super.setImage(this.#currentPose.getImage());
        super.draw();
    }

    getPhysics(){
        return this.#physics;
    }
}