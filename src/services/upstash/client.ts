import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL;
let client: Redis | undefined;

export function clientUpstash() {
  if (!client && REDIS_URL) {
    client = new Redis(REDIS_URL);
    client.options.keepAlive = 0;
    client.options.commandTimeout = 1_500;
    client.options.connectTimeout = 3_000;
    client.options.maxRetriesPerRequest = 1;
  }

  return client;
}
