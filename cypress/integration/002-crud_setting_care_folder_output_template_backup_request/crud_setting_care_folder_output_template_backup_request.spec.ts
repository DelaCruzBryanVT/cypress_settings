import { Guid } from '../../utils/generateGuid';

describe('TEST HTTP REQUEST CARE FOLDER OUTPUT TEMPLATE BACKUP', () => {
    let idGuid = Guid.newGuid();
    let deleteValue = '2404f78a-e957-2491-4ea1-0c3c0a4215d7';
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
            token=start+" "+response.body.jwtToken.jwtToken
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

    
    it("GET Care Folder Output Template Backup", () => {
        cy.request({
            method: "GET",
            url: 'https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackup/GetConfigurationList',
            headers: headers
        }).then(function (response) {
            expect(response.body).have.length(15);
            cy.writeFile('cypress/fixtures/careFolderOutputTemplateBackup.json', response.body)
        });
        cy.pause();
    });

    it("POST Care Folder Output Template Backup", () => {
        let body = {
            $id: "0",
            basePath: "TEST CYPRESS HTTP REQUEST",
            careFolderOutputTemplateBackupNotificationTypeId: 1,
            careFolderOutputTemplateId: "d01d5ce4-71d2-e7fc-b2a5-8de6c0055309",
            deleteFolderOnFailure: true,
            endDate: "2022-03-23T23:00:00.000Z",
            fromDate: "('-7d.PreviousMonday.StartOfDay')",
            id: idGuid,
            includeDischargedHospitalizations: false,
            isEnabled: false,
            minimumFreeSpaceInBytes: null,
            name: "TEST CYPRESS HTTP REQUEST",
            notifyToEmail: null,
            retentionCount: null,
            startDate: "2022-03-23T23:00:00.000Z",
            toDate: "('+0d')"
        };
        cy.request({
            method: "POST",
            url: 'https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Save',
            body: body,
            headers: headers,
        }).then(function (response) {
                expect(response.body.id).eq(idGuid)
        });
        cy.pause();
    });

    it('GET ítem Care Folder Output Template Backup', () => {
        cy.request({
            method: "POST",
            url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Read",
            body: {
                $id: "0",
                id: idGuid
            },
            headers: headers,
        }).then(function (response) {
            expect(response.body.name).eq("TEST CYPRESS HTTP REQUEST")
            cy.pause();
        });
    })

    it(" Delete from table, Care Folder Output Template Backup", () => {
        cy.request({
            method: "POST",
            url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/DeleteMultiple",
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

    it(" Delete from Form, Care Folder Output Template Backup", () => {
        cy.request({
            method: "DELETE",
            url: "https://debugsite.myequipe2/webapi/api/v1/CareFolderOutputTemplateBackupSettings/Delete?id="+deleteValue,
            body: {
                $id: "0",
                ids: [{
                    $id: "2",
                    value: deleteValue
                }]
            },
            headers: headers,
        }).then(function (response) {
            expect(response.body).to.deep.equal(0);
            cy.pause();
        });
    });

})