const {Helpers} = require('../helpers');

describe('AB testing landing page', () => {
    it('has 2 AB testing variations', () => {
        let abTestingUrl = 'selenium-java-ab-testing';
        let isButton1Found = false;
        let isButton2Found = false;

        browser.url(abTestingUrl)
        isButton1Found = Helpers.findButton1(isButton1Found);
        isButton2Found = Helpers.findButton2(isButton2Found);
        console.log('isButton1Found,isButton2Found',isButton1Found,isButton2Found)
        browser.deleteAllCookies();

        browser.url(abTestingUrl)
        isButton1Found = Helpers.findButton1(isButton1Found);
        isButton2Found = Helpers.findButton2(isButton2Found);
        console.log('isButton1Found,isButton2Found',isButton1Found,isButton2Found)
        browser.deleteAllCookies();

        browser.url(abTestingUrl)
        isButton1Found = Helpers.findButton1(isButton1Found);
        isButton2Found = Helpers.findButton2(isButton2Found);
        console.log('isButton1Found,isButton2Found',isButton1Found,isButton2Found)
        browser.deleteAllCookies();

        browser.url(abTestingUrl)
        isButton1Found = Helpers.findButton1(isButton1Found);
        isButton2Found = Helpers.findButton2(isButton2Found);
        console.log('isButton1Found,isButton2Found',isButton1Found,isButton2Found)
        browser.deleteAllCookies();

        expect(isButton1Found).toBeTruthy();
        expect(isButton2Found).toBeTruthy();
    });
});


