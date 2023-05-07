import { USERS } from "../config/users";
import loginPage from "../page-objects/login.page";
import needhelpPage from "../page-objects/needhelp.page";
import profilePage from "../page-objects/profile.page";

describe ('Hudle Login-Invalid User/Password scenarios', () => {
    beforeEach(() => {
        cy.visit('https://www.hudl.com/login');
        loginPage.username.type('fskdf');
        loginPage.loginBtn.click();
      });
    it('Should see error when incorrect username or password provided', () => {
        loginPage.errorMsg.should('contain', "We didn't recognize that email and/or password.");
        loginPage.needhelp.should('be.visible');
        
    })

    it('Should see help messages and verify titles in password reset page', () => {
        loginPage.needhelp.click();
        needhelpPage.warningMessageEmail.invoke('text').then(text => {
            expect(text.trim()).contains(needhelpPage.warningMessage1);
          });
          needhelpPage.warningMessagecopy.invoke('text').then(text => {
            expect(text.trim()).contains(needhelpPage.warningMessage2);
          });
          needhelpPage.needhelptext.invoke('text').then(text => {
            expect(text.trim()).contains(needhelpPage.warningMessage3);
          });
         
          needhelpPage.emailHeadr.should('contain', needhelpPage.emailHeaderText);
          needhelpPage.forgotEmailHeadr.should('contain', needhelpPage.headerText1);
          needhelpPage.reciveEmailHeadr.should('contain', needhelpPage.headerText2);
          needhelpPage.troubleEmailText.should('contain', needhelpPage.headerText3);
          needhelpPage.resetPwdText.should('contain', needhelpPage.headerText4);
          needhelpPage.loginHelpHeader.should('contain', needhelpPage.headerText5);
        
    })

    it('Should see error when email format Error and email does not exists error', () => {
        loginPage.needhelp.click();
        needhelpPage.passwordResetInput.type('djfghd');
        needhelpPage.resetPwdBtn.click();
        needhelpPage.emailError.should('contain', needhelpPage.emailFormatError);
        needhelpPage.passwordResetInput.clear();
        needhelpPage.passwordResetInput.type('test@googlehudl.com');
        needhelpPage.resetPwdBtn.click();
        needhelpPage.emailError.should('contain', needhelpPage.emaildontExistError);

        
    })
    it('Should able to request password reset link', () => {
        loginPage.needhelp.click();
        needhelpPage.passwordResetInput.clear();
        needhelpPage.passwordResetInput.type('test@google.com');
        needhelpPage.resetPwdBtn.click(); 
        needhelpPage.checkEmailText.should('contain', needhelpPage.checkEmailmsg);   
    })
})

    describe ('Hudle Login-Valid Username', () => {
        beforeEach(() => {
           loginPage.login(USERS.USERNAME,USERS.PASSWORD)
          });

    it('Should able to Login with valid user details', () => {
        profilePage.profileTitle.click();
        profilePage.profileName.contains('Suneela');
        
    })
 })
