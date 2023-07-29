const loginPageObjs = require("../../orange-hrm-demo/page-object/login.page");
beforeEach(() => {
    // open the application and verify elements
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

afterEach(() => {
    // open the application and verify elements
    cy.reload();
});
describe("Registration Verification for User", () => {

    it("Check Login Pages", () => {
        loginPageObjs.loginFunctionality();
    });

    it("Check Login Pages for wrong data", () => {
        loginPageObjs.loginWrongFunctionality();
    });

    it("Check Login Pages verification", () => {
        loginPageObjs.loginFunctionalityJson("username", "password");
    });
});



















































//Md.Salman Arefin.