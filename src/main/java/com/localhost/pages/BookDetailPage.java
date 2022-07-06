package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
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
    @FindBy(xpath = "//a[@id='a-autoid-6-announce']//span[contains(text(),'Paperback')]")
    WebElement paperback;
    @CacheLookup
    @FindBy(xpath = "//span[@class='a-size-base a-color-price a-color-price']")
    WebElement price;
    @CacheLookup
    @FindBy(css="#add-to-cart-button")
    WebElement addToBasket;

    // Re-usable methods to implement the logic
    public void clickOnaddToBasket() {
        clickOnElement(addToBasket);
        log.info("Clicking on close button" + addToBasket.toString());
    }

    public String verifyTitle() {
        log.info("Verifying this book displayed title   " + bookTitle.toString());
        return getTextFromElement(bookTitle);
    }

    public String verifyBadge() {
        waitUntilVisibilityOfElementLocated(By.xpath("//i[contains(text(),'#1 Best Seller')]"),6);
        log.info("Verifying this book displayed badge   " + bestSeller.toString());
        return getTextFromElement(bestSeller);
    }

    public String verifyPricedetail() {
        log.info("Verifying this book displayed Price   " + price.toString());
        return getTextFromElement(price);
    }

    public String verifyPaperback() {
        log.info("Verifying this book dispalyed Paperback   " + paperback.toString());
        return getTextFromElement(paperback);
    }

}
