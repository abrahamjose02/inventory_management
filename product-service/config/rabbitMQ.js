const amqp = require("amqplib");

let channel;

const connectRabbitMQ = async () => {
  const connection = await amqp.connect("amqp://rabbitmq");
  channel = await connection.createChannel();
  await channel.assertExchange("product_exchange", "direct", { durable: true });
};

const publishMessage = async (message, routingKey) => {
  if (!channel) {
    await connectRabbitMQ();
  }
  channel.publish("product_exchange", routingKey, Buffer.from(message));
  console.log(`Message sent: ${message}`);
};

module.exports = { publishMessage };
