package com.cybertekschool.step_definitions;


import io.cucumber.java.en.Given;
import com.cybertekschool.pages.LoginPage;
import com.cybertekschool.utilities.ConfigurationReader;
import com.cybertekschool.utilities.Driver;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Login {
    @Given("I navigate to the login page")
    public void i_navigate_to_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @Given("I write my email address {string}")
    public void i_write_my_email_address(String email) {
        LoginPage login = new LoginPage();
        login.emailField.sendKeys(email);
    }

    @Given("I write my password {string}")
    public void i_write_my_password(String password) {
        LoginPage login = new LoginPage();
        login.passwordField.sendKeys(password);
    }

    @When("I click on sign in button")
    public void i_click_on_sign_in_button() {
        LoginPage login = new LoginPage();
        login.signInButton.click();
    }

    @Then("I should see dashboard page")
    public void i_should_see_dashboard_page() {
        WebDriverWait wait = new WebDriverWait(Driver.get(),5);
        wait.until(ExpectedConditions.urlContains("dashboard"));
        Assert.assertTrue("Link ends with dashboard",Driver.get().getCurrentUrl().endsWith("dashboard"));
    }

    @Then("I should see books page")
    public void i_should_see_books_page() {
        WebDriverWait wait = new WebDriverWait(Driver.get(),5);
        wait.until(ExpectedConditions.urlContains("books"));
        Assert.assertTrue("Link ends with books",Driver.get().getCurrentUrl().endsWith("books"));
    }

    @Then("I should see This field is required. message pop up")
    public void i_should_see_This_field_is_required_message_pop_up() {
        LoginPage login = new LoginPage();
        Assert.assertTrue(login.noCredError.isDisplayed());
    }

    @Then("I should see Sorry, Wrong Email or Password message pop up")
    public void i_should_see_Sorry_Wrong_Email_or_Password_message_pop_up() {
        LoginPage login = new LoginPage();
        Assert.assertTrue(login.wrongEmailOrPassError.isDisplayed());
    }
}
