import { Controller, Get } from '@nestjs/common';
import { OutageResponseModel } from '../model/outage.response.model';
import { OutageService } from '../service/outage.service';

@Controller('interview-tests-mock-api/v1/outages')
export class OutageController {
    constructor(private readonly outageService: OutageService) {}

    @Get()
    async getOutages(): Promise<OutageResponseModel[]> {
        const result = await this.outageService.getOutages();
        return result;
    }
}
