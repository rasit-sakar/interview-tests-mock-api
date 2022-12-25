import { Module } from '@nestjs/common';
import { DeviceMemoryRepository } from './repository/memory/device-memory.repository';
import { DeviceRepository } from './repository/device.repository';
import { DeviceService } from './service/device.service';

@Module({
    imports: [],
    controllers: [],
    providers: [
        {
            provide: DeviceRepository,
            useClass: DeviceMemoryRepository,
        },
        DeviceService,
    ],
    exports: [DeviceService],
})
export class DeviceModule {}
