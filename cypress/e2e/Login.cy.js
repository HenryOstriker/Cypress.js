describe('Форма логина и пароля', function () {

    it('Правильный пароль, правильный логин', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click ();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click ();

        cy.contains('Такого логина или пароля нет').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        cy.get('#exitMessageButton > .exitIcon').click();
        cy.contains('Форма логина').should('be.visible');
        })
        it('Неверный логин, верный пароль', function () {
            cy.visit('https://login.qa.studio/');
    
            cy.get('#mail').type('german@dolnikovv.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click ();
    
            cy.contains('Такого логина или пароля нет').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
            cy.get('#exitMessageButton > .exitIcon').click();
            cy.contains('Форма логина').should('be.visible');
            })
        it('Логин без @', function () {
            cy.visit('https://login.qa.studio/');
    
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio2');
            cy.get('#loginButton').click ();
    
            cy.contains('Нужно исправить проблему валидации').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible');
            })
            it('Забыли пароль?', function () {
                cy.visit('https://login.qa.studio/');
        
                cy.get('#forgotEmailButton').click();
                cy.get('#mailForgot').type('german@dolnikov.ru');
                cy.get('#restoreEmailButton').click();
        
                cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                })
                it('Приведение к строчным буквам в логине', function () {
                    cy.visit('https://login.qa.studio/');
                    cy.get('#mail').type('GerMan@Dolnikov.ru');
                    cy.get('#pass').type('iLoveqastudio1');
                    cy.get('#loginButton').click ();
                    cy.contains('Авторизация прошла успешно').should('be.visible');
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
                 })

})