# KrakenFlex Assignment

This is the solution for audition assignment for back-end. Task description is in taksinfo folder.

## Installation

Nodejs v14.x.x and upper version are needed for installation

```bash
npm install
```

```bash
npm run build
```

## Usage

### Running Server

```bash
npm run start:dev
```

You can access the swagger on development environment go to [http://localhost:3000/interview-tests-mock-api/v1/swagger](http://localhost:3000/interview-tests-mock-api/v1/swagger)

### Running Tests

```bash
npm run test
npm run test:cov
```

### Project Info

Project is designed with DDD approach.

**Structure:**

    - Module Folder(auth,site-info, outage, device, site-outage)
        - Controller Folder
        - Service Folder
        - Repository Folder
            - abstract repository files
            - concreate repository folder ( in the project i didnt use any real db. memory repository is only for static data gathering )
        - Model Folder
        - *.module.ts (for injection)
    - Common Domain Folder (for common dto and exception models)
    - Configuration Folder
    - Test Folder

### Environment Variables (with default values)

```bash
APP_NAME="KrakenFlex Task"
APP_DESCRIPTION="Raşit Şakar Krakenflex Task API"
APP_VERSION="v1"
PORT=3000
NODE_ENV="development"
API_GLOBAL_URL_PREFIX="interview-tests-mock-api"
API_DOCUMENTATION_PATH="swagger"
OUTAGE_DATE_FILTER='2022-01-01T00:00:00.000Z'
```

### Exception Filter

    Exception filter is located at "/src/configuration/default-exception-filter".
    It handles 500 internal server errors and converts them to custom http exception.

### Test Coverage

```bash
------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------|---------|----------|---------|---------|-------------------
All files                     |     100 |      100 |     100 |     100 |
 auth/repository              |     100 |      100 |     100 |     100 |
  auth.repository.ts          |     100 |      100 |     100 |     100 |
 auth/service                 |     100 |      100 |     100 |     100 |
  auth-service.ts             |     100 |      100 |     100 |     100 |
 device/repository            |     100 |      100 |     100 |     100 |
  device.repository.ts        |     100 |      100 |     100 |     100 |
 device/service               |     100 |      100 |     100 |     100 |
  device.service.ts           |     100 |      100 |     100 |     100 |
 domain/exception             |     100 |      100 |     100 |     100 |
  site-not-found.exception.ts |     100 |      100 |     100 |     100 |
 outage/model                 |     100 |      100 |     100 |     100 |
  outage.response.model.ts    |     100 |      100 |     100 |     100 |
 outage/repository            |     100 |      100 |     100 |     100 |
  outage.repository.ts        |     100 |      100 |     100 |     100 |
 outage/service               |     100 |      100 |     100 |     100 |
  outage.service.ts           |     100 |      100 |     100 |     100 |
 site-info/model              |     100 |      100 |     100 |     100 |
  site-info.response.model.ts |     100 |      100 |     100 |     100 |
 site-info/repository         |     100 |      100 |     100 |     100 |
  site-info.repository.ts     |     100 |      100 |     100 |     100 |
 site-info/service            |     100 |      100 |     100 |     100 |
  site-info.service.ts        |     100 |      100 |     100 |     100 |
------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        2.97 s, estimated 3 s
```

Raşit Şakar <<rasitsakar94@gmail.com>>
