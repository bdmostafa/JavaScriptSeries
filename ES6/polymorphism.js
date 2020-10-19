// Polymprphism - same name but different characteristics - area()
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class Trianlge {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    area() {
        return this.base * this.height / 2;
    }
}

class Square {
    constructor(width) {
        this.width = width;
    }
    area() {
        return Math.pow(this.width, 2);
    }
}

class Ellipse {
    constructor(halfMinorAxis, halfMajorAxis) {
        this.halfMinorAxis = halfMinorAxis;
        this.halfMajorAxis = halfMajorAxis;
    }
    area() {
        return Math.PI * halfMinorAxis * halfMajorAxis;
    }
}


const shapes = [new Circle(10), new Square(3), new Rectangle(5, 9), new Trianlge(7), new Ellipse(3, 5)]

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    // area() method executes from all the classes in looping
    console.log(shape.area());
}