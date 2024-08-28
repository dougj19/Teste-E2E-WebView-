Cypress.Commands.add('authBack', () => {
    cy.encryptData(Cypress.env('username')).then((encryptedUsername) => {
        cy.encryptData(Cypress.env('password')).then((encryptedPassword) => {
            cy.request({
                method: 'POST',
                url: Cypress.env('timSmartBackEndUrl') + 'auth/login',
                body: {
                    "registration": encryptedUsername,
                    "password": encryptedPassword
                }
            }).then((response) => {
                const encryptedToken = response.body.access_token;
                cy.decryptData(encryptedToken).then((token) => {
                    Cypress.env('authToken', token);
                });
            });
        });
    });
});

