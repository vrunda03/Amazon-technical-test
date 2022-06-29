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
    public void iSearchOnSearchBarInBookSection(String book)  {
       new HomePage().enterBookName(book);
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new HomePage().clickOnSearchButton();
    }

    @Then("^I Verify that first item title is \"([^\"]*)\"$")
    public void iVerifyThatFirstItemTitleIs(String bookname) throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertTrue(new BookSectionPage().verifyBookInSection()
                .contains("Harry Potter and the Philosopher’s Stone"));


    }

    @And("^I Verify that book has \"([^\"]*)\" badge$")
    public void iVerifyThatBookHasBadge(String text)  {
        Assert.assertEquals("Book is not bestseller ",text,new BookSectionPage().verifyBadge());

    }

    @And("^I Verify that Selected type is \"([^\"]*)\" paperback$")
    public void iVerifyThatSelectedTypeIsPaperback(String texts)  {
        Assert.assertEquals("Book has no paperback ",texts,new BookSectionPage().verifypapaerback());

    }

    @And("^I Verify that the price is \"([^\"]*)\"$")
    public void iVerifyThatThePriceIs(String msg)  {
        Assert.assertEquals("Book has no price ",msg,new BookSectionPage().verifyPrice());
    }

    @When("^I click on Harry Potter and the Philosopher’s Stone book$")
    public void iClickOnHarryPotterAndThePhilosopherSStoneBook() {
        new BookSectionPage().clickOnBookdetail();

    }

    @And("^Click On Add to Basket$")
    public void clickOnAddToBasket() {
        new BookDetailPage().clickOnaddToBasket();
    }

    @Then("^Verify that the notification is shown Added to Basket$")
    public void verifyThatTheNotificationIsShownAddedToBasket() {
        Assert.assertEquals("Cannot verifying the message ",new BasketPage().verifyNotificationAddedToBasket());
    }

    @And("^Verify that the one item in the basket$")
    public void verifyThatTheOneItemInTheBasketInputValueProceedToCheckout() {
        Assert.assertEquals("Cannot verifying the message",new BasketPage().verifyThereisOneItem());
    }

   @And("^I click On Go to Basket button$")
    public void iClickOnGoToBasketButton() {
        new BasketPage().clickOnGoToBasket();
    }


}
