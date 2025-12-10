# TractorJunction Cypress Test Suite

This repository contains Cypress end-to-end tests and Page Object Model helpers for the TractorJunction family of sites (tractor, truck, bike, infra, etc.).

Quick links
- Test runner config: [cypress.config.js](cypress.config.js)
- Package manifest: [package.json](package.json)
- Custom commands: [cypress/support/commands.js](cypress/support/commands.js)
- Key POMs:
  - [`CreateLeadPage.fillStep1Details`](cypress/e2e/Page_object_model/CreateLeadPage.js)
  - [`leadEndToEndPage.StepA`](cypress/e2e/Page_object_model/leadEndToEndPage.js)
- Example test specs:
  - [cypress/e2e/Test_Case/CreateLead.cy.js](cypress/e2e/Test_Case/CreateLead.cy.js)
  - [cypress/e2e/Test_Case/leadEndtoEnd.cy.js](cypress/e2e/Test_Case/leadEndtoEnd.cy.js)
  - [cypress/e2e/Test_Suit/Filter_Test_Class.cy.js](cypress/e2e/Test_Suit/Filter_Test_Class.cy.js)

Prerequisites
- Node.js (14+)
- npm or yarn

Install
```sh
npm ci
# or
# npm install
```

Open Cypress GUI
```sh
npx cypress open
```

Run headless (single spec)
```sh
npx cypress run --spec "cypress/e2e/Test_Case/CreateLead.cy.js"
```

Notes
- The project uses page objects under cypress/e2e/Page_object_model/ (open files to see helper methods).
- File upload helpers use `cypress-file-upload` (see [leadEndToEndPage.js](cypress/e2e/Page_object_model/leadEndToEndPage.js)).
- Some test suites use `slowCypressDown` to throttle test speed (see [Filter_Test_Class.cy.js](cypress/e2e/Test_Suit/Filter_Test_Class.cy.js)).
- For custom flows use commands defined in [cypress/support/commands.js](cypress/support/commands.js) (e.g. [`cy.loginWithOTP`](cypress/support/commands.js)).

Contributing
- Add new tests under cypress/e2e/.
- Prefer Page Object helpers in cypress/e2e/Page_object_model/ for reusable flows.
- Keep flaky waits to a minimum; prefer stable selectors and explicit assertions.

License
- Internal use — adapt as needed.