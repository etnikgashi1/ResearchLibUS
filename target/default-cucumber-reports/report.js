$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/User_Story_65.feature");
formatter.feature({
  "name": "As a student, I should be able to borrow a book",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RES-79"
    }
  ]
});
formatter.scenario({
  "name": "Verify that student borrow books in books page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-67"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click Borrow Book option for any unborrowed book",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.click_Borrow_Book_option_for_any_unborrowed_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that \"The book has been borrowed...\" message was displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.verify_that_message_was_displayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that borrowed book was displayed in borrowed book page",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.verify_that_borrowed_book_was_displayed_in_borrowed_book_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "borrowed book status shown as \"NOT RETURNED\"",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.borrowed_book_status_shown_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify student cannot borrow twice at the same time.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-68"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student search for a book writing \"Book\"",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_search_for_a_book_writing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student click Borrow Book to the first available book",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_click_Borrow_Book_to_the_first_available_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student search for a book writing \"Book\"",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_search_for_a_book_writing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The student click to \"Borrow Book\" button nothing should happen.",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_click_to_button_nothing_should_happen(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify History of borrowed books seen in Borrowing Books page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-69"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks Borrowing Books",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.clicks_Borrowing_Books()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Borrowed and not returned books should be seen as \"NOT RETURNED\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.borrowed_and_not_returned_books_should_be_seen_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Borrowed and returned books should be seen as \"RETURNED\"",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.borrowed_and_returned_books_should_be_seen_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify student return book in Borrowing Books page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-70"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks Borrowing Books",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.clicks_Borrowing_Books()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "find a \"NOT RETURNED\" book in table",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.find_a_book_in_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click RETURN button for that book",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.click_RETURN_button_for_that_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status of the book should change to \"RETURNED\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_status_of_the_book_should_change_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify student is able to select book category",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-71"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks book category dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.clicks_book_category_dropdown_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "as \"Action and Adventure\" category selected all the books in the table belongs to \"Action and Adventure\"",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.as_category_selected_all_the_books_in_the_table_belongs_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify student select show records dropdown",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-74"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicking show records dropdown and selecting \"50\" should show \"50\" books in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.clicking_show_records_dropdown_and_selecting_should_show_books_in_the_table(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify student can find book by using search box with book name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-75"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student search for a book writing \"Book\"",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_search_for_a_book_writing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the result should be showing \"Book\" in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_result_should_be_showing_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify student can find book by using search box with book author",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RES-79"
    },
    {
      "name": "@RES-77"
    },
    {
      "name": "@RES-78"
    }
  ]
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the student search for an author writing \"Jack London\"",
  "keyword": "And "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_student_search_for_an_author_writing(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the result should be showing \"Jack London\" in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "User_Story_65_Step_Definitions.the_result_should_be_showing_in_the_table(String)"
});
formatter.result({
  "status": "skipped"
});
});