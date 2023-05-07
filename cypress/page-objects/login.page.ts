
class LoginPage {
    get username() {
      return cy.get('input[id="email"]');
    }
    get password() {
        return cy.get('input[id="password"]');
      }
    get loginBtn() {
        return cy.get('[type="submit"]');
    }
    get errorMsg() {
        return cy.get('[data-qa-id="error-display"]');
    }
    get needhelp() {
        return cy.get('a.uni-link').contains('Need help?').eq(0);
    }
    login(username,password) {
        cy.visit('https://www.hudl.com/login');
        this.username.type(username);
        this.password.type(password);
        this.loginBtn.click();
    }
  }
  export default new LoginPage();