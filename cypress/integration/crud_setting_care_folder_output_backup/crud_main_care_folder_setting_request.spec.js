import { Guid } from 'guid-typescript';

describe('TEST HTTP REQUEST CARE FOLDER OUTPUT TEMPLATE BACKUP', () => {
    let idGuid = Guid.create().value
    let token = "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2EiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvaWRTZXNzaW9uIjoiNGE0MjM1MjctMjI2OC00MWU2LThkMWEtNTBjYWIzZTMzZWVmIiwiaHR0cDovL3d3dy5lcXVpcGUuY29tL3dzLzIwMDkvMDkvaWRlbnRpdHkvY2xhaW1zL3Nlc3Npb25JZCI6IjE2NTc2ODczMDMxNTc5NjQ0QTQyMzUyNy0yMjY4LTQxRTYtOEQxQS01MENBQjNFMzNFRUYiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvY2xpZW50QWdlbnRJZCI6IjZiNzI5NDVmLWI1MGItNzY1Ny1mZjU3LWE1ZTVhZDc5ZDlmNiIsImV4cCI6MTY0ODg0MTg0NywiaXNzIjoiQ05FVC5FcXVpcGUzLldlYi5XZWJBcGkiLCJhdWQiOiJBdWRpZW5jZSJ9.TAzIpzYs-z2AQYb4cd7NbNowWBhhprSXERY7WWrvucE";
    let headers = {
        "accept": "application/json, text/plain",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "es,it-IT;q=0.9,it;q=0.8,en-US;q=0.7,en;q=0.6",
        "appversion": "1.58.0.22",
        "Authorization": token,
        "clienttabid": "7519A63F-9D18-F8FE-CC40-ECFB920AAFBD",
        "cnet.cumap3.web.clientagentid": "99188DB9-4AEB-6FCC-28B2-D0D305A1A503",
        "cnet.cumap3.web.clientapplicationid": "10001",
        "cookie": "CNET.Cumap3.Web.ClientAgentCookie=C56A57FB-B3A7-0F8D-17A7-498A5F45257E; ai_user=pgEMG|2022-02-22T13:25:15.071Z",
        "operationrequestid": "1C6645E8-4343-EB61-98A6-2992707F8DB0",
        "referer": "https://debugsite.myequipe2/app/",
        "sec-ch-ua": ' " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "Windows",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
    }

    beforeEach(() => {
        cy.login();
        cy.wait(4000);
    })

    it("GET Care Folder Output Template Backup", () => {
        cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackup/GetConfigurationList', headers, 15, 'cypress/fixtures/careFolderOutputTemplateBackup.json');
    });

    // it("POST Care Folder Output Template Backup", () => {
    //     let body = {
    //         $id: "0",
    //         basePath: "TEST CYPRESS HTTP REQUEST",
    //         careFolderOutputTemplateBackupNotificationTypeId: 1,
    //         careFolderOutputTemplateId: "d01d5ce4-71d2-e7fc-b2a5-8de6c0055309",
    //         deleteFolderOnFailure: true,
    //         endDate: "2022-03-23T23:00:00.000Z",
    //         fromDate: "('-7d.PreviousMonday.StartOfDay')",
    //         id: "C70001A1-4D36-A4B4-0C68-117C7359E164",
    //         includeDischargedHospitalizations: false,
    //         isEnabled: false,
    //         minimumFreeSpaceInBytes: null,
    //         name: "TEST CYPRESS 1",
    //         notifyToEmail: null,
    //         retentionCount: null,
    //         startDate: "2022-03-23T23:00:00.000Z",
    //         toDate: "('+0d')"
    //     };
    //     cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Save', headers, body, "c70001a1-4d36-a4b4-0c68-117c7359e164", 0);
    // });

    // it('GET ítem Care Folder Output Template Backup', () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Read",
    //         body: {
    //             $id: "0",
    //             id: "7ee1b53c-5714-31a1-3b5c-6d9e147f3d27"
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body.name).eq("Backup ALPHA BETA")
    //         cy.pause()
    //     });
    // })

    // it(" Delete from table, Care Folder Output Template Backup", () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/DeleteMultiple",
    //         body: {
    //             $id: "0",
    //             ids: [{
    //                 $id: "2",
    //                 value: "1dd3cf07-c9c0-7e5e-a3b0-d2aa94a6fb2e"
    //             }]
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body).to.deep.equal(0);
    //     });
    // });

    // it(" Delete from Form, Care Folder Output Template Backup", () => {
    //     cy.request({
    //         method: "DELETE",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Delete?id="+idGuid,
    //         body: {
    //             $id: "0",
    //             ids: [{
    //                 $id: "2",
    //                 value: idGuid
    //             }]
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body).to.deep.equal(0);
    //     });
    // });

})