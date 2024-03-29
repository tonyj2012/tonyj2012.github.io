class Pokemon extends Block{
    /* Pokemon Properties */
    #pokemon;
    #set;
    #char;
    #rand;
    #rand2;
    
    constructor(x,y,mon){
        super(x,y,"Assets/"+MONS.get(mon)+".png");
        this.#pokemon = NUMBERS1.get(mon);
        this.#set = NUMBERS2.get(mon);
        this.#char = mon;
        if(r > 0){
            this.#rand=Math.floor(Math.random()*(100/r));
            this.#rand2=Math.floor(Math.random()*(500/r));
        }
        else{
            this.#rand=Math.floor(Math.random()*20);
            this.#rand2=Math.floor(Math.random()*100);
        }
        if(r === 100){
            this.#rand2=0;
        }
    }

    isTouching(player){
        return super.isTouchingX(player,0.25) && super.isTouchingY(player,0.25);
    }

    getPokemon(){
        return this.#pokemon;
    }
    getMon(mon){
        return MONS.get(mon);
    }
    getSet(){
        return this.#set;
    }
    getChar(){
        return this.#char;
    }
    getRand(){
        return this.#rand;
    }
    getRand2(){
        return this.#rand2;
    }
}
const MONS=new Map([
    ["B","bulbasaurthumb"],
    ["C","charmanderthumb"],
    ["S","squirtlethumb"],
    ["P","pikachuthumb"],
    ["T","caterpiethumb"],
    ["W","weedlethumb"],
    ["F","clefairythumb"],
    ["A","abrathumb"],
    ["D","diglettthumb"],
    ["G","gengarthumb"],
    ["U","doduothumb"],
    ["N","pinsirthumb"],
    ["H","scytherthumb"],
    ["L","laprasthumb"],
    ["O","omastarthumb"],
    ["K","kabutopsthumb"],
    ["Z","zapdosthumb"],
    ["E","articunothumb"],
    ["M","moltresthumb"],
    ["X","mewtwothumb"],
    ["Y","mewthumb"],
    ["Q","kadabrathumb"],
    ["i","silph"],
    ["b","boulder"],
    ["c","cascade"],
    ["t","thunder"],
    ["r","rainbow"],
    ["s","soul"],
    ["m","marsh"],
    ["v","volcano"],
    ["e","earth"],
    ["l","efbadge2"],
    ['"',"pidgeythumb"],
    ["$","rattatathumb"],
    ["&","spearowthumb"],
    ["'","nidoranFthumb"],
    ["*","nidoranMthumb"],
    ["+","jigglypuffthumb"],
    [",","magikarpthumb"],
    ["-","zubatthumb"],
    [".","geodudethumb"],
    ["/","parasthumb"],
    ["0","ekansthumb"],
    ["1","sandshrewthumb"],
    ["2","jynxthumb"],
    ["3","oddishthumb"],
    ["4","bellsproutthumb"],
    ["5","mankeythumb"],
    ["6","meowththumb"],
    ["7","farfetchdthumb"],
    ["8","drowzeethumb"],
    ["9","mrmimethumb"],
    [":","voltorbthumb"],
    [";","machopthumb"],
    ["<","onixthumb"],
    ["=","gastlythumb"],
    [">","cubonethumb"],
    ["?","eeveethumb"],
    ["I","porygonthumb"],
    ["J","snorlaxthumb"],
    ["V","lickitungthumb"],
    ["\\","exeggcutethumb"],
    ["^","rhyhornthumb"],
    ["_","chanseythumb"],
    ["a","taurosthumb"],
    ["d","dratinithumb"],
    ["f","dragonairthumb"],
    ["g","venomoththumb"],
    ["h","dittothumb"],
    ["j","kangaskhanthumb"],
    ["k","hitmonleethumb"],
    ["n","hitmonchanthumb"],
    ["o","arcaninethumb"],
    ["p","ninetalesthumb"],
    ["q","aerodactylthumb"],
    ["u","rapidashthumb"],
    ["w","weezingthumb"],
    ["x","mukthumb"],
    ["y","magmarthumb"],
    ["z","butterfreethumb"],
    ["{","beedrillthumb"],
    ["|","tangelathumb"],
    ["}","tentacruelthumb"],
    ["~","poliwraththumb"],
    ["Á","nidokingthumb"],
    ["Ç","nidoqueenthumb"],
    ["É","fearowthumb"],
    ["Í","raichuthumb"],
    ["Ó","magnetonthumb"],
    ["Ú","electabuzzthumb"],
    ["Ý","jolteonthumb"],
    ["á","psyduckthumb"],
    ["ç","slowbrothumb"],
    ["é","dewgongthumb"],
    ["í","shellderthumb"],
    ["ó","kinglerthumb"],
    ["ú","horseathumb"],
    ["ý","seakingthumb"],
    ["Â","starmiethumb"],
    ["Ê","vaporeonthumb"],
    ["Î","golbatthumb"],
    ["Ô","machokethumb"],
    ["Û","gravelerthumb"],
    ["Ä","marowakthumb"],
    ["Ë","venusaurthumb"],
    ["Ï","charizardthumb"],
    ["Ö","blastoisethumb"],
    ["Ü","rhydonthumb"],
    ["ä","gyaradosthumb"],
    ["ë","dragonitethumb"]
]);

const NUMBERS1=new Map([
    ["B",1024],
    ["C",512],
    ["S",256],
    ["P",128],
    ["T",64],
    ["W",32],
    ["F",16],
    ["A",8],
    ["D",4],
    ["G",2],
    ["U",1],
    ["N",1024],
    ["H",512],
    ["L",256],
    ["O",128],
    ["K",64],
    ["Z",32],
    ["E",16],
    ["M",8],
    ["X",4],
    ["Y",2],
    ["Q",1],
    ["i",512],
    ["b",128],
    ["c",64],
    ["t",32],
    ["r",16],
    ["s",8],
    ["m",4],
    ["v",2],
    ["e",1],
    ["l",0],
    ['"',1024],
    ["$",1024],
    ["&",512],
    ["'",256],
    ["*",128],
    ["+",64],
    [",",32],
    ["-",16],
    [".",8],
    ["/",4],
    ["0",2],
    ["1",1],
    ["2",1024],
    ["3",512],
    ["4",256],
    ["5",128],
    ["6",64],
    ["7",32],
    ["8",16],
    ["9",8],
    [":",4],
    [";",2],
    ["<",1],
    ["=",1024],
    [">",512],
    ["?",256],
    ["I",128],
    ["J",64],
    ["V",32],
    ["\\",16],
    ["^",8],
    ["_",4],
    ["a",2],
    ["d",1],
    ["f",1024],
    ["g",512],
    ["h",256],
    ["j",128],
    ["k",64],
    ["n",32],
    ["o",16],
    ["p",8],
    ["q",4],
    ["u",2],
    ["w",1],
    ["x",1024],
    ["y",512],
    ["z",256],
    ["{",128],
    ["|",64],
    ["}",32],
    ["~",16],
    ["Á",8],
    ["Ç",4],
    ["É",2],
    ["Í",1],
    ["Ó",1024],
    ["Ú",512],
    ["Ý",256],
    ["á",128],
    ["ç",64],
    ["é",32],
    ["í",16],
    ["ó",8],
    ["ú",4],
    ["ý",2],
    ["Â",1],
    ["Ê",1024],
    ["Î",512],
    ["Ô",256],
    ["Û",128],
    ["Ä",64],
    ["Ë",32],
    ["Ï",16],
    ["Ö",8],
    ["Ü",4],
    ["ä",2],
    ["ë",0]
]);

const NUMBERS2=new Map([
    ["B",0],
    ["C",0],
    ["S",0],
    ["P",0],
    ["T",0],
    ["W",0],
    ["F",0],
    ["A",0],
    ["D",0],
    ["G",0],
    ["U",0],
    ["N",1],
    ["H",1],
    ["L",1],
    ["O",1],
    ["K",1],
    ["Z",1],
    ["E",1],
    ["M",1],
    ["X",1],
    ["Y",1],
    ["Q",1],
    ["i",2],
    ["b",2],
    ["c",2],
    ["t",2],
    ["r",2],
    ["s",2],
    ["m",2],
    ["v",2],
    ["e",2],
    ["l",2],
    ['"',2],
    ["$",3],
    ["&",3],
    ["'",3],
    ["*",3],
    ["+",3],
    [",",3],
    ["-",3],
    [".",3],
    ["/",3],
    ["0",3],
    ["1",3],
    ["2",4],
    ["3",4],
    ["4",4],
    ["5",4],
    ["6",4],
    ["7",4],
    ["8",4],
    ["9",4],
    [":",4],
    [";",4],
    ["<",4],
    ["=",5],
    [">",5],
    ["?",5],
    ["I",5],
    ["J",5],
    ["V",5],
    ["\\",5],
    ["^",5],
    ["_",5],
    ["a",5],
    ["d",5],
    ["f",6],
    ["g",6],
    ["h",6],
    ["j",6],
    ["k",6],
    ["n",6],
    ["o",6],
    ["p",6],
    ["q",6],
    ["u",6],
    ["w",6],
    ["x",7],
    ["y",7],
    ["z",7],
    ["{",7],
    ["|",7],
    ["}",7],
    ["~",7],
    ["Á",7],
    ["Ç",7],
    ["É",7],
    ["Í",7],
    ["Ó",8],
    ["Ú",8],
    ["Ý",8],
    ["á",8],
    ["ç",8],
    ["é",8],
    ["í",8],
    ["ó",8],
    ["ú",8],
    ["ý",8],
    ["Â",8],
    ["Ê",9],
    ["Î",9],
    ["Ô",9],
    ["Û",9],
    ["Ä",9],
    ["Ë",9],
    ["Ï",9],
    ["Ö",9],
    ["Ü",9],
    ["ä",9],
    ["ë",9]
]);

let dex1=0;
let dex2=0;
let dex3=0;
let dex4=0;
let dex5=0;
let dex6=0;
let dex7=0;
let dex8=0;
let dex9=0;
let dex10=0;
let badges=0;