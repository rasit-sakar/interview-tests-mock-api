import { Module } from '@nestjs/common';
import { DeviceModule } from './device/device.module';
import { OutageModule } from './outage/outage.module';
import { SiteInfoModule } from './site-info/site-info.module';
import { SiteOutageModule } from './site-outage/site.outage.module';

@Module({
    imports: [OutageModule, DeviceModule, SiteInfoModule, SiteOutageModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
