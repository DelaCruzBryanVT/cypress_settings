Cypress.Commands.add('getRequest', (url, headers, itemsResponse, fileName) => {
    cy.request({
        method: "GET",
        url: url,
        headers: headers
    }).then(function (response) {
        expect(response.body).have.length(itemsResponse);
        cy.writeFile(fileName, response.body)
    });

})

Cypress.Commands.add('postRequest', (url, headers, body, valueResponse, option) => {
    cy.request({
        method: "POST",
        url: url,
        body: body,
        headers: headers,
    }).then(function (response) {
        if (option == 1) {
            expect(response.body.careFolderOutputTemplateBackupId).eq(valueResponse)
        } else {
            expect(response.body.id).eq(valueResponse)
        }
    });
})
