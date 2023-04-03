context('RakaminProject', () => {
  beforeEach(() => {
    cy.visit('https://web-staging.rakamin.com/')
  })

  describe('go to rakamin staging web and login', () => {
    it('verify that logo is visible', () => {
      cy.get('a[data-cy=rakamin-logo]').should('be.visible');
    })

    //note: I already made this account manually on web stagin rakamin, so if the web staging is on data reset this scenario will fail
    it('login with existing account', () => {
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").should('be.visible');
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
      cy.get('button[data-cy=login-page-button').should('be.visible');
      cy.contains('Login').click({force: true});
      cy.get('input[name=email]').type("ayamgoreng@mailinator.com");
      cy.get('input[name=password]').type("ayamgorengenaksekali");
      cy.get('button[data-cy=login-submit-button').click();
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
      cy.get('span').should('contain', 'Ayam');
    })

    it('login with false password', () => {
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").should('be.visible');
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
      cy.get('button[data-cy=login-page-button').should('be.visible');
      cy.contains('Login').click({force: true});
      cy.get('input[name=email]').type("ayamgoreng@mailinator.com");
      cy.get('input[name=password]').type("ayamgoreng");
      cy.get('button[data-cy=login-submit-button').click();
      cy.get('div').should('contain', 'Kata sandi anda salah');
    })
    
    it('login with unregistered email', () => {
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").should('be.visible');
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
      cy.get('button[data-cy=login-page-button').should('be.visible');
      cy.contains('Login').click({force: true});
      cy.get('input[name=email]').type("ayamgorengsatu@mailinator.com");
      cy.get('input[name=password]').type("ayamgoreng");
      cy.get('button[data-cy=login-submit-button').click();
      cy.get('div').should('contain', 'Email ini belum terdaftar sebagai akun di Rakamin Academy.');
    })

    it('login with wrong email format', () => {
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").should('be.visible');
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
      cy.get('button[data-cy=login-page-button').should('be.visible');
      cy.contains('Login').click({force: true});
      cy.get('input[name=email]').type("ayamgoreng.mailinator.com");
      cy.get('input[name=password]').type("ayamgoreng");
      cy.get('button[data-cy=login-submit-button').click();
      cy.get('div').should('contain', 'Alamat email tidak valid');
    })

    it('login with empty email', () => {
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").should('be.visible');
      cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
      cy.get('button[data-cy=login-page-button').should('be.visible');
      cy.contains('Login').click({force: true});
      cy.get('input[name=password]').type("ayamgoreng");
      cy.get('button[data-cy=login-submit-button').click();
      cy.get('div').should('contain', 'Alamat email tidak boleh kosong');
    })

    it('login with empty password', () => {
        cy.get("img[src='/assets/hamburger.d750d25a.svg']").should('be.visible');
        cy.get("img[src='/assets/hamburger.d750d25a.svg']").click();
        cy.get('button[data-cy=login-page-button').should('be.visible');
        cy.contains('Login').click({force: true});
        cy.get('input[name=email]').type("ayamgoreng@mailinator.com");
        cy.get('button[data-cy=login-submit-button').click();
        cy.get('div').should('contain', 'Kata sandi tidak boleh kosong');
      })
  })

})