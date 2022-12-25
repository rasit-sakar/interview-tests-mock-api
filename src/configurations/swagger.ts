import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfig } from './app.config';

export function setSwagger(app: INestApplication, appConfig: AppConfig): void {
    const swaggerPath = getSwaggerPath(appConfig);
    const config = getSwaggerConfig(appConfig);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(swaggerPath, app, document);
}

function getSwaggerConfig(appConfig: AppConfig) {
    const config = new DocumentBuilder()
        .setTitle(appConfig.name)
        .setDescription(appConfig.description)
        .setVersion(appConfig.version)
        .build();
    return config;
}

function getSwaggerPath(appConfig: AppConfig): string {
    return `${appConfig.globalUrlPrefix}/${appConfig.version}/${appConfig.documentationPath}`;
}
