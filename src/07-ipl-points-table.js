/**
 * 🏆 IPL Season Points Table
 *
 * IPL ka season chal raha hai aur tujhe points table banana hai!
 * Tujhe match results ka array milega, aur tujhe har team ke points
 * calculate karke sorted table return karna hai.
 *
 * Match result types:
 *   - "win": Winning team gets 2 points, losing team gets 0
 *   - "tie": Both teams get 1 point each
 *   - "no_result": Both teams get 1 point each (rain/bad light)
 *
 * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
 *   - For "tie" and "no_result", the winner field is absent or ignored
 *
 * Rules (use for loop with object accumulator):
 *   - Loop through matches array
 *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
 *   - After processing all matches, convert to array and sort:
 *     1. By points DESCENDING
 *     2. If points are equal, by team name ASCENDING (alphabetical)
 *
 * Validation:
 *   - Agar matches array nahi hai ya empty hai, return []
 *
 * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
 * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
 *
 * @example
 *   iplPointsTable([
 *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
 *     { team1: "RCB", team2: "CSK", result: "tie" },
 *   ])
 *   // CSK: played=2, won=1, tied=1, points=3
 *   // MI: played=1, won=0, lost=1, points=0
 *   // RCB: played=1, tied=1, points=1
 *   // Sorted: CSK(3), RCB(1), MI(0)
 * 
 *  { team1: "KKR", team2: "SRH", result: "no_result" }
 * 
 *  { team: "KKR", played: 1, won: 0, lost: 0, tied: 0, noResult: 1, points: 1 },
*   { team: "SRH", played: 1, won: 0, lost: 0, tied: 0, noResult: 1, points: 1 }
 */

function returnIndexOfTeam( result , teamName ){

  // console.log(result)

  for ( let i = 0 ; i<result.length ; i++){
    if ( teamName === result[i].team ){
      return i
    }

  }

  return  -1

}


function bubbleSort( res) { 
  for ( let i =0 ; i < res.length ; i++) { 
    for ( let j = 1 ; j<res.length ; j++){ 
      if ( res[i].points < res[j].points){
        let tmp = res[i]
        res[i] = res[j]
        res[j] = tmp
      }
      // else if ( res[j].team < res[i].team){
      //   let tmp = res[i]
      //   res[i] = res[j]
      //   res[j] = tmp
      // }
      // else{
      // }
    }

      
    
  }

  return res
}

export function iplPointsTable(matches) {
  // Your code here
  if ( !Array.isArray(matches) || matches.length==0){
    return []
  }

  let res = []

  for ( const match of  matches ){
    let isTeam1Present = returnIndexOfTeam(res , match.team1)
    let isTeam2Present = returnIndexOfTeam(res , match.team2)

    // console.log(isTeam1Present)
    // console.log(isTeam2Present)


    // team1 process
    
    if ( res.length != 0 && isTeam1Present!=-1   ){
          res[isTeam1Present].played +=1

          if ( match.result =='win'){
                  if ( match.winner == match.team1 ){  res[isTeam1Present].won+=1  ;  res[isTeam1Present].points+=2 }
                  else { res[isTeam1Present].lost+=1  }

          }else if (match.result =='tie' ) { 
                res[isTeam1Present].tied+=1
                res[isTeam1Present].points+=1
          }else if (match.result =='no_result' ) { 
                res[isTeam1Present].noResult+=1
                res[isTeam1Present].points+=1
          }
          else{ 

          }

    }
    else{ 

      let obj = {}

       if ( match.result =='win'){
                  if ( match.winner == match.team1 ){  obj = { "team": match.team1, "played": 1, "won": 1, "lost": 0, "tied": 0, "noResult": 0, "points": 2  } }
                  else { obj = { "team": match.team1, "played": 1, "won": 0, "lost": 1, "tied": 0, "noResult": 0, "points": 0 }  }

          }else if (match.result =='tie' ) { 
                 obj = { "team": match.team1, "played": 1, "won": 0, "lost": 0, "tied": 1, "noResult": 0, "points": 1 }
          }else if (match.result =='no_result' ) { 
                obj = { "team": match.team1, "played": 1, "won": 0, "lost": 0, "tied": 0, "noResult": 1, "points": 1 }

          }
          else{ 

          }

        res.push(obj)

    }


    // team2 process
     if ( res.length != 0 && isTeam2Present!=-1   ){
          res[isTeam2Present].played +=1

          if ( match.result =='win'){
                  if ( match.winner == match.team2 ){  res[isTeam2Present].won+=1  ;  res[isTeam2Present].points+=2 }
                  else { res[isTeam2Present].lost+=1  }

          }else if (match.result =='tie' ) { 
                res[isTeam2Present].tied+=1
                res[isTeam2Present].points+=1
          }else if (match.result =='no_result' ) { 
                res[isTeam2Present].noResult+=1
                res[isTeam2Present].points+=1
          }
          else{ 

          }

    }
    else{ 

      let obj = {}

       if ( match.result =='win'){
                  if ( match.winner == match.team2 ){  obj = { "team": match.team2, "played": 1, "won": 1, "lost": 0, "tied": 0, "noResult": 0, "points": 2  } }
                  else { obj = { "team": match.team2, "played": 1, "won": 0, "lost": 1, "tied": 0, "noResult": 0, "points": 0 }  }

          }else if (match.result =='tie' ) { 
                 obj = { "team": match.team2, "played": 1, "won": 0, "lost": 0, "tied": 1, "noResult": 0, "points": 1 }
          }else if (match.result =='no_result' ) { 
                obj = { "team": match.team2, "played": 1, "won": 0, "lost": 0, "tied": 0, "noResult": 1, "points": 1 }

          }
          else{ 

          }

        res.push(obj)

    }
  }



  // return res.toSorted((a,b) => a.points - b.points)
  return bubbleSort(res) 
  // return res 

}



console.log( iplPointsTable([
        { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
        { team1: "RCB", team2: "CSK", result: "win", winner: "CSK" },
        { team1: "MI", team2: "RCB", result: "win", winner: "MI" }
      ]))
