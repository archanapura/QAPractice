import { test, expect } from "../../src/fixtures/base-fixtures.js";


test.only("Register to the application",async({qaPracticePage, masterlogin, registerPage,registerdata})=>{
    await qaPracticePage.navigate();
    await qaPracticePage.clickOnPracticeButton();
    console.log("Clicked on practice button successfully");
    await masterlogin.clickOnRegisterLink();
    await registerPage.registeruser(
  registerdata.emailaddress,
  registerdata.password,
  registerdata.confirmPassword
);
})