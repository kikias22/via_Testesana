import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("button#navbarAccount");
  }

  static get loginButton() {
    return cy.get("button#navbarLoginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  // ============================

  static get searchIcon() {
    return cy.get("#searchQuery");

  }
  static get searchField() {
    return cy.get("#searchQuery input");

  }
  static get productBox() {
    return cy.get("div.mdc-card");
  }

  static get productInfo() {
    return cy.get("app-product-details");
  }

  static get closeButton() {
    return cy.get("button[aria-label='Close Dialog']");
  }

  // ======== reviews

  static get reviewsButton() {
    return cy.get("[aria-label='Expand for Reviews']");
  }

  static get reviewField() {
    return cy.get("[aria-label='Text field to review a product']");
  }
  static get submitReviewButton() {
    return cy.get("#submitButton");
  }

  // ======= counting cards

  static get cardsAmount() {
    return cy.get(".mat-mdc-paginator-range-label");
  }

  static get nextPageButton() {
    return cy.get("[aria-label='Next page']");
  }

  static get clickPaginator() {
    return cy.get(".mat-mdc-paginator-touch-target");
  }

  static get changeCardAmount() {
    return cy.get(".mdc-list-item__primary-text");
  }
// ==== buying girlie

  static get addToBasket() {
    return cy.get("button[aria-label='Add to Basket']");
  }

  static get showBasket() {
    return cy.get("[aria-label='Show the shopping cart']");
  }

// adding payment method

  static get ordersAndPaymentButton() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
}

  static get myAddressesButton() {
    return cy.get("button[aria-label='Go to saved address page']");
}

static get paymentOptionsButton() {
  return cy.get("button[aria-label='Go to saved payment methods page']");
}

}

