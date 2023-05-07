class needHelpPage {
    readonly warningMessage1 = "A coach must first add you to the team's roster and include your email address. You should then receive an email from Hudl with instructions to set up your account."
    readonly warningMessage2 = "First things first: check your junk or spam folder. If it's not there, contact your coach to make sure your email was entered correctly on the Hudl roster."
    readonly warningMessage3 = "Shoot an email to support@hudl.com and we'll lend a hand."
    readonly headerText1 = "Not sure which email address to use?"
    readonly headerText2 = "Didn't receive that email from Hudl?"
    readonly headerText3 = "Still having trouble?"
    readonly emailHeaderText = "Email Help"
    readonly headerText4 = "Let’s reset your password";
    readonly headerText5 = "Login Help";
    readonly emailFormatError = "That isn't a valid email address.  Make sure to use the email@domain.com format."
    readonly emaildontExistError = "That email address doesn't exist in Hudl. Check with your coach to ensure they have the right email address for you."
   readonly checkEmailmsg = "Click the link in the email to reset your password.If you don't see the email, check your junk or spam folders."

    get emailHeadr(){
        return cy.get('[data-qa-id="email-help-headline"]');
    }
    get troubleEmailText(){
        return cy.get('[data-qa-id="still-trouble-headline"]');
    }
    get forgotEmailHeadr(){
        return cy.get('[data-qa-id="forgot-email-headline"]');
    }
    get reciveEmailHeadr(){
        return cy.get('[data-qa-id="didnt-receive-headline"]');
    }
    get loginHelpHeader() {
        return cy.get('[data-qa-id="login-help-headline"]')
    }
    get resetPwdText() {
        return cy.get('[data-qa-id="lets-reset-password-headline"]')
    }
    get resetPwdBtn() {
        return cy.get('[data-qa-id="password-reset-submit-btn"]');
    }
    get warningMessageEmail(){
        return cy.get('[data-qa-id="forgot-email-copy"]');
    }
    get warningMessagecopy(){
        return cy.get('[data-qa-id="didnt-receive-copy"]');
    }
    get needhelptext() {
        return cy.get('[data-qa-id="still-trouble-copy"]')
    }

    get emailError() {
        return cy.get('[data-qa-id="password-reset-error-display"]');
    }

    get passwordResetInput() {
        return cy.get('[data-qa-id="password-reset-input"]');
    }

    get checkEmailText() {
        return cy.get('.uni-form--large');
    }
  }
  export default new needHelpPage();