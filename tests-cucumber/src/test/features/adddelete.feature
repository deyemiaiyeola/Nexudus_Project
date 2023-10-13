Feature: User Adds and Deletes Product Tests

  Background:
    Given User navigates to the Nexudus Application 

  Scenario: User login should be successful 
    And User enters the username as "adrian+1004930927@nexudus.com"
    And User enters the password as "414HHK9dxg--Gj"
    When user clicks on the login button 
    And User clicks on add product 
    And User enters Name Description and Price
    And User saves changes 
    Then a search on the new product will display the product 
    When User deletes the added product 
    Then the product is no longer available
    And User logs out

