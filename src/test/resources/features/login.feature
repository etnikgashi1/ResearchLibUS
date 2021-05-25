Feature: Login functionality

  @login
  Scenario Outline: Verify that Student is able to login
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
  Scenario Outline: Verify that Librarian is able to login
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