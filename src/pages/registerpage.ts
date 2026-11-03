import {type Page,type Locator} from "@playwright/test";
export class RegisterPage{
    page:Page;
    emailaddress:Locator;
    password:Locator;
    confirmPassword:Locator;
    registerButton:Locator ;

    constructor(page:Page){
        this.page = page;
        this.emailaddress=page.getByTestId('register-email');
        this.password=page.getByPlaceholder('Create a password');
        this.confirmPassword=page.getByPlaceholder('Confirm your password');
        this.registerButton=page.getByRole('button', { name: 'Register' });
    }

    async registeruser(email:string,password:string,confirmPassword:string):Promise<void>{
        await this.emailaddress.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.registerButton.click();
        await this.page.getByText('Registration successful').waitFor({state:'visible'});
    }

    async goToLoginPage():Promise<void>{
        await this.page.locator('a[href="/practice-login-form"]>button[class*="dark"]').click();
    }
}