package com.localhost.steps;

import com.localhost.pages.BasketPage;
import com.localhost.pages.BookDetailPage;
import com.localhost.pages.BookSectionPage;
import com.localhost.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BookSteps {
    @When("^I search on search bar \"([^\"]*)\" in book section\\.$")
    public void iSearchOnSearchBarInBookSection(String book) {
        new HomePage().enterBookName(book);
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new HomePage().clickOnSearchButton();
    }

    @Then("^I Verify that first item title is \"([^\"]*)\"$")
    public void iVerifyThatFirstItemTitleIs(String bookname) throws InterruptedException {
        Thread.sleep(4000);
        Assert.assertTrue(new BookSectionPage().verifyBookInSection()
                .contains("Harry Potter and the Cursed Child"));


    }

    @And("^I Verify that book has \"([^\"]*)\" badge$")
    public void iVerifyThatBookHasBadge(String text) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("Book is not bestseller ", text, new BookSectionPage().verifyBadge());

    }

    @And("^I Verify that Selected type is \"([^\"]*)\" paperback$")
    public void iVerifyThatSelectedTypeIsPaperback(String texts) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("Book has no paperback ", texts, new BookSectionPage().verifypapaerback());

    }

    @And("^I Verify that the price is \"([^\"]*)\"$")
    public void iVerifyThatThePriceIs£(String msg) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("Book has no price ", msg, new BookSectionPage().verifyPrice());
    }

    @When("^I click on Harry Potter and the cursed child book$")
    public void iClickOnHarryPotterAndThePhilosopherSStoneBook() {
        new BookSectionPage().clickOnBookdetail();

    }

    @And("^I Click On Add to Basket$")
    public void iclickOnAddToBasket() throws InterruptedException {
        Thread.sleep(4000);
        new BookDetailPage().clickOnaddToBasket();
    }


    @And("^I click On Go to Basket button$")
    public void iClickOnGoToBasketButton() throws InterruptedException {
        Thread.sleep(1000);
        new BasketPage().clickOnGoToBasket();
    }


    @Then("^I Verify that the notification is shown \"([^\"]*)\"$")
    public void iverifyThatTheNotificationIsShown(String text) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("Added to Basket", new BasketPage().verifyNotificationAddedToBasket());
    }

    @And("^I verify the book title \"([^\"]*)\" in shopping basket$")
    public void iVetifyTheBookTitleInShoppingBasket(String txt) throws Throwable {
        Thread.sleep(2000);
        Assert.assertEquals(txt,new BasketPage().verifyTheBookisIntheShoppingbasket().substring(0,33));
    }

    @And("^I verify the Paperback in shopping basket$")
    public void iVetifyThePaperbookInShoppingBasket() {
    }

    @And("^I verify the Quntity in shopping basket$")
    public void iVetifyTheQuntityInShoppingBasket() {
    }

    @And("^I verify the Price in shopping basket$")
    public void iVetifyThePriceInShoppingBasket() {
    }

    @And("^I verify the Subtotal in shopping basket$")
    public void iVetifyTheSubtotalInShoppingBasket() {
    }
}
