function parseCount(item) {
    if (Number.isNaN(Number.parseFloat(item))) {
        throw new Error("Невалидное значение");
    }

    return Number.parseFloat(item);
}

function validateCount(num) {
    try {
        return parseCount(num);
    } catch (error){
        return error;
    }
}

class Triangle {
    constructor (side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.perimeter;
        this.area;

        if (((this.side1 + this.side2) < this.side3) ||
        ((this.side1 + this.side3) < this.side2) ||
        ((this.side2 + this.side3) < this.side1)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    get area() {
        const p = (this.side1 + this.side2 + this.side3)/2;
        return Number(Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3)).toFixed(3));
    }
    
}

function getTriangle(side1, side2, side3) {
    try {
        return new Triangle(side1, side2, side3);
    } catch(error) {
        return {get perimeter() {
            return "Ошибка! Треугольник не существует";
        }, 
        get area() {
            return "Ошибка! Треугольник не существует"}
        };
    }
}
