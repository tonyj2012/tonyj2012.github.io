import Leaderboard from "./Leaderboard.js";

export const StartMenu=(topScores,topScores2,topScores3,topScores4)=>{
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
    ${Leaderboard(topScores.record,"Any%<br>Classic")}
    </td>
    <td>
    ${Leaderboard(topScores2.record,"Any%<br>Walk Through Walls")}
    </td>
    <td>
    ${Leaderboard(topScores3.record,"Catch 'em All<br>Classic")}
    </td>
    <td>
    ${Leaderboard(topScores4.record,"Catch 'em All<br>Walk Through Walls")}
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