package com.cybertekschool.pages;

import com.cybertekschool.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LibrarianBookPage extends NavigationBar{
    @FindBy(css =".portlet-title>span>a")  // it goes to "+add Book"
    public WebElement addBooks;

}