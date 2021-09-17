function Human(skinСolor, weight) {
    this.weight = weight;
    this.skinСolor = skinСolor;
}
Human.prototype.skinСolorInfo = function () {
    console.log(`my skin color ${this.skinСolor}`);
}

Human.prototype.walk = function () {
    console.log('I can walk');
}

Human.prototype.Talk = function () {
    console.log('I can talk');
}

function Man(name, sname) {
    this.firstName = name;
    this.lastName = sname;
}

Man.prototype = Object.create(Human.prototype);
Man.prototype.consructor = Man;

function Hunter(name, sname) {
    Man.call(this, name, sname)
}
Hunter.prototype = Object.create(Man.prototype);
Hunter.prototype.consructor = Hunter;

Hunter.prototype.workInfo = function () {
    console.log('I have a weapon');
}

function Worker(name, sname) {
    Man.call(this, name, sname)
}
Worker.prototype = Object.create(Man.prototype);
Worker.prototype.consructor = Worker;
Worker.prototype.workInfo = function () {
    console.log("I'm work");
}

function Women(name, sname) {
    this.firstName = name;
    this.lastName = sname;
}

Women.prototype = Object.create(Human.prototype);
Women.prototype.consructor = Women;


function Librarian(name, sname) {
    Women.call(this, name, sname)
}
Librarian.prototype = Object.create(Women.prototype);
Librarian.prototype.consructor = Librarian;
Librarian.prototype.workInfo = function () {
    console.log('I work with books');
}

function Nurse(name, sname, works) {
    Women.call(this, name, sname)
    this.works = works
}
Nurse.prototype = Object.create(Women.prototype);
Nurse.prototype.consructor = Nurse;
Nurse.prototype.workInfo = function () {
    console.log('I treat people');
}
