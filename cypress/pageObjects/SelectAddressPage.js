import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static get clickAddress() {
    return cy.get('mat-row')
  }

  static get continueButton() {
    return cy.get("button[aria-label='Proceed to payment selection']");
  }


}