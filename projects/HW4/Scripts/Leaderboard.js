const Leaderboard=(topScores,title) => (
    `<h2>${title}:</h2>
    <section>
        <ol>
            ${ListItems(topScores)}
        </ol>
    </section>`
);

const ListItems = (topScores) => {
    let li=``;
    const scores=topScores.sort((a,b)=>a.time-b.time);
    for(let row of scores){
        li+=`<li>${row.name}: ${row.time}s</li>`;
    }
    return li;
}

export default Leaderboard;