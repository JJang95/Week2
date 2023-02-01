//pre-ES6

function vehicle(engine, speed) {
    this.engine = engine;
    this.speed = speed;
}

vehicle.prototype.info = function() {
    console.log("Engine: " + this.engine + " Speed: " + this.speed);
};


function car(engine, speed, wheels, brake) {

    vehicle.call(this, engine, speed);
    this.wheels = wheels;
    this.brake = brake;
}

car.prototype = Object.create(vehicle.prototype);
car.prototype.constructor = car;

car.prototype.honk = function() {

    console.log("Honk!");
};

car.isTesla = function(car) {

    return car.brake === true;
};

//ES6

class vehicle {
    constructor(engine, speed) {
        
        this.engine = engine;
        this.speed = speed;
    }

    info() {

        console.log(`Engine: ${this.engine} Speed: ${this.speed}`);
    }
}

class car extends vehicle {

    constructor(engine, speed, wheels, brake) {
        super(engine, speed);
        this.wheels = wheels;
        this.brake = brake;
    }

    honk() {

        console.log("Honk!");
    }

    static isTesla(car) {

        return car.brake === true;
    }
}