import { Guid } from 'guid-typescript';

describe('TEST HTTP REQUEST', () => {
    let idGuid = Guid.create().value
    let token = "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2EiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvaWRTZXNzaW9uIjoiODExYzdlY2MtMGFmNC00MzUwLWJlZmItMGQ3Y2U1MDg2NzIwIiwiaHR0cDovL3d3dy5lcXVpcGUuY29tL3dzLzIwMDkvMDkvaWRlbnRpdHkvY2xhaW1zL3Nlc3Npb25JZCI6IjI1MzE4MjkyNDczNDE4ODg4MTFDN0VDQy0wQUY0LTQzNTAtQkVGQi0wRDdDRTUwODY3MjAiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvY2xpZW50QWdlbnRJZCI6IjJlNGE0NTQ4LTJmY2YtNDI5Ny04OWUxLTE0YjdmODRkYWZkMSIsImV4cCI6MTY0ODE1NTg4NiwiaXNzIjoiQ05FVC5FcXVpcGUzLldlYi5XZWJBcGkiLCJhdWQiOiJBdWRpZW5jZSJ9.aE9_TRROtr_2w3Kgdgr-S_kYV8eECujBCx0z90n0AdY"

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    })

    //#region GET REQUEST
    // it("GET Care Folder Output Template Backup", () => {
    //     cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackup/GetConfigurationList', token, 15, 'cypress/fixtures/careFolderOutputTemplateBackup.json');
    // });

    // it("GET Associated Contexts", () => {
    //     cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9', token, 3, 'cypress/fixtures/associatedContexts.json');
    // });

    // it("GET Associated Report Launcher", () => {
    //     cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9', token, 2, 'cypress/fixtures/associatedLauncher.json');
    // });

    // it("GET Associated Schedules", () => {
    //     cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasSchedule/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9', token, 3, 'cypress/fixtures/associatedSchedules.json');
    // });
    //#endregion

    //#region POST REQUEST
    it("POST Care Folder Output Template Backup", () => {
        let body = {
            $id: "0",
            basePath: "TEST CYPRESS 1",
            careFolderOutputTemplateBackupNotificationTypeId: 1,
            careFolderOutputTemplateId: "d01d5ce4-71d2-e7fc-b2a5-8de6c0055309",
            deleteFolderOnFailure: true,
            endDate: "2022-03-23T23:00:00.000Z",
            fromDate: "('-7d.PreviousMonday.StartOfDay')",
            id: "C70001A1-4D36-A4B4-0C68-117C7359E164",
            includeDischargedHospitalizations: false,
            isEnabled: false,
            minimumFreeSpaceInBytes: null,
            name: "TEST CYPRESS 1",
            notifyToEmail: null,
            retentionCount: null,
            startDate: "2022-03-23T23:00:00.000Z",
            toDate: "('+0d')"
        };
        cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Save', token, body, "c70001a1-4d36-a4b4-0c68-117c7359e164",0);
    });

    it("POST Associated Contexts", () => {
        let body = {
            $id: "1",
            basePath: "Base Path",
            careFolderOutputTemplateBackupId: "c70001a1-4d36-a4b4-0c68-117c7359e164",
            entity: 10088,
            entityId: 10088,
            entityInstanceId: "70af513b-a5b1-43d6-8613-f8d872f707db",
            id: "c2b5b868-d772-7ae4-7aa3-f1bc65809d9a",
            isEnabled: true,
        };
        cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/Save', token, body, 'c70001a1-4d36-a4b4-0c68-117c7359e164',1);
    });

    it("POST Associated Report Launcher", () => {
        let body = {
            $id: "1",
                        careFolderOutputTemplateBackupId: "c70001a1-4d36-a4b4-0c68-117c7359e164",
                        customParameters: "Report Launcher",
                        filename: "Filename",
                        id: "385e7095-ac5b-6d1b-16e7-cdf6c1c6a14a",
                        reportLauncherId: "d3863d79-83cc-4bc1-9311-72ea5bbfeb3e",
        };
        cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Save', token, body,'c70001a1-4d36-a4b4-0c68-117c7359e164',1);
    });

    it("POST Associated Schedules", () => {
        let body = {
            $id: "1",
            careFolderOutputTemplateBackupId: "c70001a1-4d36-a4b4-0c68-117c7359e164",
            dayOfMonth: null,
            dayOfWeek: null,
            hour: null,
            id: "5d6b4a99-4d85-7268-f381-262cfc00589a",
            isEnabled: false,
            maxDegreeOfParallelism: 1,
            minute: null,
            month: null,
            retryCount: 1,
            timeoutInSeconds: 1,
            waitForPreviousToComplete: true,
        };
        cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasSchedule/Save', token, body,'c70001a1-4d36-a4b4-0c68-117c7359e164',1);
    });
    //#endregion

})