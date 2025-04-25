import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {

    static get emailField() {
        return cy.get("#emailControl");
      }
     
      static get passwordField() {
        return cy.get("#passwordControl");
      }
     
      static get repeatPasswordField() {
        return cy.get("#repeatPasswordControl");
      }
     
      static get securityQuestionField() {
        return cy.get("[name='securityQuestion']");
      }
     
      static get securityQuestionOptions() {
        return cy.get("mat-option[role='option']");
      }
     
      static get answerField() {
        return cy.get("#securityAnswerControl");
      }
     
      static get registrationButton() {
        return cy.get("button#registerButton");
  }
}