import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegistrationPage } from "../pageObjects/RegistrationPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";


describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {

      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.newUserButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com     
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      // Save that email address to some variable
      const emailAddress = `email_${randomNumber}@ebox.com`;
      const password = "ABC123#()";
      RegistrationPage.emailField.type(emailAddress);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionField.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.answerField.type("rikoooooooo");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(emailAddress);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", emailAddress);

    });
  });


});

context("With auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {

    // Click on search icon
    HomePage.searchIcon.click();
    // Search for Lemon
    HomePage.searchField.type("Lemon{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
  });

  it("Search 500ml and validate Lemon, while having multiple cards", () => {

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    // Click on search icon
    HomePage.searchIcon.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");

    });

    it("Search 500ml and validate cards", () => {
    // Create scenario - Search 500ml and validate cards
    // Click on search icon
    HomePage.searchIcon.click();  
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productBox.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productInfo.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    HomePage.closeButton.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productBox.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productInfo.should("contain.text", "Sour but full of vitamins.");
    // Close the card
    HomePage.closeButton.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productBox.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productInfo.should("contain.text", "Sweet & tasty!");
    HomePage.closeButton.click();
    });

    it("Read a review", () => {
    // Create scenario - Read a review
    // Click on search icon
    HomePage.searchIcon.click(); 
    // Search for King
    HomePage.searchField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.productBox.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.reviewsButton.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.productInfo.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    it("Add a review", () => {
    // Create scenario - Add a review
    // Click on search icon
    HomePage.searchIcon.click(); 
    // Search for Raspberry
    HomePage.searchField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.productBox.contains('Raspberry Juice (1000ml)').click();
    // Type in review - "Tastes like metal"
    HomePage.reviewField.click().type("Tastes like metal");
    // Click Submit
    HomePage.submitReviewButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.reviewsButton.click();
    // Validate review -  "Tastes like metal"
    HomePage.productInfo.should("contain.text", "Tastes like metal");
    });

    it("Validate product card amount", () => {
    // Create scenario - Validate product card amount
    // Validate that the default amount of cards is 12
    HomePage.cardsAmount.should("contain.text", "1 – 12 of 36");
    // Change items per page (at the bottom of page) to 24
    HomePage.nextPageButton.click();
    // Validate that the amount of cards is 24
    HomePage.cardsAmount.should("contain.text", "13 – 24 of 36");
    // Change items per page (at the bottom of page) to 36
    HomePage.clickPaginator.click();
    HomePage.changeCardAmount.contains("36").click();
    // Validate that the amount of cards is 36
    HomePage.cardsAmount.should("contain.text", "1 – 36 of 36");
    });

    it("Buy Girlie T-shirt", () => {
    // Create scenario - Buy Girlie T-shirt
    // Click on search icon
    HomePage.searchIcon.click(); 
    // Search for Girlie
    HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addToBasket.click();
    // Click on "Your Basket" button
    HomePage.showBasket.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkoutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.clickAddress.contains('United Fakedom').click()
    // Click Continue button
    SelectAddressPage.continueButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.standardButton.click();
    // Click Continue button
    DeliveryMethodPage.continueButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.clickAddress.click();
    // Click Continue button
    PaymentOptionsPage.continueButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.placeOrderButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.purchaseInfo.should("contain.text", "Thank you for your purchase!");

    });

    it("Add address", () => {

    // Create scenario - Add address
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersAndPaymentButton.click();
    // Click on My saved addresses
    HomePage.myAddressesButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    
    CreateAddressPage.countryField.type("examplecountry");
    CreateAddressPage.nameField.type("Joker");
    CreateAddressPage.mobileNumberField.type("12312324");
    CreateAddressPage.zipCodeField.type("2424");
    CreateAddressPage.addressField.type("ohio");
    CreateAddressPage.cityField.type("tex");
    CreateAddressPage.stateField.type("abc"); 
    
    // Click Submit button

    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible

    CreateAddressPage.addressInfo.should("contain.text", "Joker");

    });


    
    it("Add payment option", () => {
    // Create scenario - Add payment option
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.ordersAndPaymentButton.click();
    // Click on My payment options
    HomePage.paymentOptionsButton.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.addNewCardButton.click();
    // Fill in Name
    SavedPaymentMethodsPage.nameField.type("Leo");
    // Fill in Card Number
    SavedPaymentMethodsPage.cardField.type("4444444444444444");
    // Set expiry month to 7
    SavedPaymentMethodsPage.expiryMonthField.select("7");
    // Set expiry year to 2090
    SavedPaymentMethodsPage.expiryYearField.select("2090");
    // Click Submit button
    SavedPaymentMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.cardInfo.should("contain.text", "Leo");
  });
});