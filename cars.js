//define class
class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }
    
    honk() {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }

    race(turns) {
        for (let i = 1; i <= turns; i++) {
            console.log(`Turn ${i}:`);
            this.consumeGas();
            console.log(`Gas remaining: ${this.gas} liters\n`);
        }
    }

    consumeGas() {
        const newCarGasLoss = 5;
        const oldCarGasLoss = this.calculateGasLoss();
        this.gas -= this.year === new Date().getFullYear() ? newCarGasLoss : oldCarGasLoss;
    }

    calculateGasLoss() {
        const baseGasLoss = 5;
        const yearsOld = new Date().getFullYear() - this.year;
        return baseGasLoss + yearsOld;
    }


}

// create objects
let honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
//console.log(`Brand: ${honda.brand}, Model: ${honda.model}, Year: ${honda.year}, Color: ${honda.color}, Price: ${honda.price}`);
let ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
let bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
let mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
let audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
let kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);


// call honk from cars
honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

//Racing
let raceTurns = 7;
honda.race(raceTurns);
ford.race(raceTurns);
bmw.race(raceTurns);
mazda.race(raceTurns);
audi.race(raceTurns);
kia.race(raceTurns);