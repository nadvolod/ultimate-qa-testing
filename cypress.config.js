const { defineConfig } = require("cypress");
const happoTask = require('happo-cypress/task');
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://www.ultimateqa.com/',
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(), // calling the function is important
      });
      happoTask.register(on);
    },
  },
});