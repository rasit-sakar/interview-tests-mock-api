import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader } from '@nestjs/swagger';
import { SiteOutageResponseModel } from '../model/site-outage.response.model';
import { SiteOutageService } from '../service/site-outage.service';

@Controller('site-outages')
@ApiHeader({ name: 'x-api-key' })
export class SiteOutageController {
    constructor(private readonly siteOutageService: SiteOutageService) {}

    @Post(':siteId')
    @UseGuards(AuthGuard('api-key'))
    async getSiteOutages(@Param('siteId') siteId: string): Promise<SiteOutageResponseModel[]> {
        const result = await this.siteOutageService.getOutagesySiteId(siteId);
        return result;
    }
}
