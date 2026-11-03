
import { test, expect } from "../../src/fixtures/page-fixtures.js";



test("Navigate toLogin Automation script practice page",async({qaPracticePage})=>{
    await qaPracticePage.navigate();
    await qaPracticePage.clickOnPracticeButton();
    console.log("Clicked on practice button successfully");
   
})
