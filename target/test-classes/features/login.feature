Feature: Login functionality

  @login
  Scenario Outline: Verify that Student can log in with valid credentials
    Given I navigate to the login page
    And I write my email address "<email>"
    And I write my password "<password>"
    When I click on sign in button
    Then I should see books page

    Examples:
    | email | password |
    | student47@library | 3lUpdof3 |
    | student48@library | b0zgv1ab |
    | student49@library | npSk3tsr |

  @login
  Scenario Outline: Verify that Librarian can log in with valid credentials
    Given I navigate to the login page
    And I write my email address "<email>"
    And I write my password "<password>"
    When I click on sign in button
    Then I should see dashboard page

    Examples:
    | email | password |
    | librarian26@library | gFOHHm6H |
    | librarian27@library | ZM9JMdIK |
    | librarian28@library | wVFVnaCO |

  @login
  Scenario: Verify that User cannot log in with no credentials
    Given I navigate to the login page
    And I write my email address ""
    And I write my password ""
    When I click on sign in button
    Then I should see This field is required. message pop up

  @login
  Scenario: Verify that User cannot log in with invalid email
    Given I navigate to the login page
    And I write my email address "person@library"
    And I write my password ""
    When I click on sign in button
    Then I should see Sorry, Wrong Email or Password message pop up
