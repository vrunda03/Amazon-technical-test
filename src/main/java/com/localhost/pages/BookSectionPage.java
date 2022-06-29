package com.localhost.pages;


import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookSectionPage extends Utility {
    public BookSectionPage() {
        PageFactory.initElements(driver, this);
    }

    private static final Logger log = LogManager.getLogger(BookSectionPage.class.getName());

    //Locating path of required WebElement of Shopping cart page
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Harry Potter and the Philosopher’s Stone – 25th An')]")
    WebElement verifyBook;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='a-page']/div[@id='search']/div[1]/div[1]/div[1]/span[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/span[1]/div[1]/span[1]/span[1]")
    WebElement bestSellerBadge;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='a-page']/div[@id='search']/div[1]/div[1]/div[1]/span[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]")
    WebElement paperback;
    @CacheLookup
    @FindBy(xpath = "//body/div[@id='a-page']/div[@id='search']/div[1]/div[1]/div[1]/span[3]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/a[1]/span[2]")
    WebElement wholeprice;
    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Harry Potter and the Philosopher’s Stone – 25th An')]")
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
        log.info("Verifying this book dispalyed Price   " + wholeprice.toString());
        return getTextFromElement(wholeprice);
    }
    public void clickOnBookdetail() {
        clickOnElement(bookdetail);
        log.info("Verifying this book dispalyed Price   " + bookdetail.toString());

    }
}
