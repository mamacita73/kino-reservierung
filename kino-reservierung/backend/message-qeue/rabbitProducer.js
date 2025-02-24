const amqp = require("amqplib");

async function sendMessage(queue, message) {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await connection.createChannel();
        await channel.assertQueue(queue, { durable: true });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true });

        console.log(`📩 Nachricht an ${queue} gesendet:`, message);

        await channel.close();
        await connection.close();
    } catch (error) {
        console.error("Fehler beim Senden an RabbitMQ:", error.message);
    }
}

module.exports = sendMessage;
