//Tutorial 22: Casos de pruebas con Custom comandos
describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    //caso de prueba: probando validaciones con email y password incorrectos
    it('Login with incorrect email', ()=>{
        cy.login('pepita', 'pepita1')
        cy.fixture('login').then((login)=>{      
            cy.get(login.incorrectLoginBanner).should('contain', 'Invalid email address');
        })
    })
})