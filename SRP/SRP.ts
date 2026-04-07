// una responsabilidad: Representar datos de un usuario

class User {
    constructor(
    public readonly name: string,
    public readonly email: string
    ) {}
}

// otra responsabilidad: Validar el email del usuario
class UserValidator{
    validateEmail(email: string): boolean{
        return email.includes('@') && email.includes('.');
    }
}

// otra responsabilidad: Guardar el usuario en una base de datos
class UserRepository {
    save(user: User): void{
        console.log(`Saving user ${user.name} with email ${user.email} to the database.`);
    }
}

// una responsabilidad: notificar

class EmailService {
    sendWelcomeEmail(user: User): void {
        console.log(`Sending welcome email to ${user.email}`);
    }
}