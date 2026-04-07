//Una responsabilidad: validar productos
class ProductValidator {
    validate(product: any): void{
        if (!product.price) throw new Error('Invalid product');
    }
}

// Una responsabilidad: calcular descuentos 
class DiscountCalculator {
    calculate(customer: any): number {
        return customer.type === 'premium' ? 0.1 : 0;
    }
}

// una responsabilidad: calcular impuestos
class TaxCalculator {
    calculate(price: number): number {
        return price * 0.21;
    }
}

//una responsabilidad: logging
class PriceLogger {
    logCalculation(productName: string): void {
        console.log(`Calculating final price for ${productName}`);
    }

    logDiscount (discount: number): void {
        console.log(`Applied discount: ${discount * 100}%`);
    }
}

// Una responsabilidad: coordianr el cálculo

class PriceCalculator {
    constructor(
        private validator: ProductValidator,
        private discountCalculator: DiscountCalculator,
        private taxCalculator: TaxCalculator,
        private logger: PriceLogger
    ) {}

    calculateFinalPrice(product: any, customer: any): number {
        this.logger.logCalculation(product.name);
        this.validator.validate(product);
        const discount = this.discountCalculator.calculate(customer);
        this.logger.logDiscount(discount);
        const discountedPrice = product.price * (1 - discount);
        return discountedPrice + this.taxCalculator.calculate(discountedPrice);
    }
}

