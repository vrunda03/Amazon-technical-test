package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    //Locating path of required WebElement of Shopping cart page
    @CacheLookup
    @FindBy(xpath = "//input[@id='sp-cc-accept']")
    WebElement acceptCookies;

    @CacheLookup
    @FindBy(xpath = "//input[@id='twotabsearchtextbox']")
    WebElement searchBox;
    @CacheLookup
    @FindBy(xpath = "//input[@id='nav-search-submit-button']")
    WebElement clickSearchButton;

    // Re-usable methods to implement the logic
    public void clickOnAcceptCookies() {
        clickOnElement(acceptCookies);
        log.info("Clicking on close button" + acceptCookies.toString());
    }

    public void clickOnSearchBox() {
        clickOnElement(searchBox);
        log.info("Clicking on close button" + searchBox.toString());
    }

    public void enterBookName(String name) {
        sendTextToElement(searchBox, name);
        log.info("Enter book" + name + " to email field " + searchBox.toString());
    }

    public void clickOnSearchButton() {
        clickOnElement(clickSearchButton);
        log.info("Clicking on search button" + clickSearchButton.toString());
    }

}
