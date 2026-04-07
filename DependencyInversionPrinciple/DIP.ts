//Abstraccion (interfaz)
interface MessageSender{
    send(message: string, recipient: string): void;
}

//Implementacion concreta
class EmailService implements MessageSender{
    send(message: string, recipient: string): void {
        console.log(`Enviando correo a ${recipient}: ${message}`);
    }
}

class SMSService implements MessageSender{
    send(message: string, recipient: string): void {
        console.log(`Enviando SMS a ${recipient}: ${message}`);
    }
}

class WhatsappService implements MessageSender{
    send(message: string, recipient: string): void {
        console.log(`Enviando WhatsApp a ${recipient}: ${message}`);
    }
}

//Servicio que depende de la abstraccion (interfaz)
class NotificationService{
    constructor (private messageSender: MessageSender){}

    notify(message: string, recipient: string): void {
        this.messageSender.send(message, recipient);
    }
}

//Uso
const emailService = new EmailService();
const smsService = new SMSService();
const whatsappService = new WhatsappService();

const notificationService1 = new NotificationService(emailService);
const notificationService2 = new NotificationService(smsService);
const notificationService3 = new NotificationService(whatsappService);

notificationService1.notify("Hola por correo", "usuario1@example.com");
notificationService2.notify("Hola por SMS", "123456789");
notificationService3.notify("Hola por WhatsApp", "usuario3@example.com");