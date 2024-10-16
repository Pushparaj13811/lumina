// src/config/kafka.js

import { Kafka } from 'kafkajs';
import constants from './constants.js'; // Import constants for configuration

// Create a new Kafka instance
const kafka = new Kafka({
  clientId: 'lumina-backend', // Unique client ID for your application
  brokers: [`${constants.KAFKA_HOST}:${constants.KAFKA_PORT}`], // Kafka broker(s)
});

// Create a producer instance
const producer = kafka.producer();

// Create a consumer instance
const consumer = kafka.consumer({ groupId: 'lumina-group' }); // Consumer group ID

// Function to connect the producer
const connectProducer = async () => {
  await producer.connect();
  console.log('Kafka producer connected successfully');
};

// Function to connect the consumer
const connectConsumer = async () => {
  await consumer.connect();
  console.log('Kafka consumer connected successfully');
};

// Export the Kafka instance, producer, and consumer
export { kafka, producer, consumer, connectProducer, connectConsumer };

