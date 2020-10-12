const {Helpers} = require('../helpers');

describe('AB testing landing page', () => {
    it('has 2 AB testing variations', () => {
        let timesButtonOneFound = 0;
        let timesButtonTwoFound = 0;
        // First
        Helpers.loadUrl();
        // The `+=` counts the new value to the previous one
        // Helpers.findButton1() returns a boolean, with a `+` in front of it you turn it into a number true => 1, false => 0
        timesButtonOneFound += +Helpers.findButton1();
        timesButtonTwoFound += +Helpers.findButton2();
        console.log(`timesButtonOneFound = ${timesButtonOneFound}, timesButtonTwoFound = ${timesButtonTwoFound}`)
        console.log('\n\n', $('.et_pb_button_module_wrapper').getHTML(), '\n\n')
        browser.deleteAllCookies();
        // Second
        Helpers.loadUrl();
        timesButtonOneFound += +Helpers.findButton1();
        timesButtonTwoFound += +Helpers.findButton2();
        console.log(`timesButtonOneFound = ${timesButtonOneFound}, timesButtonTwoFound = ${timesButtonTwoFound}`)
        console.log('\n\n', $('.et_pb_button_module_wrapper').getHTML(), '\n\n')
        browser.deleteAllCookies();
        // Third
        Helpers.loadUrl();
        timesButtonOneFound += +Helpers.findButton1();
        timesButtonTwoFound += +Helpers.findButton2();
        console.log(`timesButtonOneFound = ${timesButtonOneFound}, timesButtonTwoFound = ${timesButtonTwoFound}`)
        console.log('\n\n', $('.et_pb_button_module_wrapper').getHTML(), '\n\n')
        browser.deleteAllCookies();
        // Fourth
        Helpers.loadUrl();
        timesButtonOneFound += +Helpers.findButton1();
        timesButtonTwoFound += +Helpers.findButton2();
        console.log(`timesButtonOneFound = ${timesButtonOneFound}, timesButtonTwoFound = ${timesButtonTwoFound}`)
        console.log('\n\n', $('.et_pb_button_module_wrapper').getHTML(), '\n\n')
        browser.deleteAllCookies();
        expect(timesButtonOneFound).toBe(2, 'timesButtonOneFound not found as expected');
        expect(timesButtonTwoFound).toBe(2, 'timesButtonTwoFound not found as expected');
    });
});


