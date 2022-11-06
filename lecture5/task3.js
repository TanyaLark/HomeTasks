// **Чи належить точка кругу? Вважається, що точка належить кругу, якщо вона знаходиться у крузі, або на його границі (на колі).**
// **Вихідні дані**
// **true/false**
class Circle {
    constructor(x, y, r) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.r = parseFloat(r);
    }
}

const circle = new Circle(5,2,2);

function pointIntoCircle(x, y, circle) {
    const distance = Math.sqrt( Math.pow(circle.x - x, 2) + Math.pow(circle.y - y, 2));
    return distance <= circle.r;
}

console.log(pointIntoCircle(6, 3, circle));