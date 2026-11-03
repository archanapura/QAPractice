import { type Locator, type Page } from "@playwright/test";

export class QaPracticePage {
    page:Page ;
    loginAutomation: Locator
    constructor(page:Page)
    {
        this.page = page;
      
        this.loginAutomation = page.getByText('Login Automation').locator('..').getByRole('button', { name: 'Start practising →' });
    }

    async navigate(): Promise<void> {
    await this.page.goto("/practice-page-selection");
  }
    async clickOnPracticeButton(){
        await this.loginAutomation.click();

    }
}