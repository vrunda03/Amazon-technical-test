Feature: Functionality Test of given website

  Scenario: I should open homepage successfully
    Given I open homepage
    When I click on Accept cookies button
    Then I should verify the home page is opened correctly

  @smoke
  Scenario: Search forHarry Potter and the Philosopher’s Stone – 25th Anniversary Edition in section books
    Given   I open homepage
    And     I click on Accept cookies button
    When    I search on search bar "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed." in book section.
    And     I click on search button
    Then    I Verify that first item title is "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.-"
    And     I Verify that book has "Best Seller" badge
    And     I Verify that Selected type is "Paperback" paperback
    And     I Verify that the price is £"8"
    And     I navigate to the book details
    And    I Verify that first item title of detail page is "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.- "
    And    I Verify that first badge "#1 Best Seller"of detail page
    And    I Verify that price is £"£8.00"in detail page
    And    I Verify that type is paperback "Paperback"of detail page
    Then I should navigate to Add to Basket page













