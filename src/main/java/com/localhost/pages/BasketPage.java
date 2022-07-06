package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasketPage extends Utility {
    public BasketPage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(BasketPage.class.getName());

//Locating path of required WebElement of Shopping cart page
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Added to Basket')]")
    WebElement verifyNotificationaddedtoBasket;

    @CacheLookup
    @FindBy(xpath = "//span[@class='a-truncate-cut']")
    WebElement bookTitle;

    @CacheLookup
    @FindBy(xpath = "//span[@class='a-size-small sc-product-binding a-text-bold']")
    WebElement paperback;

    @CacheLookup
    @FindBy(xpath = "//input[@value='Proceed to checkout']")
    WebElement verifyItemIsinBasket;

    @CacheLookup
    @FindBy(xpath = "//span[@id='a-autoid-5-announce']")
    WebElement quantity;

    @CacheLookup
    @FindBy(xpath = "//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold']")
    WebElement price;

    @CacheLookup
    @FindBy(xpath = " //span[@id='a-autoid-5-announce']")
    WebElement subtotalPrice;


    @CacheLookup
    @FindBy(xpath = "//span[@class='a-button-inner']//a[contains(text(),'Go to basket')]")
    WebElement goToBasketButton;

    // Re-usable methods to implement the logic

    public void clickOnGoToBasket() {
        clickOnElement(goToBasketButton);
        log.info("Clicking on close button" + goToBasketButton.toString());
    }


    public String verifyNotificationAddedToBasket() {
        log.info("Verifying this message in basket " + verifyNotificationaddedtoBasket.toString());
        return getTextFromElement(verifyNotificationaddedtoBasket);
    }

    public String verifyThereisOneItem() {
        log.info("Verifying this message in basket " + verifyItemIsinBasket.toString());
        return getTextFromElement(verifyItemIsinBasket);
    }
    public String verifyTheBookisIntheShoppingbasket() {
        log.info("Verifying this book in basket " + bookTitle.toString());
        return getTextFromElement(bookTitle);
    }
    public String verifyTherePaperback() {
        log.info("Verifying the Paperback basket " + paperback.toString());
        return getTextFromElement(paperback);
    }
    public String verifyTherQuantity() {
        log.info("Verifying the Quantity in basket " + quantity.toString());
        return getTextFromElement(quantity);
    }
    public String verifyThePrice() {
        log.info("Verifying the Price in basket " + price.toString());
        return getTextFromElement(price);
    }
    public String verifyTheSubtotal() {
        log.info("Verifying the Subtotal in basket " + subtotalPrice.toString());
        return getTextFromElement(subtotalPrice);
    }
}
