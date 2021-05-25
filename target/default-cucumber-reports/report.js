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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.User_Story_65_Step_Definitions.the_user_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the student logins successfully",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekschool.step_definitions.User_Story_65_Step_Definitions.the_student_logins_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});