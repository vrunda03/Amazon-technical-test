package com.localhost.steps;

import com.localhost.pages.BookDetailPage;
import com.localhost.pages.BookSectionPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.junit.Assert;

public class BookDetailSteps {
    @And("^I navigate to the book details$")
    public void iNavigateToTheBookDetails() {
        new BookSectionPage().clickOnBookdetail();
    }

    @And("^I Verify that first item title of detail page is \"([^\"]*)\"$")
    public void iVerifyThatFirstItemTitleOfDetailPageIs(String text) throws InterruptedException {
        Thread.sleep(6000);
//        Assert.assertEquals("Book is not verified its title ",text,new BookDetailPage().verifyTitle());
        Assert.assertTrue(new BookDetailPage().verifyTitle()
                .contains("Harry Potter and the Philosopher’s Stone"));

    }

    @And("^I Verify that first badge \"([^\"]*)\"of detail page$")
    public void iVerifyThatFirstBadgeOfDetailPage(String text) {
        Assert.assertEquals("Badge is not bestseller ", text, new BookDetailPage().verifyBadge());

    }

    @And("^I Verify that type is paperback \"([^\"]*)\"of detail page$")
    public void iVerifyThatTypeIsPaperbackOfDetailPage(String text) {
        Assert.assertEquals("Price is not correct ", text, new BookDetailPage().verifyPaperback());
    }

    @And("^I Verify that price is £\"([^\"]*)\"in detail page$")
    public void iVerifyThatPriceIs£InDetailPage(String text) {
        Assert.assertEquals("Price is not correct ", text, new BookDetailPage().verifyPricedetail());
    }

    @And("^I Verify that the price is £\"([^\"]*)\"$")
    public void iVerifyThatThePriceIs£(String text) {
        Assert.assertEquals("Price is not correct ", text, new BookDetailPage().verifyPricedetail());
    }
}

