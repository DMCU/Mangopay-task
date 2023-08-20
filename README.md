# Google Maps Search and Directions Tests
## Summary
This repository contains automated tests for Google Maps search and directions functionality using Cypress. It was made on recruitment process purposes of MANGOPAY company. The tests cover various scenarios related to search, directions, and error handling. Additionaly I've created test suit in iPhone X viewer which can be used in order to verify if covered testing areas are responsive. 

## Table of Contents
* Test cases covered
* Installation
* Running the Tests

# Test Cases Covered
* Should display correct headline text for Paris search
 Search for Paris and verify the correct headline text.

* Should display correct headline text for London search and directions.
 Search for London, click "Directions," and verify the correct headline text and destination field.

* Should show error message for invalid search
 Search for an invalid place name and verify the displayed error message.

* Should clear the search input after clicking "Close" button
 Search for a place, click "Close," and verify that the search input is cleared.

* Should handle clicking "Directions" without a destination
 Click "Directions" without entering a destination and verify that the start and destination fields are visible and empty.

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



