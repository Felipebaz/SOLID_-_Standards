// Abstracción general para aves

abstract class Bird {
    abstract move (): void;

    eat(): void {
        console.log("El ave está comiendo.");
    }       
}

// Ave que vuela
class FlyingBird extends Bird {
    move(): void {
        this.fly();
    }

    private fly(): void {
        console.log("El ave está volando.");
    }
}

// Ave que nada
class SwimmingBird extends Bird {
    move(): void {
        this.swim();
    }

    private swim(): void {
        console.log("El ave está nadando.");
    }
}   

// Implementación de aves

class Sparrow extends FlyingBird {
    // El gorrión puede volar, no necesita modificar nada
}

class Penguin extends SwimmingBird {
    // El pingüino no puede volar, pero nada perfectamente
}

// ahora funciona con cualquier tipo de ave
function makeBirdMove(bird: Bird): void {
    bird.move();
}

const sparrow = new Sparrow();
const penguin = new Penguin();

makeBirdMove(sparrow); // El ave está volando.
makeBirdMove(penguin); // El ave está nadando.
