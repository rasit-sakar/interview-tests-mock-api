import { ConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';
import { outageConfig } from './outage.config';

export const ConfigurationModule = ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig, outageConfig],
});
