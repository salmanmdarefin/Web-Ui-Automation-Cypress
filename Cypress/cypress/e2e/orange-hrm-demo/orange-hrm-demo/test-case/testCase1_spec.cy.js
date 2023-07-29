const loginPageObjs = require("../../orange-hrm-demo/page-object/login.page");
const homePageObjs = require("../../orange-hrm-demo/page-object/home.page");
const myInfoPageObjs = require("../../orange-hrm-demo/page-object/myInfo.page");
const testData = require("../../../fixtures/credentials.json");

beforeEach(() => {
    // open the application and verify elements (Salman Arefin)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

describe("Login Verification for User", () => {
    it("Check Login Pages for Wrong credentials", () => {
        loginPageObjs.loginWrongFunctionality();
    });

    it("Check Login Pages for right credentials", () => {
        loginPageObjs.loginFunctionality();
        cy.wait(3000);
        homePageObjs.homePageAssertions();
    });
});

describe("Update of My Info", () => {
    it.only("Add information of user", () => {
        //loginPageObjs.loginFunctionality();
        loginPageObjs.loginFunctionalityJson(testData.username, testData.password);
        homePageObjs.myInfoMenuClicked();
        myInfoPageObjs.addMyInfo();
        //myInfoPageObjs.downloadFile();
        //myInfoPageObjs.fileRemove();
        //myInfoPageObjs.fileRead();
    });
});
































//Md.Salman Arefin.