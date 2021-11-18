import Page from './page';

class ProfilePage extends Page {
    get profile() {return $('[href="/customer/info"]');}

}

export default new ProfilePage();