// Abstraccion 
interface NotificationChannel {
    send(message: string, recipient: string): void;
}

// Implementaciones específicas (extensiones)
class EmailChannel implements NotificationChannel {
    send(message: string, recipient: string): void {
        console.log(`Enviando correo a ${recipient}: ${message}`);
    }
}

class SMSChannel implements NotificationChannel {
    send(message: string, recipient: string): void {
        console.log(`Enviando SMS a ${recipient}: ${message}`);
    }
}

class PushNotificationChannel implements NotificationChannel {
    send(message: string, recipient: string): void {
        console.log(`Enviando notificación push a ${recipient}: ${message}`);
    }
}

// Servicio que usa los canales (cerrado para modificación, abierto para extensión)
class NotificationService {
    private channels: NotificationChannel[] = [];

    addChannel(channel: NotificationChannel): void {
        this.channels.push(channel);
    }

    sendToAll(message: string, recipient: string): void {
        this.channels.forEach(channel => {
            channel.send(message, recipient);
        });
    }
}

// Extension agregar Whatsapp sin modificiar el código existente
class WhatsAppChannel implements NotificationChannel {
    send(message: string, recipient: string): void {
        console.log(`Enviando WhatsApp a ${recipient}: ${message}`);
    }
}

// Uso  
const notificationService = new NotificationService();
notificationService.addChannel(new EmailChannel());
notificationService.addChannel(new SMSChannel());
notificationService.addChannel(new PushNotificationChannel());
notificationService.addChannel(new WhatsAppChannel());

notificationService.sendToAll("¡Hola! Tienes una nueva notificación.", "<RECEIVER>");