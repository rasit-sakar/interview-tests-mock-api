import { Module } from '@nestjs/common';
import { DeviceModule } from 'src/device/device.module';
import { OutageModule } from 'src/outage/outage.module';
import { SiteInfoModule } from 'src/site-info/site-info.module';
import { SiteOutageService } from './service/site-outage.service';

@Module({
    imports: [DeviceModule, OutageModule, SiteInfoModule],
    controllers: [],
    providers: [SiteOutageService],
    exports: [],
})
export class SiteOutageModule {}
