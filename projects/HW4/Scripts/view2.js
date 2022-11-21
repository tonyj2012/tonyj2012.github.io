import Leaderboard from "./Leaderboard.js";

export const StartMenu=(topScores,topScores2)=>{
    document.getElementById("view").innerHTML=`
    <div style="text-align:center">
    <table>
    <tr>
    <th>
    <h1>Leaderboards:</h1>
    </th>
    </tr>
    <tr>
    <td>
    ${Leaderboard(topScores.record,"Best Times<br>(Classic)")}
    </td>
    <td>
    ${Leaderboard(topScores2.record,"Best Times<br>(Walk Through Walls)")}
    </td>
    </tr>
    </table>
    <div style="margin-top:100px">
        <a href="Platformer.html">
            <button>Start Game</button>
        </a>
    </div>
    </div>
    `;
}