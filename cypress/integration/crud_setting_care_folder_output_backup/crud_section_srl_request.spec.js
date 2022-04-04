describe('TEST HTTP REQUEST SECTION ASSOCIATED SCHEDULE REPORT LAUNCHER',()=>{
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

    // it("GET Associated Report Launcher", () => {
    //     cy.getRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/GetConfigurationList?careFolderOutputTemplateBackupId=e4d23a31-1a6a-786e-f193-004e6d993ab9', headers, 2, 'cypress/fixtures/associatedLauncher.json');
    // });

    // it("POST Associated Report Launcher", () => {
    //     let body = {
    //         $id: "1",
    //         careFolderOutputTemplateBackupId: "c70001a1-4d36-a4b4-0c68-117c7359e164",
    //         customParameters: "Report Launcher",
    //         filename: "Filename",
    //         id: "385e7095-ac5b-6d1b-16e7-cdf6c1c6a14a",
    //         reportLauncherId: "d3863d79-83cc-4bc1-9311-72ea5bbfeb3e",
    //     };
    //     cy.postRequest('https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Save', headers, body, 'c70001a1-4d36-a4b4-0c68-117c7359e164', 1);
    // });

     // it('GET ítem Associated Report Launcher', () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Read",
    //         body: {
    //             $id: "0",
    //             id: "9276340a-02d1-322a-6ea1-ca5255d44754"
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body.reportLauncherId).eq('d3863d79-83cc-4bc1-9311-72ea5bbfeb3e')
    //         cy.pause()
    //     });
    // })

     // it(" Delete from table, Report Launcher", () => {
    //     cy.request({
    //         method: "POST",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/DeleteMultiple",
    //         body: {
    //             $id: "0",
    //             ids: [{
    //                $id: "2",
    //                 value: "8111bb92-e098-1306-5d2f-9c11851fa489"
    //             }]
    //         },
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body).to.deep.equal(0);
    //     });
    // });

    // it(" Delete from Form, Report Launcher", () => {
    //     cy.request({
    //         method: "DELETE",
    //         url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Delete?id="+idGuid,
    //         body: {
                //  id: idGuid
            //},
    //         headers: headers,
    //     }).then(function (response) {
    //         expect(response.body).to.deep.equal(0);
    //     });
    // });

})