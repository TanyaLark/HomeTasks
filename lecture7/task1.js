// Показати на практиці, що javascript - OOP (Інкапсуляція, Поліморфізм, Наслідування):
// - 5 різних класів (Геометричні фігури)
// - 5 унікальних методів

// circle
// quadrilateral
// square
// triangle
// line

class AbstractFigure {
    constructor(x1, y1, x2, y2) {
        this.x1 = parseFloat(x1);
        this.y1 = parseFloat(y1);
        this.x2 = parseFloat(x2);
        this.y2 = parseFloat(y2);
    }

    pointsToString() {
        return `X1 = ${this.x1}, Y1 = ${this.y1}, X2 = ${this.x2}, Y2 = ${this.y2}`;
    }

    twoPointDistance(x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

class Line extends AbstractFigure {
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }

    getLength() {
        return this.twoPointDistance();
    }
}

class Circle extends AbstractFigure {
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }

    getRadius() {
        return this.twoPointDistance();
        // return Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    }

    getDiameter() {
        return this.getRadius() * 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.getRadius();
    };

    getArea() {
        return Math.PI * (Math.pow(this.getRadius(), 2));
    }
}

//square in circle
class Square extends AbstractFigure {
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }

    getDiagonal() {
        return 2 * this.twoPointDistance();
    }

    getPerimeter() {
        return (this.getDiagonal() / 2) * 8;
    }

    getArea() {
        return (Math.pow(this.getDiagonal(), 2)) / 2;
    }
}

class Triangle extends AbstractFigure {
    constructor(x1, y1, x2, y2, x3, y3) {
        super(x1, y1, x2, y2);
        this.x1 = parseFloat(x1);
        this.y1 = parseFloat(y1);
        this.x2 = parseFloat(x2);
        this.y2 = parseFloat(y2);
        this.x3 = parseFloat(x3);
        this.y3 = parseFloat(y3);
    }

    getSideLength(x1, y1, x2, y2) {
        return this.twoPointDistance(x1, y1, x2, y2);
        // return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    getPerimeter() {
        return this.getSideLength(this.x1, this.y1, this.x2, this.y2)
            + this.getSideLength(this.x2, this.y2, this.x3, this.y3)
            + this.getSideLength(this.x3, this.y3, this.x1, this.y1);
    }

    getArea() {
        const halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter *
            (halfPerimeter - this.getSideLength(this.x1, this.y1, this.x2, this.y2)) *
            (halfPerimeter - this.getSideLength(this.x2, this.y2, this.x3, this.y3)) *
            (halfPerimeter - this.getSideLength(this.x3, this.y3, this.x1, this.y1))
        );
    }

//переопределение метода
    pointsToString() {
        return `X1 = ${this.x1}, Y1 = ${this.y1}, X2 = ${this.x2}, Y2 = ${this.y2}, X3 = ${this.x3}, Y3 = ${this.y3},`;
    }
}

class Trapezoid extends AbstractFigure {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        super(x1, y1, x2, y2);
        this.x1 = parseFloat(x1);
        this.y1 = parseFloat(y1);
        this.x2 = parseFloat(x2);
        this.y2 = parseFloat(y2);
        this.x3 = parseFloat(x3);
        this.y3 = parseFloat(y3);
        this.x4 = parseFloat(x4);
        this.y4 = parseFloat(y4);
    }

    getSideLength(x1, y1, x2, y2) {
        return this.twoPointDistance(x1, y1, x2, y2);
    }

    getFirstBase() {
        return this.getSideLength(this.x1, this.y1, this.x2, this.y2);
    }

    getFirstSide() {
        return this.getSideLength(this.x2, this.y2, this.x3, this.y3);
    }

    getSecondBase() {
        return this.getSideLength(this.x3, this.y3, this.x4, this.y4);
    }

    getSecondSide() {
        return this.getSideLength(this.x4, this.y4, this.x1, this.y1);
    }

    getPerimeter() {
        return this.getFirstBase() + this.getFirstSide() + this.getSecondBase() + this.getSecondSide();
    }

    getArea() {
        const a = this.getFirstBase();
        const b = this.getSecondBase();
        const c = this.getFirstSide();
        const d = this.getSecondSide();
        return ((a + b) / 2) * (Math.sqrt(Math.pow(c, 2) - Math.pow(
            ((Math.pow(b - a, 2) + Math.pow(c, 2) - Math.pow(d, 2))
                / (2 * (b - a))), 2
        )));
    }

//переопределение метода
    pointsToString() {
        return `X1 = ${this.x1}, Y1 = ${this.y1},
             X2 = ${this.x2}, Y2 = ${this.y2},
             X3 = ${this.x3}, Y3 = ${this.y3},
             X4 = ${this.x4}, Y4 = ${this.y4}`;
    }

}

const line = new Line(0, 0, 4, 4);
console.log(line.twoPointDistance());
