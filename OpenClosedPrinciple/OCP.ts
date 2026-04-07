// Abtracción que define el contrato
interface DiscountStrategy {
    calculate(amount: number): number;
}

// Implementaciones especificas (extensiones)
class RegularDiscount implements DiscountStrategy {
    calculate(amount: number): number {
        return amount * 0.9; // 10% de descuento
    }   
}

class PremiumDiscount implements DiscountStrategy {
    calculate(amount: number): number {
        return amount * 0.8; // 20% de descuento
    }
}

class VipDiscount implements DiscountStrategy {
    calculate(amount: number): number {
        return amount * 0.7; // 30% de descuento
    }
}


// Contexto que utiliza la estrategia
class DiscountCalculator {
    constructor(private strategy: DiscountStrategy) {}

    calculate(amount: number): number {
        return this.strategy.calculate(amount);
    }
}

class StudentDiscount implements DiscountStrategy {
    calculate(amount: number): number {
        return amount * 0.80; // 20% de descuento para estudiantes
    }
}

// Uso
const regularCalculator = new DiscountCalculator(new RegularDiscount());
console.log(regularCalculator.calculate(100)); // 90

const StudentCalc = new DiscountCalculator(new StudentDiscount());
console.log(StudentCalc.calculate(100)); // 80