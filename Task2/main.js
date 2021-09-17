function Animal() {

}

Animal.constructor.walkInfo = function () {
    console.log('walk');
}

Animal.constructor.woolInfo = function () {
    console.log('wool');
}
Animal.constructor.runInfo = function () {
    console.log('run');
}


function Herbivorous() {
}

Herbivorous.prototype = Object.create(Animal.prototype);
Herbivorous.constructor = Herbivorous

function Cow() {
}

Cow.prototype = Object.create(Herbivorous.prototype);
Cow.constructor = Cow;


function Deer() {

}

Deer.prototype = Object.create(Herbivorous.prototype);
Deer.constructor = Deer;

function Predator() {
}

Predator.prototype = Object.create(Animal.prototype);
Predator.constructor = Predator;

function Lion (){

}
Lion.prototype = Object.create(Predator.prototype);
Lion.constructor = Lion;

function Tiger(){

}
Tiger.prototype = Object.create(Predator.prototype);
Tiger.constructor = Tiger;
let qq = new Herbivorous()

console.log(qq);