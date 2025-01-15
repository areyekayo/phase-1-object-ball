function gameObject (){
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return game;
}

function numPointsScored(player) {
    const game = gameObject();
    
    for (key in game){
        let teamObj = game[key]
        
        let teamPlayers = teamObj["players"]
        
        if (player in teamPlayers){
            return teamPlayers[player]["points"]
        }  
    }
}

function shoeSize(player) {
    const game = gameObject();

    for (key in game){
        let team = game[key]
        let teamPlayers = team["players"]

        if (player in teamPlayers){
            const playerShoe = teamPlayers[player]["shoe"]
            return playerShoe
        }
    }
}

function teamColors(team) {
    const game = gameObject();

    for (key in game) {
        let teamObj = game[key]
        let teamName = teamObj["teamName"]
        
        if (team === teamName) {
            const teamColors = teamObj["colors"]
            return teamColors
        }
    }
}

function teamNames() {
    const game = gameObject();

    const names = []
    
    for (key in game) {
        names.push(game[key]["teamName"])
    }

    return names
}

function playerNumbers(team){
    const game = gameObject()
    const numbers = []

    for (key in game){
        let teamName = game[key]["teamName"]
        
        if (team === teamName){
            
            for (player in game[key]["players"]){
                
                numbers.push(game[key]["players"][player]["number"])
                
            }
        }
    }

    return numbers

}

function playerStats(player){
    const game = gameObject()

    for (key in game){
        let teamObj = game[key]
        if (player in teamObj["players"]) {
            return teamObj["players"][player]
        }
    }
}

function bigShoeRebounds(){
    // function to find the player with the biggest shoe size and get their rebounds
    const game = gameObject()    

    const playerSizes = {}
    const playerRebounds = {}
    
    for (key in game){
        let teamObj = game[key];
        for (player in teamObj["players"]){
            playerSizes[player] = teamObj["players"][player]["shoe"];
            playerRebounds[player] = teamObj["players"][player]["rebounds"];
        }
    }

    const shoeSizes = Object.values(playerSizes);
    const largestShoeSize = Math.max(...shoeSizes);

    for (player in playerSizes) {
        if (playerSizes[player] === largestShoeSize){
            console.log(`${player} has the largest shoe size and largest rebound is ${playerRebounds[player]}`)
            return playerRebounds[player]
            }
        }
}