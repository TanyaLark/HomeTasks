// Для заданих фігур написати метод який обраховує площу перетину заданих фігур.
// Приклад: Площа перетину 2 квадратів і так далі.
// Фігури однакові, тобто претин квадратів, кіл.

class Rectangle {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    getIntersectionArea(rectangle) {
        const x3 = rectangle.x1;
        const y3 = rectangle.y1;
        const x4 = rectangle.x2;
        const y4 = rectangle.y2;

        const left = Math.max(this.x1, x3);
        const top = Math.min(this.y2, y4);
        const right = Math.min(this.x2, x4);
        const bottom = Math.max(this.y1, y3);

        const width = right - left;
        const height = top - bottom;

        if (width < 0 || height < 0)
            return 0;

        return width * height;
    }
}

const rectangle1 = new Rectangle(0, 0, 4, 4);
const rectangle2 = new Rectangle(2, 2, 6, 6);
const intersectionArea = rectangle1.getIntersectionArea(rectangle2);
console.log(intersectionArea);


class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    static findIntersectionAreaStatic(circle1, circle2) {
        const {x: x1, y: y1, r: r1} = circle1;
        const {x: x2, y: y2, r: r2} = circle2;
        const distance = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
        let f1, f2, s1, s2;
        if (distance >= r1 + r2) {
            return 0;
        } else if (distance <= Math.abs(r1 - r2)) {
            return 0;
        } else {
            f1 = 2 * Math.acos((r1 * r1 - r2 * r2 + Math.pow(distance, 2)) / (2 * r1 * distance));
            f2 = 2 * Math.acos((r2 * r2 - r1 * r1 + Math.pow(distance, 2)) / (2 * r2 * distance));
            s1 = (r1 * r1 * (f1 - Math.sin(f1))) / 2;
            s2 = (r2 * r2 * (f2 - Math.sin(f2))) / 2;

            return s1 + s2;
        }
    }
}

const circle1 = new Circle(0, 0, 2);
const circle2 = new Circle(3, 0, 4);
const intersection = Circle.findIntersectionAreaStatic(circle1, circle2);
console.log(intersection);
