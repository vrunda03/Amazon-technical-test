package com.localhost.steps;

import com.localhost.driverstore.ManageDriver;
import com.localhost.pages.BookDetailPage;
import com.localhost.pages.BookSectionPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class BookDetailSteps {
    @And("^I navigate to the book details$")
    public void iNavigateToTheBookDetails() {
        new BookSectionPage().clickOnBookdetail();
    }

    @And("^I Verify that first item title of detail page is \"([^\"]*)\"$")
    public void iVerifyThatFirstItemTitleOfDetailPageIs(String text) throws InterruptedException {
        Thread.sleep(10000);
        Assert.assertEquals(text,new BookDetailPage().verifyTitle().substring(0,54));

//        Assert.assertTrue(new BookDetailPage().verifyTitle()
//                .contains("Harry Potter and the Philosopher’s Stone"));

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
    public void iVerifyThatPriceIsInDetailPage(String text) {
        Assert.assertEquals("Price is not correct ", text, new BookDetailPage().verifyPricedetail());
    }

    @And("^I Verify that the price is £\"([^\"]*)\"$")
    public void iVerifyThatThePriceIs(String text) {
        Assert.assertEquals("Price is not correct ", text, new BookSectionPage().verifyPrice());
    }

    @Then("^I should navigate to Add to Basket page$")
    public void iShouldNavigateToAddToBasketPage() {
        new BookDetailPage().clickOnaddToBasket();
    }
}

