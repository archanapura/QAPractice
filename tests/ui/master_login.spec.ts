import {test,expect} from "../../src/fixtures/base-fixtures.js";



test("Master login flow", async ({ qaPracticePage, masterlogin,testUsers}) => {
await qaPracticePage.navigate();
await qaPracticePage.clickOnPracticeButton();
console.log("Clicked on practice button successfully");
await masterlogin.login(testUsers.validUser.username, testUsers.validUser.password);


});