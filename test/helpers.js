class Helpers {
    /**
     * Check if button1 is displayed
     *
     * @returns {boolean}
     */
    static findButton1() {
        return $('#button1').isDisplayed();
    }
    /**
     * Check if button2 is displayed
     *
     * @returns {boolean}
     */
    static findButton2() {
        return $('#button2').isDisplayed();
    }
    /**
     * Load a url and wait for fixed time for the animation is done
     */
    static loadUrl() {
        browser.url('https://www.ultimateqa.com/selenium-java-ab-testing');
        // Wait for the page to be loaded, just 1 second for now due to the animation
        browser.pause(2000);
    }
}

module.exports = {Helpers}
