import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }


  static get addNewCardButton() {
    return cy.get('mat-expansion-panel-header').contains('Add new card');
  }

  static get nameField() {
    return cy.contains('mat-form-field', 'Name').find('input');}

  static get cardField() {
    return cy.contains('mat-form-field', 'Card Number').find('input');
}

  static get expiryMonthField() {
    return cy.get("#mat-input-4")
}

  static get expiryYearField() {
    return cy.get("#mat-input-5");
}

  static get submitButton() {
    return cy.get("#submitButton")
  }

  static get cardInfo() {
    return cy.get(".mdc-card")
  }

}