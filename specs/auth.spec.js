import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page'

describe('Auth', function () {

    beforeEach(async function (){
        await LoginPage.open();
    });

    it ('Succsessful log in', async function () {
        await LoginPage.login(process.env.LOGIN, process.env.PASSWORD);
        await expect(ProfilePage.profile)
            .toBeDisplayed();
    });

    it ('Log in with not registered email', async function () {
        await LoginPage.login('testInvalid@shop.com', 'Invalid');
        await expect(LoginPage.notification)
            .toHaveText('Login was unsuccessful. Please correct the errors and try again.');
        await expect(LoginPage.notificationCustomer)
            .toHaveText('No customer account found');
    });

    it ('Log in with invalid password', async function () {
        await LoginPage.login(process.env.LOGIN, '12Invalid');
        await expect(LoginPage.notification)
            .toHaveText('Login was unsuccessful. Please correct the errors and try again.');
        await expect(LoginPage.notificationCustomer)
            .toHaveText('The credentials provided are incorrect');
    });

    it ('Log in with invalid email', async function () {
        await LoginPage.login('test', '12Invalid');
        await expect(LoginPage.invalidEmail)
            .toHaveText('Please enter a valid email address.');
    });

});