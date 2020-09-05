
class Gambler{
    bets: any;
    wins: any;
    stake: any;
    goal: any;
    trial: any;

    constructor(stake, goal,trial){
        this.stake = stake;
        this.goal = goal;
        this.trial = trial;
        this.bets = 0;
        this.wins = 0;

        
    }

    push(){
        
        for(let i=0; i<this.trial; i++){
            let cash = this.stake;
            
            while(cash>0 && cash<this.goal){
                
                this.bets++;

                if(Math.random() < 0.5){
                    cash++
                }

                else{
                    this.wins++;
                }
            }
            if(cash == this.goal){
                this.wins++
            }
        }
        console.log("*********************")
        console.log("*********************")
        console.log("*********************")
        console.log(this.wins + " wins of " + this.trial )
        console.log(Math.random())
    }

}

const readline = require('readline-sync');
 
let stake = readline.question("What is the stake? ");
let goal = readline.question("What is the goal ? ");
let trial = readline.question("the number of trial you want ?")

var callis = new Gambler(stake,goal,trial)
callis.push()

