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

export function iplPointsTable(matches) {
  // Your code here
  if ( !Array.isArray(matches) || matches.length==0){
    return []
  }

  const res = {}

  for  ( const match of matches){

    //team1 check
      if( Object.keys(res).findIndex((ele) => (ele === match.team1)) !=-1){
         let pnt = 0
        if(match.result == 'win') {
           if(match.winner ==match.team1){
            pnt = 2
           }
        }
        else{
          pnt = 1
        }

          res[match.team1].played +=1 
          res[match.team1].won += (match.result == 'win' && match.winner == match.team1) ? 1 : 0
          res[match.team1].lost +=  (match.result == 'win' && match.winner != match.team1) ? 1: 0 
          res[match.team1].tied += (match.result == 'tie') ?1 :0
          res[match.team1].noResult += (match.result == 'no_result') ?1 :0
          res[match.team1].points +=pnt 

      }
      else{
        let pnt = 0
        if(match.result == 'win') {
           if(match.winner ==match.team1){
            pnt = 2
           }
        }
        else{
          pnt = 1
        }
          res[match.team1] ={ 
             team: match.team1, played: 1, won: (match.result == 'win' && match.winner == match.team1) ? 1 : 0 , lost: (match.result == 'win' && match.winner != match.team1) ? 1: 0 , tied: (match.result == 'tie') ?1 :0, noResult: (match.result == 'no_result') ?1 :0, points: pnt }
          }

          // team2 check
      if( Object.keys(res).findIndex((ele) => (ele === match.team2)) !=-1){
         let pnt = 0
        if(match.result == 'win') {
           if(match.winner ==match.team2){
            pnt = 2
           }
        }
        else{
          pnt = 1
        }

          res[match.team2].played +=1 
          res[match.team2].won += (match.result == 'win' && match.winner == match.team2) ? 1 : 0
          res[match.team2].lost +=  (match.result == 'win' && match.winner != match.team2) ? 1: 0 
          res[match.team2].tied += (match.result == 'tie') ?1 :0
          res[match.team2].noResult += (match.result == 'no_result') ?1 :0
          res[match.team2].points +=pnt 

      }
      else{
        let pnt = 0
        if(match.result == 'win') {
           if(match.winner ==match.team2){
            pnt = 2
           }
        }
        else{
          pnt = 1
        }
          res[match.team2] ={ 
             team: match.team2, played: 1, won: (match.result == 'win' && match.winner == match.team2) ? 1 : 0 , lost: (match.result == 'win' && match.winner != match.team2) ? 1: 0 , tied: (match.result == 'tie') ?1 :0, noResult: (match.result == 'no_result') ?1 :0, points: pnt }
          }
      }


      return Object.values(res).toSorted((a,b) => {
        const nameCompare = a.team.localeCompare(b.team)
        return  b.points -a.points  || nameCompare
      })
  }



// console.log( iplPointsTable([
//         { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
//         { team1: "RCB", team2: "CSK", result: "win", winner: "CSK" },
//         { team1: "MI", team2: "RCB", result: "tie" }
//       ]))


// console.log(iplPointsTable([{ team1: "KKR", team2: "SRH", result: "no_result" }]));

console.log( iplPointsTable([
        { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
        { team1: "RCB", team2: "DC", result: "win", winner: "RCB" },
        { team1: "CSK", team2: "RCB", result: "tie" },
        { team1: "MI", team2: "DC", result: "no_result" },
        { team1: "DC", team2: "CSK", result: "win", winner: "CSK" }
      ]));


