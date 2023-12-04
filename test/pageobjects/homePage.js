import { $ } from '@wdio/globals'
import Page from './pageUrl.js';


class SecurePage extends Page {
   
    get productsPage () {
        return $('//span[@class="title"][contains(text(),"Products")]');
    }

}

export default new SecurePage();
