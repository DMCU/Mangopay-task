# Google Maps Search and Directions Tests
## Summary
This repository contains automated tests for Google Maps search and directions functionality using Cypress. It was created for the purpose of the recruitment process at MANGOPAY company. The tests cover various scenarios related to search, directions, and error handling. The Page Object Pattern was not implemented for this task. Given the relatively small scope of these tests, using the Page Object Pattern might have been overkill. However, for larger and more complex test suites, implementing the Page Object Pattern can enhance test maintainability and organization. For more convenient maintenance, all selectors are stored in the separate file `selectors.js`.

## Table of Contents
* Responsive testing
* Test cases covered
* Installation
* Running the Tests

## Responsive Testing

In this repository, you can find two test suites: `mapsSearch.cy.js` for the default viewport, and the `iPhoneXmapsSearch.cy.js` suite, which has been designed to be responsive. The `cy.viewport()` command is used to set the viewport to the size of an iPhone X, ensuring that the tests are validated for smaller screen sizes as well.

## Test Cases Covered
1. Should display correct headline text for Paris search
2. Should display dirrections from Paris to London
3. Should show error message for invalid search
4. Should clear the search input after clicking "Close" button
5. Should handle clicking "Directions" without a destination

The test cases `1.` and `2.` cover the user stories provided in the description of this task. 

It's worth noting that test case `2.` additionally covers setting directions between two destinations. I encountered a Google Maps issue here - when `London` is provided in the search input and the Directions button is selected, the value in the destination input is set to `London, UK`, which causes a problem with the assertion since it's not equal to `London`.

In test case `3.`, I've covered a negative scenario. In test case `4.`, we check whether the search input gets cleared after using the corresponding button. In test case `5.`, we examine the edge case of how the input behaves when we perform a search without providing any data.

## Instalation 
To set up and run the tests locally, follow these steps:

1. Clone the repository to your local machine:
`git clone https://github.com/dmcu/Mangopay-task.git`
2. Navigate to the repository's root directory:
`cd Mangopay-task`
3. Install the required dependencies using npm (Node.js package manager):
`npm install`
4. Install Cypress using npm:
`npm install cypress --save-dev`

## Running the Tests
Open the Cypress Test Runner:
`npx cypress open`
In the Cypress Test Runner, select the test file you want to run:
* mapsSearch.cy.js - test suit in default view
* iPhoneXmapsSearch.cy.js - test suit in iPhone X responsive view 



