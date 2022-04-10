class Pose{
    static RIGHT=new Pose("Assets/Red-sprite-right-1.png","Assets/Red-sprite-right-2.png","Assets/Red-sprite-right-1.png","Assets/Red-sprite-right-3.png");
    static LEFT=new Pose("Assets/Red-sprite-left-1.png","Assets/Red-sprite-left-2.png","Assets/Red-sprite-left-1.png","Assets/Red-sprite-left-3.png");

    constructor(...images){
        this.animation=new Animation(images);
    }

    getImage(){
        return this.animation.getImage();
    }
}