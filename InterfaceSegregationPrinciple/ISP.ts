// Interfaces específicas
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}
interface Programmable {
    program(): void;
}

// Implementaciones que respetan sus propios contratos

class Human implements Workable, Eatable, Sleepable, Programmable {
    work(): void {
        console.log("El humano está trabajando.");
    }
    eat(): void {
        console.log("El humano está comiendo.");
    }
    sleep(): void {
        console.log("El humano está durmiendo.");
    }
    program(): void {
        console.log("El humano está programando.");
    }
}

class Robot implements Workable, Programmable {
    work(): void {
        console.log("El robot está trabajando.");
    }
    program(): void {
        console.log("El robot está programando.");
    }
}
