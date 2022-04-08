import { Guid } from '../../utils/generateGuid';

describe('TEST HTTP REQUEST SECTION ASSOCIATED SCHEDULE REPORT LAUNCHER', () => {
    let idGuid = Guid.newGuid();
    let deleteValue = '2236ab60-868e-b1b2-ce53-92bd12fc3226';
    let start = "Bearer";
    let token;
    var headers;


    beforeEach(() => {
        cy.request({
            method: "POST",
            url: "https://debugsite.myequipe2/webapi/api/v1/Session/Login",
            body: {
                $id: "0",
                clientApplication: 10001,
                cultureInfo: "it",
                password: "Qwerty.1234",
                persistent: false,
                sessionTokens: [],
                username: "ca",
            },
            headers: {
                "accept": "application/json, text/plain",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "es,it-IT;q=0.9,it;q=0.8,en-US;q=0.7,en;q=0.6",
                "appversion": "1.58.0.22",
                "clienttabid": "7519A63F-9D18-F8FE-CC40-ECFB920AAFBD",
                "cnet.cumap3.web.clientagentid": "99188DB9-4AEB-6FCC-28B2-D0D305A1A503",
                "cnet.cumap3.web.clientapplicationid": "10001",
                "content-length": "135",
                "content-type": "application/json",
                "cookie": "CNET.Cumap3.Web.ClientAgentCookie=C56A57FB-B3A7-0F8D-17A7-498A5F45257E; ai_user=pgEMG|2022-02-22T13:25:15.071Z",
                "operationrequestid": "1C6645E8-4343-EB61-98A6-2992707F8DB0",
                "origin": "https://debugsite.myequipe2",
                "referer": "https://debugsite.myequipe2/app/",
                "sec-ch-ua": ' " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "Windows",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
            },
        }).then(function (response) {
            token = start + " " + response.body.jwtToken.jwtToken
            headers = {
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
        });
    });


    it("GET Associated Report Launcher", () => {
        cy.request({
            method: "GET",
            url: 'https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/GetConfigurationList?careFolderOutputTemplateBackupId=7ee1b53c-5714-31a1-3b5c-6d9e147f3d27',
            headers: headers
        }).then(function (response) {
            expect(response.body).have.length(1);
            cy.writeFile('cypress/fixtures/associatedLauncher.json', response.body)
        });
        cy.pause();
    });

    it("POST Associated Report Launcher", () => {
        let body = {
            $id: "1",
            careFolderOutputTemplateBackupId: "7ee1b53c-5714-31a1-3b5c-6d9e147f3d27",
            customParameters: "Report Launcher",
            filename: "Filename",
            id: idGuid,
            reportLauncherId: "f1792f3c-8754-447a-9a87-b11e2bf0d07f"
        };
        cy.request({
            method: "POST",
            url: 'https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Save',
            body: body,
            headers: headers,
        }).then(function (response) {
                expect(response.body.careFolderOutputTemplateBackupId).eq('7ee1b53c-5714-31a1-3b5c-6d9e147f3d27')
        });
        cy.pause();
    });

    it('GET ítem Associated Report Launcher', () => {
        cy.request({
            method: "POST",
            url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Read",
            body: {
                $id: "0",
                id: idGuid
            },
            headers: headers,
        }).then(function (response) {
            console.log(response)
            expect(response.body.reportLauncherId).eq('f1792f3c-8754-447a-9a87-b11e2bf0d07f')
            cy.pause();
        });
    })

    it(" Delete from table, Report Launcher", () => {
        cy.request({
            method: "POST",
            url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/DeleteMultiple",
            body: {
                $id: "0",
                ids: [{
                    $id: "2",
                    value: idGuid
                }]
            },
            headers: headers,
        }).then(function (response) {
            expect(response.body).to.deep.equal(0);
            cy.pause();
        });
    });

    it(" Delete from Form, Report Launcher", () => {
        cy.request({
            method: "DELETE",
            url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupHasReportLauncher/Delete?id=" + deleteValue,
            body: {
                id: idGuid
            },
            headers: headers,
        }).then(function (response) {
            expect(response.body).to.deep.equal(0);
            cy.pause();
        });
    });

})