$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Navigate to LogIn Page of \"www.facebook.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters UserName and Password",
  "rows": [
    {
      "cells": [
        "aditanan",
        "abc5678@$"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstFeatureSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 78717599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.facebook.com",
      "offset": 32
    }
  ],
  "location": "FirstFeatureSteps.user_Navigate_to_LogIn_Page(String)"
});
formatter.result({
  "duration": 1658073,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.user_enters_UserName_and_Password(DataTable)"
});
formatter.result({
  "duration": 813432,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 42666,
  "status": "passed"
});
});