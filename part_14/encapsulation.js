// Encapsulation basicaly means to keep some properties and methods private inside the class so they are not accessible outside the class. The rest of the methods are basically exposed as a public interface, which we can also call API.

// FIELDS ARE DEFINED OUSIDE THE CONSTRUCTOR;
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version) static methods are available only from the class itself, not from the instances.

class Account {
    // 1. Public fields (instances)
    local = navigator.language;
    // _movements = []; protected (it is only a convention _uderscore.)

    // 2. Private filelds; with private fields we can now make it so that properties are really, truly not accessible from the outside. (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // this.local = navigator.language;
        // Protected
        // this._movements = [];

        console.log(`Thank's for oppening an account ${this.owner}`);
    }

    // 3. Public methods
    // Public interface
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this; // if we want to chain our methods.
    }

    vithdraw(val) {
        this.deposit(-val);
        return this; // if we want to chain our methods.
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`${val} loan approved!`);
        }
        return this; // if we want to chain our methods.
    }

    // 4. Private methods; very useful to hide the implementation details from the outside.
    // #approveLoan(val) {
    //     // somme logic;
    //     return true;
    // } DOESN'T WORK YET

    _approveLoan(val) {
        return true;
    }
}

const kika = new Account("Kika", "EUR", 1111);
console.log(kika);
kika.deposit(100);
kika.deposit(100);
kika.vithdraw(50);
kika.requestLoan(1000);
console.log(kika.getMovements());
