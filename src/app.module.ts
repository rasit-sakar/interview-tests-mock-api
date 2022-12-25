import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configurations/configuration.module';
import { DeviceModule } from './device/device.module';
import { OutageModule } from './outage/outage.module';
import { SiteInfoModule } from './site-info/site-info.module';
import { SiteOutageController } from './site-outage/controller/site-outage.controller';
import { SiteOutageService } from './site-outage/service/site-outage.service';
import { SiteOutageModule } from './site-outage/site.outage.module';

@Module({
    imports: [ConfigurationModule, OutageModule, DeviceModule, SiteInfoModule, SiteOutageModule],
    controllers: [SiteOutageController],
    providers: [SiteOutageService],
})
export class AppModule {}
