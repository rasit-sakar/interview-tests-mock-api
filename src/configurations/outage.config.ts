import { registerAs } from '@nestjs/config';

export interface OutageConfig {
    outageDateFilter: Date;
}

export const outageConfig = registerAs('outage', () => ({
    outageDateFilter: new Date(process.env.OUTAGE_DATE_FILTER || '2022-01-01T00:00:00.000Z'),
}));
