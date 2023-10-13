Feature: User Authentication Tests

  Background:
    Given User navigates to the Nexudus Application 

  Scenario: User login should be successful 
    And User enters the username as "adrian+1004930927@nexudus.com"
    And User enters the password as "414HHK9dxg--Gj"
    When user clicks on the login button 
    Then Login should be successful 
    And User logs out

  Scenario: User login should not be successful
    And User enters the username as "bad@example.com"
    And User enters the password as "badpassword"
    When user clicks on the login button 
    Then Login should not be successful 
