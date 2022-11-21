import * as http from "./http.js";

const BIN_ID="624f499e7b69e806cf4a49eb";
const BIN_ID2="6251043ed20ace068f95b696";
const GET_LEADERBOARD=`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;
const GET_LEADERBOARD2=`https://api.jsonbin.io/v3/b/${BIN_ID2}/latest`;
const PUT_LEADERBOARD=`https://api.jsonbin.io/v3/b/${BIN_ID}`;
const PUT_LEADERBOARD2=`https://api.jsonbin.io/v3/b/${BIN_ID2}`;
const state={timer:0,intervalId:null};

const playGame=async () => {
    //console.log("Start game here.");
    //view2.PlayScene(state);
}

const countup=() => {
    if(document.getElementById("over").innerText==="false"){
        state.timer++;
    }
    try{
        document.getElementById("timer").innerHTML=`
        <a href="index.html" style="text-decoration:none">
            <button> Start Menu </button>
        </a>
        Elapsed Time: <a id="time">${state.timer}</a>s`;
    }
    catch(e){
        return;
    }
}

const createGame=() => {
    playGame();
    state.intervalId=setInterval(countup,1000);
}

const getTop5 = async (newScore,board) => {
    let top5;
    if(board===1){
        top5 = await http.sendGETRequest(GET_LEADERBOARD);
    }
    else{
        top5 = await http.sendGETRequest(GET_LEADERBOARD2);
    }
    top5.push( newScore );
    top5.sort( (a,b) => a.time - b.time );
    top5.pop();
    return top5
}    

window.start=async () => {
    createGame();
}

window.updateLeaderboard=async(board)=>{
    const name = document.getElementById('name').value;
    const currentScore = {name:name, time: state.timer};
    const top5 = await getTop5(currentScore,board);
    document.getElementById("canvas").innerHTML=
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
    <hr>
    Success! Please click the Start Menu button to see your name.
    </div>`;
    if(board===1){
        await http.sendPUTRequest(PUT_LEADERBOARD, top5);
    }
    else{
        await http.sendPUTRequest(PUT_LEADERBOARD2, top5);
    }
}

window.addEventListener("load",start);