const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

const kika = new Student("Kika", 1990, "programming");
kika.calcAge();

Student.prototype.introduce = function () {
    console.log(
        `My name is ${this.firstName}, I'am born in ${this.birthYear}, and I study ${this.course}`
    );
};

kika.introduce();

//------------- Class Inheritence ---------------
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey, ${this.fullName}!`);
    }

    get age() {
        return 2037 - this.birthYear;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(name) {
        this._fullName = name;
    }

    static hey() {
        console.log("Hey there!!!");
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first;
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(
            `My name is ${this.fullName}, I'am born in ${this.birthYear}, and I study ${this.course}`
        );
    }

    calcAge() {
        console.log(
            `Hey, I'am ${2022 - this.birthYear}'s old, but I feel like ${
                2022 - this.birthYear + 100
            }`
        );
    }
}

const student1 = new StudentCl("Sissa", 1975, "Math");
