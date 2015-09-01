/**
 *  Run from the command line: wct test/wct-tests.html
 *  Note: 'grunt test' will run the test/*spec.js tests, not wct.
 *
 *  Do the following to run on Safari:
 *  safari 8.0.8 Tests failed: Until Selenium's SafariDriver supports
 *  Safari 6.2+, 7.1+, & 8.0+, you must manually install it. Follow the steps at:
 *     https://code.google.com/p/selenium/issues/detail?id=7933#c23
 */
module.exports = {
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
            disabled: false
        }
    }
};
