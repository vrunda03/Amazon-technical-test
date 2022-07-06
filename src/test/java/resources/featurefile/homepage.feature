Feature: Functionality Test of given website
  As a user,I should be able to search and add Harry Potter and the cursed child book into the basket successfully

  Scenario: I should open homepage successfully
    Given I open homepage
    When I click on Accept cookies button
    Then I should verify the home page is opened correctly

  @smoke
  Scenario: Search forHarry Potter and the Philosopher’s Stone – 25th Anniversary Edition in section books
    Given   I open homepage
    And     I click on Accept cookies button
    When    I search on search bar "harry potter and the cursed child book" in book section.
    And     I click on search button
    Then    I Verify that first item title is "Harry Potter and the Cursed Child - Parts One and Two"
    And     I Verify that Selected type is "Paperback" paperback
    And     I Verify that the price is £"4"
    And     I navigate to the book details
    And     I Verify that first item title of detail page is "Harry Potter and the Cursed Child - Parts One and Two:"
    And     I Verify that price is £"£4.00"in detail page
    And     I Verify that type is paperback "Paperback"of detail page
    Then    I should navigate to Add to Basket page













