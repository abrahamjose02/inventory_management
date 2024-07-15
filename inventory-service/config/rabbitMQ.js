const amqp = require('amqplib');

const connectionRabbitMQ = async () => {
    const connection = await amqp.connect('amqp://rabbitmq');
    const channel = await connection.createChannel();
    await channel.assertExchange('product_exchange', 'direct', { durable: true });
    const q = await channel.assertQueue('inventory_queue', { durable: true });
    channel.bindQueue(q.queue, 'product_exchange', 'product.created');

    return { connection, channel, queue: q.queue };
};

const consumeMessages = async (callback) => {
    const { channel, queue } = await connectionRabbitMQ();
    channel.consume(queue, (msg) => {
        if (msg !== null) {
            const messageContent = msg.content.toString();
            console.log(`Message consumed: ${messageContent}`);
            callback(messageContent);
            channel.ack(msg);
        }
    });
};

module.exports = { consumeMessages };
