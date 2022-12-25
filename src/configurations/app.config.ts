import { registerAs } from '@nestjs/config';

export interface AppConfig {
    name: string;
    description: string;
    version: string;
    port: number;
    nodeEnv: string;
    globalUrlPrefix: string;
    documentationPath: string;
}

export const appConfig = registerAs('app', () => ({
    name: process.env.APP_NAME || 'KrakenFlex Task',
    description: process.env.DESCRIPTION || 'Raşit Şakar Krakenflex Task API',
    version: process.env.APP_VERSION || 'v1',
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    globalUrlPrefix: process.env.GLOBAL_URL_PREFIX || 'interview-tests-mock-api',
    documentationPath: process.env.DOCUMENTATION_PATH || 'swagger',
}));
