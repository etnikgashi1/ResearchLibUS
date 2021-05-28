$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/addbook.feature");
formatter.feature({
  "name": "Only librarians should be able to add books",
  "description": "  Description: Verify that a librarian can add book, test the functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addBook"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the log in page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_is_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Librarian users should be able to add books",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addBook"
    }
  ]
});
formatter.step({
  "name": "the user enters the librarian information",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_enters_the_librarian_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to Books module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_navigate_to_Books_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Add Book button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_click_on_Add_Book_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill the necessary input boxes with valid inputs",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.fill_the_necessary_input_boxes_with_valid_inputs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Save Changes",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_click_on_Save_Changes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"The book has been created.\" message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.message_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the log in page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_is_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the book parameters in the Add Book Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addBook"
    }
  ]
});
formatter.step({
  "name": "the user enters the librarian information",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_enters_the_librarian_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to Books module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_navigate_to_Books_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Add Book button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_click_on_Add_Book_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following book parameters should be displayed on the table",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.following_book_parameters_should_be_displayed_on_the_table(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in the log in page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_is_in_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the book categories in the Add Book Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addBook"
    }
  ]
});
formatter.step({
  "name": "the user enters the librarian information",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_enters_the_librarian_information()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to Books module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_navigate_to_Books_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Add Book button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.the_user_click_on_Add_Book_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "following book categories should be able to selected on the dropdown menu",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.AddBook.following_book_categories_should_be_able_to_selected_on_the_dropdown_menu(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});