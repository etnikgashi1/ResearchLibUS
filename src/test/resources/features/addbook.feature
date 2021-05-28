
## scenarios

@addBook
Feature: Only librarians should be able to add books
  Description: Verify that a librarian can add book, test the functionality
  Background:
    Given the user is in the log in page


  Scenario: Verify that Librarian users should be able to add books
    When the user enters the librarian information
    And the user navigate to Books module
    And the user click on Add Book button
    And fill the necessary input boxes with valid inputs
    And the user click on Save Changes
    Then "The book has been created." message should be displayed


  Scenario: Verify the book parameters in the Add Book Page
    When the user enters the librarian information
    And the user navigate to Books module
    And the user click on Add Book button
    Then following book parameters should be displayed on the table
      | Book Name     |
      | ISBN          |
      | Year          |
      | Author        |
      | Book Category |
      | Description   |


  Scenario: Verify the book categories in the Add Book Page
    When the user enters the librarian information
    And the user navigate to Books module
    And the user click on Add Book button
    Then following book categories should be able to selected on the dropdown menu
      | Action and Adventure    |
      | Anthology               |
      | Classic                 |
      | Comic and Graphic Novel |
      | Crime and Detective     |
      | Drama                   |
      | Fable                   |
      | Fairy Tale              |
      | Fan-Fiction             |
      | Fantasy                 |
      | Historical Fiction      |
      | Horror                  |
      | Science Fiction         |
      | Biography/Autobiography |
      | Humor                   |
      | Romance                 |
      | Short Story             |
      | Essay                   |
      | Memoir                  |
      | Poetry                  |
