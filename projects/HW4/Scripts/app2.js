import * as http from "./http.js";
import * as view2 from "./view2.js";

const BIN_ID="624f499e7b69e806cf4a49eb";
const BIN_ID2="6251043ed20ace068f95b696";
const GET_LEADERBOARD=`https://api.jsonbin.io/b/${BIN_ID}/latest`;
const GET_LEADERBOARD2=`https://api.jsonbin.io/b/${BIN_ID2}/latest`;
const state={topScores:[],topScores2:[]};

window.start = async () => {
    state.topScores=await http.sendGETRequest(GET_LEADERBOARD);
    state.topScores2=await http.sendGETRequest(GET_LEADERBOARD2);
    window.localStorage.setItem("top5",state.topScores.map(a=>a.time));
    window.localStorage.setItem("top52",state.topScores2.map(a=>a.time));
    view2.StartMenu(state.topScores,state.topScores2);
}

window.addEventListener("load",start);