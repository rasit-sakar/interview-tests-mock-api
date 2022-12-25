# KrakenFlex Assıgment

This is the solution for audition assignment for back-end.

## Installation

```bash
npm install
```

## Usage

### Running Server

```bash
npm run start:dev
```

You can access the swagger on development environment go to [http://localhost:3000/interview-tests-mock-api/v1/swagger](http://localhost:3000/interview-tests-mock-api/v1/swagger)

### Testing

```bash
npm run test
npm run test:cov
```

### Project Info

Project is designed with DDD approach.

**Structure:**

-   Module Folder(auth,site-info, outage, device, site-outage)
    -   Controller Folder
    -   Service Folder
    -   Repository Folder
        -   abstract repository files
        -   concreate repository folder **( in the project i didnt use any real db. memory repository is only for static data gathering )**
    -   Model Folder
    -   \*.module.ts (for injection)
-   Common Domain Folder **(for common dto and exception models)**
-   Configuration Folder
-   Test Folder

Raşit Şakar

rasitsakar94@gmail.com
