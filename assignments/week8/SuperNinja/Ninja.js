class Ninja {
    constructor(ninjaName, ninjaHealth) {
        this.name = ninjaName
        this.health = ninjaHealth
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`Name: ${this.name} | Health: ${this.health} | Speed: ${this.speed} | Strength: ${this.strength}`)
    }

    drinkSake() {
        this.health += 10
    }

}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    
    speakWisdom() {
        this.drinkSake()
        console.log("3 frogs on a log and one makes the decision to jump off the log, there are still 3 frogs on the log.")
    }
}

const phillip = new Ninja("Phillip", 100)
const sox = new Sensei("Sox")
console.log(sox)
sox.speakWisdom()
sox.showStats()
phillip.showStats()

// sox.sayName()
// sox.showStats()
// sox.drinkSake()
// sox.showStats()