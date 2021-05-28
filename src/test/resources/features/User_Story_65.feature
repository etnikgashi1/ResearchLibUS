@RES-79
Feature: As a student, I should be able to borrow a book

	#1-Student can borrow books in books page.
  @RES-67 @RES-78
  Scenario: Verify that student borrow books in books page
    Given the user navigate to login page
    When the student logins successfully
#   And click Borrow Book option for any unborrowed book
#    Then verify that "The book has been borrowed..." message was displayed
#    And verify that borrowed book was displayed in borrowed book page
#    And borrowed book status shown as "NOT RETURNED"
#
#	#2-Book cannot be borrowed twice at the same time.
#  @RES-68 @RES-78
#  Scenario: Verify student cannot borrow twice at the same time.
#    Given the user navigate to login page
#    When the student logins successfully
#    And the student search for a book writing "Book"
#    And the student click Borrow Book to the first available book
#    And the student search for a book writing "Book"
#    Then The student click to "Borrow Book" button nothing should happen.
#
#
#
#	#3-Student should have a history of borrowed books when navigate to borrowing books page.
#  @RES-69 @RES-78
#  Scenario: Verify History of borrowed books seen in Borrowing Books page
#    Given the user navigate to login page
#    When the student logins successfully
#    And clicks Borrowing Books
#    Then Borrowed and not returned books should be seen as "NOT RETURNED"
#    And Borrowed and returned books should be seen as "RETURNED"
#
#
#	#4-Student can return books when navigate to borrowing books page.
#  @RES-70 @RES-78
#  Scenario: Verify student return book in Borrowing Books page
#    Given the user navigate to login page
#    When the student logins successfully
#    And clicks Borrowing Books
#    And find a "NOT RETURNED" book in table
#    And click RETURN button for that book
#    Then the status of the book should change to "RETURNED"
#
#
#
#
#	#5-Student can select related category to see all books in that category by using book categories dropdown.
#  @RES-71 @RES-78
#  Scenario: Verify student is able to select book category
#    Given the user navigate to login page
#    When the student logins successfully
#    And clicks book category dropdown menu
#    Then as "Action and Adventure" category selected all the books in the table belongs to "Action and Adventure"
#
#	#6-Student can use show records dropdown for getting number of entries depends the dropdown options.
#  @RES-74 @RES-78
#  Scenario: Verify student select show records dropdown
#    Given the user navigate to login page
#    When the student logins successfully
#    Then clicking show records dropdown and selecting "50" should show "50" books in the table
#
#	#7-Student can find book by using search box with book's Name and Author.
#  @RES-75 @RES-78
#  Scenario: Verify student can find book by using search box with book name
#    Given the user navigate to login page
#    When the student logins successfully
#    And the student search for a book writing "Book"
#    Then the result should be showing "Book" in the table
#
#	#7-Student can find book by using search box with book's Name and Author.
#  @RES-77 @RES-78
#  Scenario: Verify student can find book by using search box with book author
#    Given the user navigate to login page
#    When the student logins successfully
#    And the student search for an author writing "Jack London"
#    Then the result should be showing "Jack London" in the table