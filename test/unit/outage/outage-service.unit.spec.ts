import { OutageRepository } from '../../../src/outage/repository/outage.repository';
import { OutageService } from '../../../src/outage/service/outage.service';
import { outageData, outageDataDevice1and2022 } from './test-data';

describe('Outage Service Unit Test', () => {
    let outageRepository: OutageRepository;

    beforeAll(() => {
        outageRepository = jest.mocked<OutageRepository>({
            getOutages: jest.fn(async () => {
                return outageData;
            }),

            filterOutages: jest.fn(async (deviceIds: string[], beginDate: Date) => {
                return outageData.filter(
                    (outage) => outage.begin > beginDate && deviceIds.includes(outage.deviceId),
                );
            }),
        });
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('getOutages ', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });
        it('Repository should be called once', async () => {
            const outageService = new OutageService(outageRepository);
            await outageService.getOutages();
            expect(outageRepository.getOutages).toBeCalledTimes(1);
        });

        it('Should return all outages', async () => {
            const outageService = new OutageService(outageRepository);
            const result = await outageService.getOutages();
            expect(result).not.toBeNull();
            expect(result.length).toBe(outageData.length);
            expect(result.map((outage) => outage.id).sort()).toEqual(
                outageData.map((outage) => outage.id).sort(),
            );
        });
    });

    describe('filterOutages ', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });
        it('Repository should called once', async () => {
            const outageService = new OutageService(outageRepository);
            await outageService.filterOutages(['1'], new Date('2022-01-01T00:00:00.000Z'));
            expect(outageRepository.filterOutages).toBeCalledTimes(1);
        });

        it('Should return outages of spesific devices', async () => {
            const outageService = new OutageService(outageRepository);
            const result = await outageService.filterOutages(
                ['1'],
                new Date('2022-01-01T00:00:00.000Z'),
            );
            expect(result).not.toBeNull();
            expect(result.length).toBe(outageDataDevice1and2022.length);
            expect(result.map((outage) => outage.id).sort()).toEqual(
                outageDataDevice1and2022.map((outage) => outage.id).sort(),
            );
        });
    });
});
