class Game{
    /* Game Properties */
    #world;
    #isOver;
    #level;
    #scene;
    #controller;

    /* Create a new Platform Game */
    constructor(){
        this.#isOver = false;
        this.#world = new World();
        //console.log("world",this.#world); //Test-delete this line after finishing this goal.
        this.#level=0;
        const levelData=this.#world.getLevel(this.#level);
        this.#scene=new Scene(levelData,this.#level);
        scene=this.#scene;
        const player=this.#scene.getPlayer();
        this.#controller=new Controller(player);
    }

    update(){
        //console.log("Game Update"); //Test-delete this line after finishing this goal.
        this.#controller.update();
        this.#scene.update();
        if(this.#scene.getExit().isTouching(this.#scene.getPlayer())){
            this.#level++;
            //this.#scene.setBackground(this.#scene.getRows(),this.#scene.getCols(),backgrounds[this.#level]);
            //this.render();
            level=this.#level;
            if(this.#level<this.#world.getLength()){
                this.loadScene();
            }
            else{
                this.#isOver=true;
            }
        }
        if(this.#scene.hasCollisions()){
            //this.loadScene();
            const num = this.#scene.getCollisions()[0];
            if(num.getSet() === 0 && !(dex1 & num.getPokemon())){
                dex1+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 1 && !(dex2 & num.getPokemon())){
                dex2+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 2 && !(dex3 & num.getPokemon())){
                dex3+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 3 && !(dex4 & num.getPokemon())){
                dex4+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 4 && !(dex5 & num.getPokemon())){
                dex5+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 5 && !(dex6 & num.getPokemon())){
                dex6+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 6 && !(dex7 & num.getPokemon())){
                dex7+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 7 && !(dex8 & num.getPokemon())){
                dex8+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 8 && !(dex9 & num.getPokemon())){
                dex9+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            else if(num.getSet() === 9 && !(dex10 & num.getPokemon())){
                dex10+=num.getPokemon();
                document.getElementById(num.getChar()).style="opacity:1";
            }
            if(badges <= game.getLevel()){
                badges++;
            }
        }
        if(this.#level === iceworld){
            this.#scene.getPlayer().getPhysics().hasIce();
            this.#scene.getPlayer().isJumping(false);
        }
        /*else{
            this.#scene.getPlayer().getPhysics().setGravity(0.3);
            this.#scene.getPlayer().getPhysics().setFriction(0.8);
        }*/
    }

    render(){
        //console.log("Game Render"); //Test-delete this line after finishing this goal.
        this.#scene.draw();
    }

    /* The main game loop (static method) */
    static main(){
        if(game.#isOver === false){
            game.update();
            game.render();
            window.requestAnimationFrame(Game.main);
        }
        else{
            canvas.innerHTML=(
                `<div width="384" height="448" style="padding:10px; border: 1px solid black; background-image: url('Assets/dexbackground.png');">
                Congratulations! You've completed this game.<br>
                Try playing again with some of the following cheat codes:<br>
                <ul>
                    <li> Unlock shiny rate: Type the smallest number <br>expressible as the sum of two positive cubes <br>in three different ways. </li>
                    <li> Unlock gravity: Type the smallest number <br>expressible as the sum of two positive cubes <br>in two different ways. </li>
                    <li> Unlock speed: Type "Quicksilver" </li>
                    <li> Unlock friction: Type "Superconductor" </li>
                    <li> Unlock walk through walls: Type "Ghostbusters" </li>
                </ul>
                </div>`)
        }
    }

    loadScene(){
        const map=this.#world.getLevel(this.#level);
        this.#scene=new Scene(map,this.#level);
        this.#controller=new Controller(this.#scene.getPlayer());
    }

    getLevel(){
        return this.#level;
    }
}

let game = new Game();
let level = 0;