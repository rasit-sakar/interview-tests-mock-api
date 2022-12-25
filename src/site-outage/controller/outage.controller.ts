import { Controller, Param, Post } from '@nestjs/common';
import { SiteOutageResponseModel } from '../model/site-outage.response.model';
import { SiteOutageService } from '../service/site-outage.service';

@Controller('interview-tests-mock-api/v1/site-outages')
export class OutageController {
    constructor(private readonly siteOutageService: SiteOutageService) {}

    @Post(':siteId')
    async getSiteOutages(@Param('siteId') siteId: string): Promise<SiteOutageResponseModel[]> {
        const result = await this.siteOutageService.getOutagesySiteId(siteId);
        return result;
    }
}
