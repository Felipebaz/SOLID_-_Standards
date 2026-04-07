//Abstraccion que define el contrato comun 

abstract class Shape{
    abstract getArea(): number;
    abstract getPerimeter(): number;
}

// Implementaciones que respetan sus propios contratos

class Rectangle extends Shape{
    constructor(private width: number, private height: number){
        super();
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    constructor(private sideLength: number) {
        super();
    }

    setSideLength(length: number): void {
        this.sideLength = length;
    }

    getArea(): number {
        return this.sideLength * this.sideLength;
    }

    getPerimeter(): number {
        return 4 * this.sideLength;
    }
}

// ahora funciona correctaemente con cualquier tipo de forma
function printShapeInfo(shape: Shape): void {
    console.log(`Area: ${shape.getArea()}`);
    console.log(`Perimeter: ${shape.getPerimeter()}`);
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4);

printShapeInfo(rectangle); // Area: 20, Perimeter: 18
printShapeInfo(square);    // Area: 16, Perimeter: 16

