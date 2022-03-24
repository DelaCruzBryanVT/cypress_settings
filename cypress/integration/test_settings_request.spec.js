import { Guid } from 'guid-typescript';

describe('TEST HTTP REQUEST', () => {
    let idGuid=Guid.create().value
    let token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2EiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvaWRTZXNzaW9uIjoiNzIxNGQzMGQtYjQ0NC00ZjY4LTlmYjEtMjZhNGI2OGIwMTY4IiwiaHR0cDovL3d3dy5lcXVpcGUuY29tL3dzLzIwMDkvMDkvaWRlbnRpdHkvY2xhaW1zL3Nlc3Npb25JZCI6IjkxNTU4ODIwODc0OTgyOTA3MjE0RDMwRC1CNDQ0LTRGNjgtOUZCMS0yNkE0QjY4QjAxNjgiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvY2xpZW50QWdlbnRJZCI6IjJlNGE0NTQ4LTJmY2YtNDI5Ny04OWUxLTE0YjdmODRkYWZkMSIsImV4cCI6MTY0ODE1MDE4NSwiaXNzIjoiQ05FVC5FcXVpcGUzLldlYi5XZWJBcGkiLCJhdWQiOiJBdWRpZW5jZSJ9.14MGLYgKeq5OgUVV1iSRQwCS36gq-n3newu4evgFhP8"
    
    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    })

    it("GET Care Folder Output Template Backup", () => {
        cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackup/GetConfigurationList',token,15,'cypress/fixtures/careFolderOutputTemplateBackup.json');
    });

    it("GET Associated Contexts", () => {
        cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9',token,3,'cypress/fixtures/associatedContexts.json');
    });

    it("GET Associated Report Launcher", () => {
        cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9',token,2,'cypress/fixtures/associatedLauncher.json');
   
    });

    it("GET Associated Schedules", () => {
        cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasSchedule/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9',token,3,'cypress/fixtures/associatedSchedules.json');

    });


})