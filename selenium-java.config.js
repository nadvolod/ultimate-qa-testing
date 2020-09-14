var Steps = require('screener-runner/src/steps');

module.exports = {
  // full repository name for your project:
  projectRepo: 'Ultimate QA',

  // this example assumes Environment Variables listed below exist on your system:
  apiKey: process.env.SCREENER_API_KEY,

  hide: '.swp_social_panel,#main-footer,[id*="like-post-wrapper"]',
  // array of UI states to capture visual snapshots of.
  // each state consists of a url and a name.
  states: [
    {
      //This page has dynamic elements that only appear when they are scrolled into view
      //so we run a script to preload those elements
      url: 'https://ultimateqa.com/selenium-webdriver-java-course',
      name: 'Selenium Java landing page on desktop',
      steps: new Steps()
          .executeScript('window.scrollTo(0,document.body.scrollHeight)')
          .wait(4000)
          .snapshot('Loaded')
          .end()
    }
  ],
  resolutions: [
    {
      deviceName: 'iPhone X'
    },
    {
      deviceName: 'iPhone 8'
    },
    {
      deviceName: 'iPhone 8 Plus'
    },
    {
      deviceName: 'Nexus 10'
    },
    {
      deviceName: 'Galaxy S8'
    },
  ]
};