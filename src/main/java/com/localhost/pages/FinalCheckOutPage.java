package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FinalCheckOutPage extends Utility {
    public FinalCheckOutPage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(FinalCheckOutPage.class.getName());

    //Locating path of required WebElement of Shopping cart page
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Added to Basket')]")
    WebElement verifyNotificationaddedtoBasket;
    @CacheLookup
    @FindBy(xpath = "//input[@value='Proceed to checkout']")
    WebElement verifyItemIsinBasket;

    // Re-usable methods to implement the logic

    public String verifyNotificationAddedToBasket() {
        log.info("Verifying this message in basket " + verifyNotificationaddedtoBasket.toString());
        return getTextFromElement(verifyNotificationaddedtoBasket);
    }
    public String verifyThereisOneItem() {
        log.info("Verifying this message in basket " + verifyItemIsinBasket.toString());
        return getTextFromElement(verifyItemIsinBasket);
    }
}
