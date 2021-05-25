$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that Student is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I write my email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I write my password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see books page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "student47@library",
        "3lUpdof3"
      ]
    },
    {
      "cells": [
        "student48@library",
        "b0zgv1ab"
      ]
    },
    {
      "cells": [
        "student49@library",
        "npSk3tsr"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that Student is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my email address \"student47@library\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my password \"3lUpdof3\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see books page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_books_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Student is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my email address \"student48@library\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my password \"b0zgv1ab\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see books page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_books_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Student is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my email address \"student49@library\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my password \"npSk3tsr\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see books page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_books_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify that Librarian is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I write my email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I write my password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "librarian26@library",
        "gFOHHm6H"
      ]
    },
    {
      "cells": [
        "librarian27@library",
        "ZM9JMdIK"
      ]
    },
    {
      "cells": [
        "librarian28@library",
        "wVFVnaCO"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that Librarian is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my email address \"librarian26@library\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my password \"gFOHHm6H\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Librarian is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my email address \"librarian27@library\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my password \"ZM9JMdIK\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that Librarian is able to login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my email address \"librarian28@library\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_email_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I write my password \"wVFVnaCO\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_write_my_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_click_on_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});