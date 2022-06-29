Feature: Test the functionality of basket for given website

@sanity
Scenario:I Click on 'There is one item in the basket'
Given   I open homepage
And     I click on Accept cookies button
When    I search on search bar "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed." in book section.
And     I click on search button
When   I click on Harry Potter and the Philosopher’s Stone book
And    Click On Add to Basket
Then   Verify that the notification is shown Added to Basket
And    Verify that the one item in the basket
And    I click On Go to Basket button