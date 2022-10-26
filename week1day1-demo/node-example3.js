const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};



function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);
    if (l <= 0 || w <= 0) {
        console.log(`Rectangle must be greater than zero. Values: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
}

solveRect(6, 2);
solveRect(8, 1);
solveRect(0, 9);
solveRect(4, -1);

exports.perimeter = (x, y) => 2 * (x + y);
exports.area = (x, y) => x * y;
