class Player {
    constructor(tempName, tempRoles){
        this.name = tempName;
        this.roles = tempRoles;
        this.role = null;
        this.team = null;
    }
}

let players = [];
let team1 = [];
let team2 = [];

function rollTeams(){
    players = []; team1 = []; team2 = []; 
    for (let i = 1; i < 11; i++) {
        let name = document.getElementById('nick' + i).value;
        let checkboxes = document.querySelectorAll('.player' + i + 'roles');
        let tempRoles = [];
        for (let j = 0; j < checkboxes.length; j++) {
            // if role is checked add string role name to roles atribute
            if(checkboxes[j].checked){
                tempRoles.push(checkboxes[j].value);
            }
        }
        let player = new Player(name, tempRoles);
        players.push(player);
    }
    console.log(players)
    let topPlayers = [], jgPlayers = [], midPlayers = [], botPlayers = [], supPlayers = [];
    // divides players into two dimensional arrays [role[players]], then add role name (line 65) to assign this to class atribute later
    players.forEach(player => {
        player.roles.forEach(role => {
            switch (role) {
                case "top":
                    topPlayers.push(player);
                    break;
                
                case "jug":
                    jgPlayers.push(player);
                    break;
                
                case "mid":
                    midPlayers.push(player);
                    break;
                
                case "bot":
                    botPlayers.push(player);
                    break;
                
                case "sup":
                    supPlayers.push(player);
                    break;
            };
        });
    });
    topPlayers.push("top"); jgPlayers.push("jug"); midPlayers.push("mid"); botPlayers.push("bot"); supPlayers.push("sup");
    roleArrays = [topPlayers, jgPlayers, midPlayers, botPlayers, supPlayers];
    roleArrays.sort((a, b) => (a.length - b.length));
    console.log(roleArrays);
    let x = 0;
    while(roleArrays.length != 0){
        if(roleArrays[0].length < 2){
            alert(`More players need to have role: ${roleArrays[0][roleArrays[0].length-1]}`);
            return;
        }
        else {
            let player1index = Math.floor(Math.random() * (roleArrays[0].length - 1));
            let player2index = Math.floor(Math.random() * (roleArrays[0].length - 1));
            while (player1index === player2index){
                player2index = Math.floor(Math.random() * (roleArrays[0].length - 1));
            }
            let randomizer = Math.round(Math.random())
            if(randomizer > 0){
                roleArrays[0][player1index].role = roleArrays[0][roleArrays[0].length - 1];
                roleArrays[0][player1index].team = 1;
                team1.push(roleArrays[0][player1index]);
                roleArrays[0][player2index].role = roleArrays[0][roleArrays[0].length - 1];
                roleArrays[0][player2index].team = 2;
                team2.push(roleArrays[0][player2index]);
            } else {
                roleArrays[0][player2index].role = roleArrays[0][roleArrays[0].length - 1];
                roleArrays[0][player2index].team = 1;
                team1.push(roleArrays[0][player2index]);
                roleArrays[0][player1index].role = roleArrays[0][roleArrays[0].length - 1];
                roleArrays[0][player1index].team = 2;
                team2.push(roleArrays[0][player1index]);
            }
            roleArrays.splice(0, 1);
            for(i in roleArrays){
                if(roleArrays[i].includes(team1[x])){
                    roleArrays[i].splice(roleArrays[i].indexOf(team1[x]), 1);
                }
                if(roleArrays[i].includes(team2[x])){
                    roleArrays[i].splice(roleArrays[i].indexOf(team2[x]), 1);
                }
            }
        }
    x++;
    };
    console.log("Team 1:")
    console.log(team1);
    console.log("Team 2:")
    console.log(team2);
    console.log(players);

    players.forEach(player => {
        console.log(`team${player.team}${player.role}`);
        let li = document.getElementById(`team${player.team}${player.role}`);
        li.innerHTML += player.name;
    })




    return;
};