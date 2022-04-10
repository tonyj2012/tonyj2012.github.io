class World{
    /* World Properties */
    #levels;

    constructor(){
        //parse all map data and save it for later
        this.#levels = world.map(level => (level.split("\n")).map(row => row.split("")));
    }

    getLevel(level){
        return this.#levels[level];
    }

    getLength(){
        return this.#levels.length;
    }
}
let iceworld=12;
let backgrounds=["Assets/background-grass.png", //pallet
                 "Assets/background-grass.png", //viridian
                 "Assets/background-grass.png", //pewter
                 "Assets/background-grass.png", //cerulean
                 "Assets/background-grass.png", //vermilion
                 "Assets/background-grass.png", //lavender
                 "Assets/background-grass.png", //celadon
                 "Assets/background-grass.png", //fuschia
                 "Assets/background-grass.png", //saffron
                 "Assets/background-grass.png", //cinnabar
                 "Assets/background-grass.png", //viridian2
                 "Assets/background-grass.png", //power plant
                 "Assets/background-ice.jpg",       //seafoam   
                 "Assets/background-grass.png", //indigo
                 "Assets/background-grass.png", //unknown
                 "Assets/background-grass.png", //end?
                 "Assets/background-grass.png"  //mew
                ];