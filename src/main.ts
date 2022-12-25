import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './configurations/app.config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const appConfig = app.get(ConfigService).get<AppConfig>('app');
    app.setGlobalPrefix(`${appConfig.globalUrlPrefix}/${appConfig.version}`);

    await app.listen(appConfig.port, () => {
        console.log(`App stated on port ${appConfig.port}`);
    });
}
bootstrap();
