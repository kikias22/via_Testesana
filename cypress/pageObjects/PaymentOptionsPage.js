import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get clickAddress() {
    return cy.contains('************5678')
      .parents('mat-row')
      .find('input[type="radio"]');
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to review']");
  }

}