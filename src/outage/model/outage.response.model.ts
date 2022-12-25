import { Outage } from '../../domain/model/outage.model';

export class OutageResponseModel {
    id: string;
    begin: Date;
    end: Date;

    static fromModel(outage: Outage): OutageResponseModel {
        return {
            id: outage.id,
            begin: outage.begin,
            end: outage.end,
        };
    }

    static fromModels(outages: Outage[]): OutageResponseModel[] {
        return outages.map((outage) => OutageResponseModel.fromModel(outage));
    }
}
