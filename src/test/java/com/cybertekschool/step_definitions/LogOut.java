package com.cybertekschool.step_definitions;

import com.cybertekschool.pages.DashboardPage;
import com.cybertekschool.utilities.ConfigurationReader;
import com.cybertekschool.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class LogOut {
    DashboardPage dashboardPage = new DashboardPage();
    @Given("I click the dropdown menu on the dashboard page")
    public void i_click_the_dropdown_menu_on_the_dashboard_page() {
       dashboardPage.navbarDropdown.click();
    }
    @When("I click the log out option from the dropdown menu")
    public void i_click_the_log_out_option_from_the_dropdown_menu() {
       dashboardPage.dropdownItem.click();
    }
    @Then("I should be able to see the log in page")
    public void i_should_be_able_to_see_the_log_in_page() {
        Assert.assertEquals(Driver.get().getCurrentUrl(),"https://library3.cybertekschool.com/login.html");
    }

}
