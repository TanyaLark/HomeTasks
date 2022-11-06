// Створити об’єкт Circle - x, y - координати центру кола, r - радіус.
// Написати методи для пошуку площі і периметр круга.
// Також фукцію пошуку площі перетину двох кіл.

class Circle {
    constructor(x, y, r) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.r = parseFloat(r);
    }

    getArea(){
        return Math.PI * Math.pow(this.r, 2);
    }

    getPerimeter(){
        return 2 * Math.PI * this.r;
    }
}

const circle1 = new Circle(2,0,2);
console.log('circle1 area =', circle1.getArea(), 'perimeter =', circle1.getPerimeter());
const circle2 = new Circle(6,0,3);
console.log('circle2 area =', circle2.getArea(), 'perimeter =', circle2.getPerimeter());

function getCirclesIntersectionArea(circle1, circle2) {
    const distance = Math.sqrt( Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2));
    if(distance >= circle1.r + circle2.r) {
        console.log('Не пересекаются ')
        return 0;
    }else if(distance <= Math.abs(circle1.r - circle2.r)) {
        console.log('Окружность внутри другой')
        return 0;
    }
    else {
        function getExp2(value) {
            return Math.pow(value,2);
        }

        // Если пересекаются
        const f1 = 2 * Math.acos((getExp2(circle1.r) - getExp2(circle2.r) + getExp2(distance)) / (2 * circle1.r * distance));
        const f2 = 2 * Math.acos((getExp2(circle2.r) - getExp2(circle1.r) + getExp2(distance)) / (2 * circle2.r * distance));
        const s1 = (getExp2(circle1.r) * (f1 - Math.sin(f1))) / 2;
        const s2 = (getExp2(circle2.r)* (f2 - Math.sin(f2))) / 2;

        return Math.round((s1 + s2) * 100) / 100;
    }
    return 0;
}

console.log('Intersection area =', getCirclesIntersectionArea(circle1, circle2));