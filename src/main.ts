import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './configuration/app.config';
import { setSwagger } from './configuration/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appConfig = app.get(ConfigService).get<AppConfig>('app');
    app.setGlobalPrefix(`${appConfig.globalUrlPrefix}/${appConfig.version}`);
    if (appConfig.nodeEnv == 'development') {
        setSwagger(app, appConfig);
    }
    await app.listen(appConfig.port, () => {
        console.log(`App stated on port ${appConfig.port}`);
    });
}
bootstrap();
