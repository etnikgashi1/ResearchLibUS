package com.cybertekschool.pages;

import com.cybertekschool.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class AddBookPage extends NavigationBar{
    public AddBookPage() {
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(xpath = "//*[@id=\"books\"]/div[1]/div[1]/span/a")
    public WebElement bookModule;

    @FindBy(xpath = "//*[@id=\"add_book_form\"]/div[1]/div/div[1]/div[1]/div/input")
    public WebElement bookName;

    @FindBy(xpath = "//label[contains(text(),'Book Name')]")
    public WebElement bookNameTitle;

    @FindBy(name = "isbn")
    public WebElement isbn;

    @FindBy(xpath = "//label[contains(text(),'ISBN')]")
    public WebElement isbnTitle;

    @FindBy(name = "year")
    public WebElement year;

    @FindBy(xpath = "//label[contains(text(),'Year')]")
    public WebElement yearTitle;

    @FindBy(xpath = "//*[@id=\"add_book_form\"]/div[1]/div/div[2]/div[1]/div/input")
    public WebElement author;

    @FindBy(xpath = "//label[contains(text(),'Author')]")
    public WebElement authorTitle;

    @FindBy(id = "book_group_id")
    public WebElement bookCategory;

    @FindBy(xpath = "//label[contains(text(),'Book Category')]")
    public WebElement bookCategoryTitle;

    @FindBy(id = "description")
    public WebElement description;

    @FindBy(xpath = "//label[contains(text(),'Description')]")
    public WebElement descriptionTitle;

    @FindBy(xpath = "//button[@class='btn btn-primary']")
    public WebElement saveChanges;

    @FindBy(id = "book_group_id")
    public List<WebElement> bookCategories;

    public void goToBook(){
        bookModule.click();
    }



}
