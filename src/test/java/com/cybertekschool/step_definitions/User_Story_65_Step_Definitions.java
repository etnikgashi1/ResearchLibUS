package com.cybertekschool.step_definitions;

import com.cybertekschool.utilities.ConfigurationReader;
import com.cybertekschool.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class User_Story_65_Step_Definitions {

    @Given("the user navigate to login page")
    public void the_user_navigate_to_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("the student logins successfully")
    public void the_student_logins_successfully() {
     //I will create method for student login here but when the login functionality added I will change it.
    Driver.get().findElement(By.cssSelector("#inputEmail")).sendKeys(ConfigurationReader.get("student_email"));

    Driver.get().findElement(By.cssSelector("#inputPassword")).sendKeys(ConfigurationReader.get("student_pass"));

    Driver.get().findElement(By.xpath("//button")).click();

    }

    @When("click Borrow Book option for any unborrowed book")
    public void click_Borrow_Book_option_for_any_unborrowed_book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("verify that {string} message was displayed")
    public void verify_that_message_was_displayed(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("verify that borrowed book was displayed in borrowed book page")
    public void verify_that_borrowed_book_was_displayed_in_borrowed_book_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("borrowed book status shown as {string}")
    public void borrowed_book_status_shown_as(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the student search for a book writing {string}")
    public void the_student_search_for_a_book_writing(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the student click Borrow Book to the first available book")
    public void the_student_click_Borrow_Book_to_the_first_available_book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("The student click to {string} button nothing should happen.")
    public void the_student_click_to_button_nothing_should_happen(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("clicks Borrowing Books")
    public void clicks_Borrowing_Books() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Borrowed and not returned books should be seen as {string}")
    public void borrowed_and_not_returned_books_should_be_seen_as(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Borrowed and returned books should be seen as {string}")
    public void borrowed_and_returned_books_should_be_seen_as(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("find a {string} book in table")
    public void find_a_book_in_table(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("click RETURN button for that book")
    public void click_RETURN_button_for_that_book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("the status of the book should change to {string}")
    public void the_status_of_the_book_should_change_to(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("clicks book category dropdown menu")
    public void clicks_book_category_dropdown_menu() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("as {string} category selected all the books in the table belongs to {string}")
    public void as_category_selected_all_the_books_in_the_table_belongs_to(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("clicking show records dropdown and selecting {string} should show {string} books in the table")
    public void clicking_show_records_dropdown_and_selecting_should_show_books_in_the_table(String string, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("the result should be showing {string} in the table")
    public void the_result_should_be_showing_in_the_table(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the student search for an author writing {string}")
    public void the_student_search_for_an_author_writing(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
