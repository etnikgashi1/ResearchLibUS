package com.cybertekschool.step_definitions;


import com.cybertekschool.pages.AddBookPage;
import com.cybertekschool.pages.DashboardPage;
import com.cybertekschool.pages.LibrarianBookPage;
import com.cybertekschool.pages.LoginPage;
import com.cybertekschool.utilities.ConfigurationReader;
import com.cybertekschool.utilities.Driver;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.cybertekschool.*;

import java.util.ArrayList;
import java.util.List;


public class AddBook {

    LoginPage loginPage = new LoginPage();
    LibrarianBookPage librarianBookPage = new LibrarianBookPage();
    AddBookPage addBookPage = new AddBookPage();


    @Given("the user is in the log in page")
    public void the_user_is_in_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
//        loginPage.emailField.sendKeys("librarian26@library");
//        loginPage.passwordField.sendKeys("gFOHHm6H");
//        loginPage.signInButton.click();
    }

    @When("the user enters the librarian information")
    public void the_user_enters_the_librarian_information() {
//        Driver.get().get(ConfigurationReader.get("url"));
        loginPage.emailField.sendKeys("librarian26@library");
        loginPage.passwordField.sendKeys("gFOHHm6H");
        loginPage.signInButton.click();
    }


    @When("the user navigate to Books module")
    public void the_user_navigate_to_Books_module() throws Exception{
//        Assert.assertTrue("Link ends with dashboard",Driver.get().getCurrentUrl().endsWith("dashboard"));
        addBookPage.librarianBooksButton.click();
        Thread.sleep(200);
//        addBookPage.goToBook();

    }

    @When("the user click on Add Book button")
    public void the_user_click_on_Add_Book_button() throws Exception {
        addBookPage.goToBook();
        Thread.sleep(200);
    }

    @When("fill the necessary input boxes with valid inputs")
    public void fill_the_necessary_input_boxes_with_valid_inputs() {

        addBookPage.bookName.sendKeys("Name of Book");
        addBookPage.year.sendKeys("1999");
        addBookPage.isbn.sendKeys("aaaa123");
        addBookPage.author.sendKeys("Author Title");

    }

    @When("the user click on Save Changes")
    public void the_user_click_on_Save_Changes() {
        addBookPage.saveChanges.click();
    }

    @Then("{string} message should be displayed")
    public void message_should_be_displayed(String expectedMessage) {
        String actualMessage = "The book has been created.";
        if (expectedMessage.equals("The book has been created.")){
            Assert.assertEquals(expectedMessage,actualMessage);
        }else{
            Assert.assertFalse(false);
        }
    }



    @Then("following book parameters should be displayed on the table")
    public void following_book_parameters_should_be_displayed_on_the_table(List<String> expectedBookParams) throws Exception {

        List<String> actualBookParams = new ArrayList<>();
        Thread.sleep(200);

        actualBookParams.add(addBookPage.bookNameTitle.getText());
        actualBookParams.add(addBookPage.isbnTitle.getText());
        actualBookParams.add(addBookPage.yearTitle.getText());
        actualBookParams.add(addBookPage.authorTitle.getText());
        actualBookParams.add(addBookPage.bookCategoryTitle.getText());
        actualBookParams.add(addBookPage.descriptionTitle.getText());

        System.out.println(actualBookParams);

        Assert.assertEquals(expectedBookParams,actualBookParams);

    }

    @Then("following book categories should be able to selected on the dropdown menu")
    public void following_book_categories_should_be_able_to_selected_on_the_dropdown_menu(List<String> expectedBookCategories) throws Exception{


        List<String> actualBookCategories = new ArrayList<>();
        Select bookCategories = new Select(addBookPage.bookCategory);
        List<WebElement> options = bookCategories.getOptions();
        Thread.sleep(200);
        for (WebElement each : options){
            actualBookCategories.add(each.getText());
        }
        System.out.println(actualBookCategories);

        Assert.assertEquals(expectedBookCategories,actualBookCategories);

    }

}

