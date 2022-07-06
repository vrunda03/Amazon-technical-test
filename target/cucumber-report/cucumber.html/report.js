$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Functionality Test of given website",
  "description": "As a user,I should be able to search and add Harry Potter and the cursed child book into the basket successfully",
  "id": "functionality-test-of-given-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4314017800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search forHarry Potter and the Philosopher’s Stone – 25th Anniversary Edition in section books",
  "description": "",
  "id": "functionality-test-of-given-website;search-forharry-potter-and-the-philosopher’s-stone-–-25th-anniversary-edition-in-section-books",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I open homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Accept cookies button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I search on search bar \"harry potter and the cursed child book\" in book section.",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Verify that first item title is \"Harry Potter and the Cursed Child - Parts One and Two\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I Verify that Selected type is \"Paperback\" paperback",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify that the price is £\"4\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I navigate to the book details",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I Verify that first item title of detail page is \"Harry Potter and the Cursed Child - Parts One and Two:\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I Verify that price is £\"£4.00\"in detail page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Verify that type is paperback \"Paperback\"of detail page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to Add to Basket page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iOpenHomepage()"
});
formatter.result({
  "duration": 84758300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookiesButton()"
});
formatter.result({
  "duration": 144812600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harry potter and the cursed child book",
      "offset": 24
    }
  ],
  "location": "BookSteps.iSearchOnSearchBarInBookSection(String)"
});
formatter.result({
  "duration": 327770700,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 1243739100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child - Parts One and Two",
      "offset": 35
    }
  ],
  "location": "BookSteps.iVerifyThatFirstItemTitleIs(String)"
});
formatter.result({
  "duration": 4059050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 32
    }
  ],
  "location": "BookSteps.iVerifyThatSelectedTypeIsPaperback(String)"
});
formatter.result({
  "duration": 2058134200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 29
    }
  ],
  "location": "BookDetailSteps.iVerifyThatThePriceIs(String)"
});
formatter.result({
  "duration": 42081300,
  "status": "passed"
});
formatter.match({
  "location": "BookDetailSteps.iNavigateToTheBookDetails()"
});
formatter.result({
  "duration": 3435530900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter and the Cursed Child - Parts One and Two:",
      "offset": 50
    }
  ],
  "location": "BookDetailSteps.iVerifyThatFirstItemTitleOfDetailPageIs(String)"
});
formatter.result({
  "duration": 10054214300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£4.00",
      "offset": 25
    }
  ],
  "location": "BookDetailSteps.iVerifyThatPriceIsInDetailPage(String)"
});
formatter.result({
  "duration": 32970900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paperback",
      "offset": 33
    }
  ],
  "location": "BookDetailSteps.iVerifyThatTypeIsPaperbackOfDetailPage(String)"
});
formatter.result({
  "duration": 35023900,
  "status": "passed"
});
formatter.match({
  "location": "BookDetailSteps.iShouldNavigateToAddToBasketPage()"
});
formatter.result({
  "duration": 1208620100,
  "status": "passed"
});
formatter.after({
  "duration": 682299100,
  "status": "passed"
});
});