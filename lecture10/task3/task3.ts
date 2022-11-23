class Triangle {
    public readonly Ax: number;
    public readonly Ay: number;
    public readonly Bx: number;
    public readonly By: number;
    public readonly Cx: number;
    public readonly Cy: number;

    constructor(Ax: number,
                Ay: number,
                Bx: number,
                By: number,
                Cx: number,
                Cy: number) {
        this.Ax = Ax;
        this.Ay = Ay;
        this.Bx = Bx;
        this.By = By;
        this.Cx = Cx;
        this.Cy = Cy;
    }
}

class Point {
    public readonly PointX: number;
    public readonly PointY: number;

    constructor(PointX: number,
                PointY: number) {
        this.PointX = PointX;
        this.PointY = PointY;
    }
}

function isPointInTriangle(
    triangle: Triangle,
    point: Point,
): number {
    const {Ax, Ay, Bx, By, Cx, Cy} = triangle;
    const {PointX, PointY} = point;
    const givenTriangleArea = calculateTriangleArea(triangle);

    const firstTriangleWithPoint = new Triangle(PointX, PointY, Ax, Ay, Bx, By);
    const secondTriangleWithPoint = new Triangle(PointX, PointY, Bx, By, Cx, Cy);
    const thirdTriangleWithPoint = new Triangle(PointX, PointY, Cx, Cy, Ax, Ay);

    const area1 = calculateTriangleArea(firstTriangleWithPoint);
    const area2 = calculateTriangleArea(secondTriangleWithPoint);
    const area3 = calculateTriangleArea(thirdTriangleWithPoint);
    const areaCheckResult = Math.abs(givenTriangleArea - (area1 + area2 + area3));
    return areaCheckResult <= 0.01 ? 1 : 0;
}

function calculateTriangleArea(
    triangle: Triangle
): number {
    const {Ax, Ay, Bx, By, Cx, Cy} = triangle;
    return Math.abs(
        Bx * Cy - Cx * By - Ax * Cy + Cx * Ay + Ax * By - Bx * Ay
    )
}

const triangleToCheck: Triangle = new Triangle(0, 0, 6, 30, 29, 32);
const O: Point = new Point(12, 22);

console.log(isPointInTriangle(triangleToCheck, O));