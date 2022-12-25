import { registerAs } from '@nestjs/config';

export interface AppConfig {
    name: string;
    version: string;
    port: number;
    nodeEnv: string;
    globalUrlPrefix: string;
}

export const appConfig = registerAs('app', () => ({
    name: process.env.APP_NAME || 'task',
    version: process.env.APP_VERSION || 'v1',
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'dev',
    globalUrlPrefix: process.env.GLOBAL_URL_PREFIX || 'interview-tests-mock-api',
}));
