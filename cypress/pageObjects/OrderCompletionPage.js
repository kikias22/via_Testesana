import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/order-completion";
  }

  static get purchaseInfo() {
    return cy.get(".mdc-card");
  }
}
