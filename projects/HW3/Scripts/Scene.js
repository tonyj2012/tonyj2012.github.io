class Scene{
    /* Scene Properties */
    #background;
    #cols;
    #rows;
    #blocks;
    #fluxblocks;
    #monsters;
    #iceblocks;
    #player;
    #level;
    #exit;

    constructor(map,level){
        this.#blocks=[];
        this.#fluxblocks=[];
        this.#monsters=[];
        this.#iceblocks=[];
        this.#level=level;
        this.setScene(map);
    }

    setScene(worldData,img="Assets/background-grass.png"){
        const cols = worldData[0].length; //Count of tiles height of world
        this.#cols=cols;
        const rows = worldData.length; //Count of tiles across of world
        this.#rows=rows;
        this.setBackground(rows,cols,backgrounds[this.#level]);
        for(let y=0;y<rows;y++){
            for(let x=0;x<cols;x++){
                const tile = worldData[y][x];
                this.setTile(x,y,tile);
            }
        }
    }

    setBackground(rows,cols,img,tileSize=32){
        const width=cols*tileSize;
        const height=rows*tileSize;
        this.#background=new GameObject(0,0,width,height,img);
    }

    draw(){
        this.#background.draw();
        this.#blocks.forEach((block) => block.draw());
        this.#iceblocks.forEach((iceblock) => iceblock.draw());
        this.drawFluxBlocks();
        this.#exit.draw();
        this.drawMonsters();
        this.#player.draw();
    }
    
    drawFluxBlocks(){
        for(let i=0;i<this.#fluxblocks.length;i++){
            if(game.getLevel() >= badges){
                this.#fluxblocks[i].draw();
            }
        }
    }

    drawMonsters(){
        this.#monsters.forEach((monster) => {
            if(monster.getRand() === 0){ //monster.getRand() === 0
                try{
                    const m=monster.getMon(monster.getChar());
                    const im = new Image();
                    im.src="Assets/"+m+"shiny.png";
                    monster.setImage(im);
                    document.getElementById(monster.getChar()).src="Assets/"+m+"shiny.png";
                }
                catch(e){
                    console.error(e);
                    console.log("weird error");
                }
            }
            for(let i=1;i<1025;i*=2){
                if(monster.getPokemon() === i && ((monster.getSet() === 0 && !(dex1 & i)) || 
                                                  (monster.getSet() === 1 && !(dex2 & i)) || 
                                                  (monster.getSet() === 2 && !(dex3 & i)) || 
                                                  (monster.getSet() === 3 && !(dex4 & i)) || 
                                                  (monster.getSet() === 4 && !(dex5 & i)) || 
                                                  (monster.getSet() === 5 && !(dex6 & i)) || 
                                                  (monster.getSet() === 6 && !(dex7 & i)) || 
                                                  (monster.getSet() === 7 && !(dex8 & i)) || 
                                                  (monster.getSet() === 8 && !(dex9 & i)) || 
                                                  (monster.getSet() === 9 && !(dex10 & i)))){
                    monster.draw(); 
                }
            }
        });
    }

    setTile(x,y,tile){
        switch(tile){
            case "#": this.#blocks.push(new Block(x,y,)); break;
            case "]": this.#blocks.push(new Block(x,y,"Assets/tile-rock.png")); break;
            case ")": this.#blocks.push(new Block(x,y,"Assets/tile-grave.png")); break;
            case "â": this.#blocks.push(new Block(x,y,"Assets/lorelei.png")); break;
            case "ê": this.#blocks.push(new Block(x,y,"Assets/bruno.png")); break;
            case "î": this.#blocks.push(new Block(x,y,"Assets/agatha.png")); break;
            case "ô": this.#blocks.push(new Block(x,y,"Assets/lance.png")); break;
            case "û": this.#blocks.push(new Block(x,y,"Assets/blue.png")); break;
            case "%": this.#fluxblocks.push(new FluxBlock(x,y)); break;
            case "[": this.#fluxblocks.push(new FluxBlock(x,y,"Assets/tile-rock.png")); break;
            case "(": this.#fluxblocks.push(new FluxBlock(x,y,"Assets/tile-grave.png")); break;
            case "ï": this.#fluxblocks.push(new FluxBlock(x,y,"Assets/tile-truck.jpg")); break;
            case "@": this.#player=new Player(x,y); break;
            case "B": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "C": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "S": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "P": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case '"': this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "$": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "&": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "'": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "*": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "T": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "W": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "F": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "+": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case ",": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "-": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case ".": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "/": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "A": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "0": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "1": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "2": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "3": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "4": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "D": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "5": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "6": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "7": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "8": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "9": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "G": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case ":": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case ";": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "<": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "=": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case ">": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "U": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "?": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "I": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "J": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "V": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "N": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "H": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "\\": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "^": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "_": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "a": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "d": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "f": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "g": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "h": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "j": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "L": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "k": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "n": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "O": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "K": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "o": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "p": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "q": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "u": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "w": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "x": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "y": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "z": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "{": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "|": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "}": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "~": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Á": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ç": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "É": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Z": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Í": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ó": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ú": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ý": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "E": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "á": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "ç": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "é": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "í": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "ó": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "ú": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "ý": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Â": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ê": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "M": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "X": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Y": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Q": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Î": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ô": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Û": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ä": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ë": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ï": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ö": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "Ü": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "ä": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "ë": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "i": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "b": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "c": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "t": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "r": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "s": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "m": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "v": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "e": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "l": this.#monsters.push(new Pokemon(x,y,tile)); break;
            case "!": this.#exit=new Exit(x,y);
        }
    }

    update(){
        this.#player.update(this.#blocks,this.#fluxblocks);
    }

    getPlayer(){
        return this.#player;
    }

    hasCollisions(){
        return this.#monsters.some(monster => monster.isTouching(this.#player));
    }
    getCollisions(){
        return this.#monsters.filter(monster => monster.isTouching(this.#player));
    }

    hasIce(){
        return this.#iceblocks.some(iceblock => iceblock.isTouching(this.#player));
    }

    getExit(){
        return this.#exit;
    }

    getCols(){
        return this.#cols;
    }
    getRows(){
        return this.rows;
    }
}
let scene = 0;