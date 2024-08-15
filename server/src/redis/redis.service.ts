import { Injectable, Inject } from '@nestjs/common';
import { RedisClient } from './redis.provider';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(RedisClient) private readonly redis: RedisClientType) {}

  async get(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }

  async set(key: string, value: string, ttl = 0): Promise<void> {
    if (ttl > 0) {
      await this.redis.setEx(key, ttl, value);
    } else {
      await this.redis.set(key, value);
    }
  }

  async del(key: string): Promise<void> {
    await this.redis.del(key);
  }
}

