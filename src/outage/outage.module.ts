import { Module } from '@nestjs/common';
import { OutageController } from './controller/outage.controller';
import { OutageMemoryRepository } from './repository/memory/outage-memory.repository';
import { OutageRepository } from './repository/outage.repository';
import { OutageService } from './service/outage.service';

@Module({
    imports: [],
    controllers: [OutageController],
    providers: [
        {
            provide: OutageRepository,
            useClass: OutageMemoryRepository,
        },
        OutageService,
    ],
    exports: [OutageService],
})
export class OutageModule {}
