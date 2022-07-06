@sanity
Feature: Test the functionality of product added into the basket for given website
  As a user,I should see the Harry Potter and the Cursed Child book in the shopping basket

  Scenario:I Click on 'There is one item in the basket'
    Given   I open homepage
    And     I click on Accept cookies button
    When    I search on search bar "harry potter and the cursed child book" in book section.
    And     I click on search button
    When   I click on Harry Potter and the cursed child book
    And     I Click On Add to Basket
    Then   I Verify that the notification is shown "Added to Basket"
    And    I click On Go to Basket button
    And   I verify the book title "Harry Potter and the Cursed Child" in shopping basket
    And   I verify the Paperback in shopping basket
    And   I verify the Quntity in shopping basket
    And   I verify the Price in shopping basket
    And   I verify the Subtotal in shopping basket