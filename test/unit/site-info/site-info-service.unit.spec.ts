import { SiteInfoNotFoundException } from '../../../src/domain/exception/site-not-found.exception';
import { DeviceService } from '../../../src/device/service/device.service';
import { Device } from '../../../src/domain/model/device.model';
import { SiteInfo } from '../../../src/domain/model/site-info.model';
import { SiteInfoRepository } from '../../../src/site-info/repository/site-info.repository';
import { SiteInfoService } from '../../../src/site-info/service/site-info.service';

const defaultSite: SiteInfo = {
    id: '1',
    name: 'Site 1',
    devices: [
        {
            id: '1',
            name: 'Device 1',
            siteId: '1',
        },
        {
            id: '2',
            name: 'Device 2',
            siteId: '1',
        },
    ],
};

const siteData: SiteInfo[] = [defaultSite];

const deviceData: Device[] = defaultSite.devices;

describe('Auth Service Unit Test', () => {
    let siteInfoRepository: SiteInfoRepository;
    let deviceService: DeviceService;

    beforeAll(() => {
        siteInfoRepository = jest.mocked<SiteInfoRepository>({
            getSiteInfo: jest.fn(async (siteId: string) =>
                siteData.find((item) => item.id == siteId),
            ),
        });
        deviceService = jest.mocked<DeviceService>(
            {
                getDevicesBySiteId: jest.fn(async (siteId: string) =>
                    deviceData.filter((item) => item.siteId == siteId),
                ),
            } as any,
            true,
        );
    });

    describe('getSiteInfo ', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('Repository should be called once', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            await siteInfoService.getSiteInfo('1');
            expect(siteInfoRepository.getSiteInfo).toBeCalledTimes(1);
        });

        it('DeviceService should be called once', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            await siteInfoService.getSiteInfo('1');
            expect(deviceService.getDevicesBySiteId).toBeCalledTimes(0);
        });

        it('Should return site info', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            const result = await siteInfoService.getSiteInfo('1');
            expect(result).not.toBeNull();
            expect(result.id).toEqual(defaultSite.id);
            expect(result.name).toEqual(defaultSite.name);
        });

        it('Should throw SiteInfoNotFoundException', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            try {
                await siteInfoService.getSiteInfo('2');
            } catch (error) {
                expect(error).toBeInstanceOf(SiteInfoNotFoundException);
            }
        });
    });

    describe('getSiteInfoWithDevices ', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it('Repository & Device Service should called once', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            await siteInfoService.getSiteInfoWithDevices('1');
            expect(siteInfoRepository.getSiteInfo).toBeCalledTimes(1);
            expect(deviceService.getDevicesBySiteId).toBeCalledTimes(1);
        });

        it('Should return same site', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            const result = await siteInfoService.getSiteInfoWithDevices('1');
            expect(result.id).toEqual(defaultSite.id);
            expect(result.name).toEqual(defaultSite.name);
            expect(result.devices.length).toEqual(defaultSite.devices.length);
        });

        it('Should throw SiteInfoNotFoundException', async () => {
            const siteInfoService = new SiteInfoService(siteInfoRepository, deviceService);
            try {
                await siteInfoService.getSiteInfoWithDevices('2');
            } catch (error) {
                expect(error).toBeInstanceOf(SiteInfoNotFoundException);
            }
        });
    });
});
