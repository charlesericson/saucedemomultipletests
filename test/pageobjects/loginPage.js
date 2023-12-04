import { $ } from '@wdio/globals'
import Page from './pageUrl.js';
import homePage from '../pageobjects/homePage.js'


class LoginPage extends Page {
   
    get loginUsername () {
        return $('#user-name');
    }

    get loginPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('//input[@value="Login"]');
    }

    get addToCart () {
        return $('[name="add-to-cart-sauce-labs-backpack"]')
    }

    get shoppingCart () {
        return $('.shopping_cart_link')
    }

    get checkOutBtn () {
        return $('[data-test="checkout"]')
    }

    get firstName () {
        return $('#first-name')
    }

    get lastName () {
        return $('#last-name')
    }

    get postalCode () {
        return $('#postal-code')
    }

    get continueBtn () {
        return $('[type="submit"]')
    }

    get finishBtn () {
        return $('[name="finish"]')
    }

    get backHomeBtn () {
        return $('#back-to-products')
    }

    get hamMenu () {
        return $('#react-burger-menu-btn')
    }

    get logOutBtn () {
        return $('#logout_sidebar_link')
    }
   
    async login (username, password) {
        await this.loginUsername.setValue(username);
        await this.loginPassword.setValue(password);
        await this.loginButton.click();
        await expect(homePage.productsPage).toBeExisting();
    }

    async yourInfo (first, last, postal) {
        await this.firstName.setValue(first)
        await this.lastName.setValue(last)
        await this.postalCode.setValue(postal)
    }

    async addProduct () {
        await this.addToCart.click();
    }

    async shopCart () {
        await this.shoppingCart.click();
    }

    async checkOut () {
        await this.checkOutBtn.click();
    }

    async continue () {
        await this.continueBtn.click()
    }

    async finish () {
        await this.finishBtn.click()
    }

    async backHome () {
        await this.backHomeBtn.click()
    }
    
    async hamburgerMenu () {
        await this.hamMenu.click()
        await this.logOutBtn.waitForClickable ({setTimeout: 300});
        await this.logOutBtn.click();
    }

    // async logOut () {
    //     await this.logOutBtn.waitforClickable ({setTimeout: 300});
    //     await this.logOutBtn.click()
    // }
   
    open () {
        return super.open('');
    }
}

export default new LoginPage();
