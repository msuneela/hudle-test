class ProfilePage {
    get profileTitle(){
        return cy.get('a').contains('View Profile');
    }
    get profileName(){
        return cy.get('[class="uni-headline--1"]')
    }
}
export default new ProfilePage();