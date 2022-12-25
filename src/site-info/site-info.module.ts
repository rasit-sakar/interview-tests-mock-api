import { Module } from '@nestjs/common';
import { DeviceModule } from 'src/device/device.module';
import { SiteInfoMemoryRepository } from './repository/memory/site-memory.repository';
import { SiteInfoRepository } from './repository/site-info.repository';
import { SiteInfoService } from './service/site-info.service';

@Module({
    imports: [DeviceModule],
    controllers: [],
    providers: [
        {
            provide: SiteInfoRepository,
            useClass: SiteInfoMemoryRepository,
        },
        SiteInfoService,
    ],
    exports: [SiteInfoService],
})
export class SiteInfoModule {}
