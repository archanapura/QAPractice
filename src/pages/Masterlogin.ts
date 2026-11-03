import {type Page,type Locator,expect} from '@playwright/test';
export class Masterlogin{
    page:Page;
    useremail:Locator;
    userpassword:Locator;
    signInButton:Locator;
    loginSuccessMessage:Locator;

    constructor(page:Page){
        this.page = page;
        this.useremail=page.getByPlaceholder('Enter your email');
        this.userpassword=page.getByPlaceholder('Enter your password');
        this.signInButton=page.getByTestId('login-submit');
        this.loginSuccessMessage=page.getByTestId('login-success');
    }


    async login(email:string,password:string):Promise<void>{
        await this.useremail.fill(email);
        await this.userpassword.fill(password);
        await this.signInButton.click();
        await this.loginSuccessMessage.waitFor({state:'visible'});
        await expect(this.loginSuccessMessage).toBeVisible();
    }

    async clickOnRegisterLink():Promise<void>{
        await this.page.getByTestId('login-register').click();
    }
}