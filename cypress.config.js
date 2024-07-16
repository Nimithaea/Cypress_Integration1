const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fcsetd",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
