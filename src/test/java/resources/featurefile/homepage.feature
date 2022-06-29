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
#    And     I Verify that the price is £"£8.00"
    And     I navigate to the book details
    And    I Verify that first item title of detail page is "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.- "
#    And    I Verify that first badge "Best Seller"of detail page
#    And    I Verify that price is £"£8.00"in detail page
    And    I Verify that type is paperback "Paperback"of detail page




#  Scenario: I click on Basket
#    Given   I open homepage
#    When    I click on basket on amezon website(//div[@id='nav-cart-count-container'])
#    Then    Verify the Selected product name "Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.-Harry Potter and the Philosopher’s Stone – 25th Anniversary Edition: J.K. Rowling -25th Ann. Ed.-by J.K. Rowling"
#    And     Verify type of print is Paperback.(//body/div[@id='a-page']/div[2]/div[3]/div[4]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[3]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/span[1]/span[1])
#    And     Verify price is "£8.00"
#    And     Verify quantity is "1"(//span[@id='a-autoid-5-announce'])
#    And     Verify total price is "8.00"









