package com.cybertekschool.pages;

import com.cybertekschool.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DashboardPage {
    public DashboardPage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(id = "navbarDropdown")
    public WebElement navbarDropdown;
    @FindBy(className = "dropdown-item")
    public WebElement dropdownItem;
}
