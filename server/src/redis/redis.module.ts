import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';
import { RedisCacheService } from './redis.service';
import { RedisClient, redisProvider } from './redis.provider';

@Module({
    // imports:[CacheModule.registerAsync({
    //     imports:[ConfigModule],
    //     useFactory: async (configService:ConfigService) =>{
    //         console.log(configService.get<string>("REDIS_URL"))
    //         try{
    //             return {store: await redisStore({
    //                 url:configService.get<string>("REDIS_URL"),
    //                 pingInterval:3000
    //             })}
                
    //         }catch(e){
    //             console.log(e)
    //         }
            
    //     },
    //     inject:[ConfigService]
    // })],
    // providers: [RedisCacheService],
    // exports: [RedisCacheService],
    providers:[redisProvider],
    exports:[RedisClient]
})
export class RedisModule {}
