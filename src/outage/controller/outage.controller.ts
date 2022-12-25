import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader } from '@nestjs/swagger';
import { OutageResponseModel } from '../model/outage.response.model';
import { OutageService } from '../service/outage.service';

@Controller('outages')
@ApiHeader({ name: 'x-api-key' })
export class OutageController {
    constructor(private readonly outageService: OutageService) {}

    @Get()
    @UseGuards(AuthGuard('api-key'))
    async getOutages(): Promise<OutageResponseModel[]> {
        const result = await this.outageService.getOutages();
        return result;
    }
}
