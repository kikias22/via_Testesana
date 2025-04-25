import { BasePage } from "../pageObjects/basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addAddressButton() {
    return cy.get("button[aria-label='Add a new address']");
}

}