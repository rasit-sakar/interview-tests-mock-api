import { Injectable } from '@nestjs/common';
import { Outage } from 'src/domain/model/outage.model';
import { OutageResponseModel } from '../model/outage.response.model';
import { OutageRepository } from '../repository/outage.repository';

@Injectable()
export class OutageService {
    constructor(private readonly outageRepository: OutageRepository) {}

    async getOutages(): Promise<OutageResponseModel[]> {
        const result = await this.outageRepository.getOutages();
        return OutageResponseModel.fromModels(result);
    }

    async filterOutages(deviceIds: string[], beginDate: Date): Promise<Outage[]> {
        const result = await this.outageRepository.filterOutages(deviceIds, beginDate);
        return result;
    }
}
