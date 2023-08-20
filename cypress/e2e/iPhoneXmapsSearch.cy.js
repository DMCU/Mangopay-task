import { gmapSearchSelector } from "../selectors/selectors";

describe('Google Maps Search and Directions Tests', () => {
// test data
  const town1 = 'Paris';
  const town2 = 'London';
  const invalidTown = 'InvalidPlaceName';
  const errorMessage = 'Google Maps can\'t find';

  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('/maps?hl=en', {
      onBeforeLoad(win) {
        // Set the navigator language to English
        Object.defineProperty(win.navigator, 'language', { value: 'en' });
        Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
        Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
      },
      headers: {
        // Set the Accept-Language header to 'en'
        "Accept-Language": "en-US,en;q=0.9"
      }
    })
    cy.get(gmapSearchSelector.acceptCookiesSelector).contains("Accept").click({force: true});

  });

  it('Should display correct headline text for Paris search', () => {

    cy.get(gmapSearchSelector.searchBoxInputSelector).type(town1);
    cy.get(gmapSearchSelector.searchBoxSearchButtonSelector).click();
    cy.get(gmapSearchSelector.headlineSelector).should('have.text', town1);
  });

  it('Should display correct headline text for London search and directions', () => {
    cy.get(gmapSearchSelector.searchBoxInputSelector).type(town2);
    cy.get(gmapSearchSelector.searchBoxSearchButtonSelector).click();
    cy.get(gmapSearchSelector.headlineSelector).should('have.text', town2);
    cy.get(gmapSearchSelector.directionButtonSelector).click({force: true});
    cy.get(gmapSearchSelector.destinationFieldSelector).should('have.value',town2); // ne moze najty tekstu w inputi. Czom?
  });

  it('Should show error message for invalid search', () => {
    cy.get(gmapSearchSelector.searchBoxInputSelector).type(invalidTown);
    cy.get(gmapSearchSelector.searchBoxSearchButtonSelector).click();
    cy.get(gmapSearchSelector.errorMessageSelector).should('have.text', `${errorMessage} ${invalidTown}`);
  });
  
  it('Should clear the search input after clicking "Close" button', () => {
    cy.get(gmapSearchSelector.searchBoxInputSelector).type(town1);
    cy.get(gmapSearchSelector.searchBoxSearchButtonSelector).click();
    cy.get(gmapSearchSelector.searchBoxCloseButtonSelector).click({force: true});
    cy.get(gmapSearchSelector.searchBoxInputSelector).should('have.value', '');
  });

  it('Should handle clicking "Directions" without a destination', () => {
    cy.get(gmapSearchSelector.directionButtonBlankSearchSelector).click();
    cy.get(gmapSearchSelector.startDestinationFieldSelector).should('be.visible');
    cy.get(gmapSearchSelector.startDestinationFieldSelector).should('have.value', '');
    cy.get(gmapSearchSelector.destinationFieldSelector).should('be.visible');
    cy.get(gmapSearchSelector.destinationFieldSelector).should('have.value', '');
  });
});


