import { Module } from '@nestjs/common';
import { DeviceModule } from 'src/device/device.module';
import { OutageModule } from 'src/outage/outage.module';
import { SiteInfoController } from 'src/site-info/controller/site-info.controller';
import { SiteOutageService } from './service/site-outage.service';

@Module({
    imports: [DeviceModule, OutageModule],
    controllers: [SiteInfoController],
    providers: [SiteOutageService],
    exports: [],
})
export class SiteOutageModule {}
