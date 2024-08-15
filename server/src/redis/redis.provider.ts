import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient } from "redis";

export const RedisClient = "REDIS_CLIENT"

export const redisProvider:Provider = {
    provide:RedisClient,
    
    useFactory:async (configService:ConfigService)=>{
        const client =createClient({
            url:`redis://${configService.get<string>("REDIS_HOST")}:${configService.get<string>("REDIS_PORT")}`
        });
        await client.connect();
        return client;
    },
    inject:[ConfigService]
}