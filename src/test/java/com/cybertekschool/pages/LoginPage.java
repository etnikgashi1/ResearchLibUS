package com.cybertekschool.pages;

import com.cybertekschool.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage() {
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(id = "inputEmail")
    public WebElement emailField;
    @FindBy(id = "inputPassword")
    public WebElement passwordField;
    @FindBy(tagName = "button")
    public WebElement signInButton;
    @FindBy(id = "inputEmail-error")
    public WebElement noCredError;
    @FindBy(xpath = "//div[.='Sorry, Wrong Email or Password']")
    public WebElement wrongEmailOrPassError;



    @FindBy(id = "inputEmail")
    public WebElement emailField;
    @FindBy(id = "inputPassword")
    public WebElement passwordField;
    @FindBy(tagName = "button")
    public WebElement signInButton;
    @FindBy(id = "inputEmail-error")
    public WebElement noCredError;
    @FindBy(xpath = "//div[.='Sorry, Wrong Email or Password']")
    public WebElement wrongEmailOrPassError;
}
