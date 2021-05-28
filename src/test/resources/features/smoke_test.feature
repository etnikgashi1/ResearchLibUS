@RES-90 @smoke
Feature:

	#Only authorized users should be able to login the application using valid credentials
	#
	#{color:#de350b}*Acceptance Criteria:*{color}
	# *AC1*-User can login with valid credentials (We have 2 types user such as student and librarian).
	# *AC2*-User can not login with invalid credentials.
  @RES-72 @RES-81
  Scenario Outline: Verify that Student can log in with valid credentials (automated)
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

	#Only authorized users should be able to login the application using valid credentials
	#
	#{color:#de350b}*Acceptance Criteria:*{color}
	# *AC1*-User can login with valid credentials (We have 2 types user such as student and librarian).
	# *AC2*-User can not login with invalid credentials.
  @RES-73 @RES-81
  Scenario Outline: Verify that Librarian can log in with valid credentials (automated)
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

	#Only authorized users should be able to login the application using valid credentials
	#
	#{color:#de350b}*Acceptance Criteria:*{color}
	# *AC1*-User can login with valid credentials (We have 2 types user such as student and librarian).
	# *AC2*-User can not login with invalid credentials.
  @RES-80 @RES-81
  Scenario: Verify that User cannot log in with invalid credentials (automated)
    Given I navigate to the login page
    And I write my email address "person@library"
    And I write my password "123456789"
    When I click on sign in button
    Then I should see Sorry, Wrong Email or Password message pop up

	#Only authorized users should be able to login the application using valid credentials
	#
	#{color:#de350b}*Acceptance Criteria:*{color}
	# *AC1*-User can login with valid credentials (We have 2 types user such as student and librarian).
	# *AC2*-User can not login with invalid credentials.
  @RES-76 @RES-81
  Scenario: Verify that User cannot log in with no credentials (automated)
    Given I navigate to the login page
    And I write my email address ""
    And I write my password ""
    When I click on sign in button
    Then I should see This field is required. message pop up
