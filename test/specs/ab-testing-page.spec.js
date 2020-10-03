function findButton1(isButton1Found){
    console.log('findButton1()',findButton1)
    if(!isButton1Found){
        return $('#button1').isDisplayed();
    }
}

function findButton2(isButton2Found){
    console.log('findButton2()', isButton2Found)
    if(!isButton2Found){
        return $('#button2').isDisplayed();
    }
}

describe('My Bootcamp landing page', () => {
    it('should have both of the AB testing options', () => {
        let arrayOfOptions = [];
        let isButton1Found;
        let isButton2Found;

        browser.url('/complete-selenium-webdriver-with-java-bootcamp-landing-page-ab-pricing-tables/')
        isButton1Found = findButton1(isButton1Found);
        isButton2Found = findButton2(isButton2Found);
        browser.deleteAllCookies();

        browser.url('/complete-selenium-webdriver-with-java-bootcamp-landing-page-ab-pricing-tables/')
        browser.deleteAllCookies();

        browser.url('/complete-selenium-webdriver-with-java-bootcamp-landing-page-ab-pricing-tables/')
        browser.deleteAllCookies();

        browser.url('/complete-selenium-webdriver-with-java-bootcamp-landing-page-ab-pricing-tables/')
        browser.deleteAllCookies();

        let hasOption1 = arrayOfOptions.includes('my free preview');
        let hasOption2 = arrayOfOptions.includes('2nd option');
        expect(hasOption1).toEqual(hasOption2);
    });
});


