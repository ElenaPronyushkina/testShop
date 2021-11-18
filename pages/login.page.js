import Page from './page';

class LoginPage extends Page {
    get inputUsername() {return $('[id="Email"]');}
    get inputPassword() {return $('[id="Password"]');}
    get buttonSubmit() {return $('.login-button');}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonSubmit.click();
    }

    open() {
        return super.open('/login');
    }
}

export default new LoginPage();
