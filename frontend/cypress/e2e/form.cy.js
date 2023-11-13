// form.cy.js
describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3003/")
    });
    
    const inputUsernameText = 'Torien Stanley'

    it('should type into a text input and display the value', () => {
        cy.get('#username').type(inputUsernameText);
        cy.get('#username').should('have.value', inputUsernameText);
    })
    
    it('should type into a text input and display the value', () => {
        cy.get('#favLanguage').check();
        cy.get('#favLanguage').should('be.checked')
    })
    
    it('should select an option from the dropdown', () => {
        cy.get('#favFood').select('pizza');
        cy.get('#favFood').should('have.value', 'pizza');
    })

    it('should type into a text input and display the value', () => {
        cy.get('#agreement').check();
        cy.get('#agreement').should('be.checked')
    })

    it('should submit the form', () => {
        cy.get('#username').type(inputUsernameText);
        cy.get('#favLanguage').check();
        cy.get('#favFood').select('pizza');
        cy.get('#agreement').check();
        cy.get('input[type="submit"]').click();
    })
})


