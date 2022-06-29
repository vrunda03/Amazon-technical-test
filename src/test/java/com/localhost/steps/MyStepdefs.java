package com.localhost.steps;

import com.localhost.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^I open homepage$")
    public void iOpenHomepage() {
    }

    @When("^I click on Accept cookies button$")
    public void iClickOnAcceptCookiesButton() {
        new HomePage().clickOnAcceptCookies();
    }

    @Then("^I should verify the home page is opened correctly$")
    public void iShouldVerifyTheHomePageIsOpenedCorrectly() {
    }
}
