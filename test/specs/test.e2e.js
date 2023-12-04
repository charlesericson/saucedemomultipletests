import LoginPage from '../pageobjects/loginPage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.addProduct()
        await LoginPage.shopCart()
        await LoginPage.checkOut()
        await LoginPage.yourInfo('Charles', 'Ericson', 84059)
        await LoginPage.continue()
        await LoginPage.finish()
        await LoginPage.backHome()
        await LoginPage.hamburgerMenu()
    })
})