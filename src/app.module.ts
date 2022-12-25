import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './configurations/configuration.module';
import { DefaultExceptionsFilter } from './configurations/default-exception-filter';
import { DeviceModule } from './device/device.module';
import { OutageModule } from './outage/outage.module';
import { SiteInfoModule } from './site-info/site-info.module';
import { SiteOutageModule } from './site-outage/site.outage.module';

@Module({
    imports: [
        ConfigurationModule,
        OutageModule,
        DeviceModule,
        SiteInfoModule,
        SiteOutageModule,
        AuthModule,
    ],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: DefaultExceptionsFilter,
        },
    ],
})
export class AppModule {}
