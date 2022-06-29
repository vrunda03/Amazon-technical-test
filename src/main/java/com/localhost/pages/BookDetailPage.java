package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookDetailPage extends Utility {
    public BookDetailPage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(BookDetailPage.class.getName());

    //Locating path of required WebElement of Shopping cart page
    @CacheLookup
    @FindBy(xpath = "//*[@id='productTitle']")
    WebElement bookTitle;
    @CacheLookup
    @FindBy(xpath = "//i[contains(text(),'#1 Best Seller')]")
    WebElement bestSeller;
    @CacheLookup
    @FindBy(xpath = "//span[@id='productTitle']")
    WebElement paperback;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='a-page']/div[@id='dp']/div[@id='dp-container']/div[1]/div[7]/div[14]/div[2]/div[2]/ul[1]/li[1]/span[1]/span[1]/span[1]/a[1]/span[2]/span[1]")
    WebElement price;
    @CacheLookup
    @FindBy(id="add-to-cart-button")
    WebElement addToBasket;

    // Re-usable methods to implement the logic
    public void clickOnaddToBasket() {
        clickOnElement(addToBasket);
        log.info("Clicking on close button" + addToBasket.toString());
    }

    public String verifyTitle() {
        log.info("Verifying this book dispalyed Price   " + bookTitle.toString());
        return getTextFromElement(bookTitle);
    }

    public String verifyBadge() {
        log.info("Verifying this book dispalyed Price   " + bestSeller.toString());
        return getTextFromElement(bestSeller);
    }

    public String verifyPricedetail() {
        log.info("Verifying this book dispalyed Price   " + price.toString());
        return getTextFromElement(price);
    }

    public String verifyPaperback() {
        log.info("Verifying this book dispalyed Price   " + paperback.toString());
        return getTextFromElement(paperback);
    }

}
