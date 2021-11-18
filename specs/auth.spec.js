import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page'

describe('Auth', function () {
    it ('Succsessful log in', async function () {
        await LoginPage.open();
        await LoginPage.login('test@shop.com', '123456');
        await expect(ProfilePage.profile)
            .toBeDisplayed();
    });
});