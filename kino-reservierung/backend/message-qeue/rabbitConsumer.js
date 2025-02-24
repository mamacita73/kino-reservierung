const amqp = require("amqplib");
const Statistik = require("../statisticsService");

async function receiveMessages() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue("buchung");

    channel.consume("buchung", async (msg) => {
        const buchung = JSON.parse(msg.content.toString());

        await Statistik.create({
            film: buchung.film,
            eingenommen: buchung.preis,
            ticketsVerkauft: 1,
            datum: new Date()
        });

        console.log("Statistik gespeichert:", buchung);
    }, { noAck: true });
}

receiveMessages();
