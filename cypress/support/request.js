Cypress.Commands.add('getRequest', (url,token,itemsResponse,fileName) => {
    cy.request({
        method: "GET",
        url: url,
        headers: {
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
    }).then(function (response) {
        console.log(response)
        expect(response.body).have.length(itemsResponse);
        cy.writeFile(fileName, response.body)
    });
    
})
