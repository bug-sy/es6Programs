var Gambler = /** @class */ (function () {
    function Gambler(stake, goal, trial) {
        this.stake = stake;
        this.goal = goal;
        this.trial = trial;
        this.bets = 0;
        this.wins = 0;
    }
    Gambler.prototype.push = function () {
        for (var i = 0; i < this.trial; i++) {
            var cash = this.stake;
            while (cash > 0 && cash < this.goal) {
                this.bets++;
                if (Math.random() < 0.5) {
                    cash++;
                }
                else {
                    this.wins++;
                }
            }
            if (cash == this.goal) {
                this.wins++;
            }
        }
        console.log("*********************");
        console.log("*********************");
        console.log("*********************");
        console.log(this.wins + " wins of " + this.trial);
        console.log(Math.random());
    };
    return Gambler;
}());
var readline = require('readline-sync');
var stake = readline.question("What is the stake? ");
var goal = readline.question("What is the goal ? ");
var trial = readline.question("the number of trial you want ?");
var callis = new Gambler(stake, goal, trial);
callis.push();
//# sourceMappingURL=gambling.js.map