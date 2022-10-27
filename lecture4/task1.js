// **Квадрат**
// Знайдіть периметр та площу квадрата.
// **Вхідні дані**
// Довжина сторони квадрата n (1 ≤ n ≤ 1000).
// **Вихідні дані**
// Для кожного теста виведіть в одному рядку периметр та площу квадрата.

function squarePerimeter(n){
    if (n <= 1 || n>= 1000){
        return console.log('Err');
    }
    return console.log('Perimeter', 4 * n);
}

function squareArea(n){
    if (n <= 1 || n>= 1000){
        return console.log('Err');
    }
    return console.log('Area', n * n);
}

squarePerimeter(6);
squarePerimeter(0);
squarePerimeter(1001);

squareArea(3);
squareArea(0);
squareArea(1001);