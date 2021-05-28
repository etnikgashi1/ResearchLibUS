@RES-93
Feature: 

	
	@RES-91
	Scenario: Verify that librarian can log out
		    Given I navigate to the login page
		    And I write my email address "librarian26@library"
		    And I write my password "gFOHHm6H"
		    And I click on sign in button
		    And I click the dropdown menu on the dashboard page
		    When I click the log out option from the dropdown menu
		    Then I should be able to see the log in page	

	
	@RES-92
	Scenario: Verify that student can log out
		    Given I navigate to the login page
		    And I write my email address "student47@library"
		    And I write my password "3lUpdof3"
		    And I click on sign in button
		    And I click the dropdown menu on the dashboard page
		    When I click the log out option from the dropdown menu
		    Then I should be able to see the log in page