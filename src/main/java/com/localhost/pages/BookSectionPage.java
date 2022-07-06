package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BookSectionPage extends Utility {
    public BookSectionPage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(BookSectionPage.class.getName());

    //Locating path of required WebElement of Shopping cart page
    @CacheLookup
    @FindBy(xpath = "//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']//span[@class='a-size-medium a-color-base a-text-normal'][contains(text(),'Harry Potter and the Cursed Child - Parts One and ')]")
    WebElement verifyBook;
    @CacheLookup
    @FindBy(xpath = "//span[@id='1408855658-best-seller-label']//span[@class='a-badge-text'][normalize-space()='Best Seller']")
    WebElement bestSellerBadge;
    @CacheLookup
    @FindBy(css = "div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] a[class='a-size-base a-link-normal s-underline-text s-underline-link-text s-link-style a-text-bold']")
    WebElement paperback;
    @CacheLookup
    @FindBy(xpath = "//span[@class='a-price-whole']")
    List<WebElement> wholeprice;
    @CacheLookup
    @FindBy(xpath = "//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']//span[@class='a-size-medium a-color-base a-text-normal'][contains(text(),'Harry Potter and the Cursed Child - Parts One and ')]")
    WebElement bookdetail;

    // Re-usable methods to implement the logic
     public String verifyBookInSection() {
        log.info("Verifying this book dispalyed first in the list " + verifyBook.toString());
        return getTextFromElement(verifyBook);
    }
    public String verifyBadge() {
        log.info("Verifying this book dispalyed Bestseller badge  " + bestSellerBadge.toString());
        return getTextFromElement(bestSellerBadge);
    }
    public String verifypapaerback() {
        log.info("Verifying this book dispalyed Bestseller badge  " + paperback.toString());
        return getTextFromElement(paperback);
    }
    public String verifyPrice() {
        log.info("Verifying this book dispalyed Price   " + wholeprice.get(0).toString());
        return getTextFromElement(wholeprice.get(0));
    }
    public void clickOnBookdetail() {
        clickOnElement(bookdetail);
        log.info("Verifying this book dispalyed Price   " + bookdetail.toString());

    }
}
