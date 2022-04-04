import { Guid } from 'guid-typescript';

describe('TEST HTTP REQUEST SECTION ASSOCIATED CONTEXT', () => {
    let idGuid = Guid.create().value
    let token = "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiY2EiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvaWRTZXNzaW9uIjoiYzU4YWM1MDQtOWIwYS00Nzc2LTg2ODAtMTc5MzcyMjE0ZTlmIiwiaHR0cDovL3d3dy5lcXVpcGUuY29tL3dzLzIwMDkvMDkvaWRlbnRpdHkvY2xhaW1zL3Nlc3Npb25JZCI6IjUzMDU5NDg2NTgxODExNzFDNThBQzUwNC05QjBBLTQ3NzYtODY4MC0xNzkzNzIyMTRFOUYiLCJodHRwOi8vd3d3LmVxdWlwZS5jb20vd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvY2xpZW50QWdlbnRJZCI6IjRjMWZmZDExLTVhOWQtMWVlMy03ZGUxLTI0NmFmNTliOTE1YyIsImV4cCI6MTY0ODgxNTY5NywiaXNzIjoiQ05FVC5FcXVpcGUzLldlYi5XZWJBcGkiLCJhdWQiOiJBdWRpZW5jZSJ9.67JdOMbGNyXYkMhgfZiBT_zq-cH50_T547dJMCdZLNk";
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

    // it("GET Associated Contexts", () => {
    //     cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9', headers, 3, 'cypress/fixtures/associatedContexts.json');
    // });

    // it("POST Associated Contexts", () => {
    //     let body = {
    //         $id: "1",
    //         basePath: "Base Path",
    //         careFolderOutputTemplateBackupId: "c70001a1-4d36-a4b4-0c68-117c7359e164",
    //         entity: 10088,
    //         entityId: 10088,
    //         entityInstanceId: "70af513b-a5b1-43d6-8613-f8d872f707db",
    //         id: "c2b5b868-d772-7ae4-7aa3-f1bc65809d9a",
    //         isEnabled: true,
    //     };
    //     cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/Save', headers, body, 'c70001a1-4d36-a4b4-0c68-117c7359e164', 1);
    // });

    // it('GET ítem Associated Context', () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/Read",
    //         body: {
    //             $id: "0",
    //             id: "258d5106-4bb7-fe4c-75a7-9da988ca16e7"
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body.entityId).eq(10088)
    //         cy.pause()
    //     });
    // })


    // it(" Delete from table, Associated Context", () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/DeleteMultiple",
    //         body: {
    //             $id: "0",
    //             ids: [{
    //                 $id: "2"
    //                 value: "7cc22b30-20c4-3917-b025-ccff9b5aa61a"
    //             }]
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body).to.deep.equal(0);
    //     });
    // });

    // it(" Delete from Form, Associated Context", () => {
    //     cy.request({
    //         method: "DELETE",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasContext/Delete?id="+idGuid,
    //         body: {
                //  id: idGuid
            //},
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body).to.deep.equal(0);
    //     });
    // });

})