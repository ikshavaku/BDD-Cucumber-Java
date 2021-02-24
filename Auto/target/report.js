$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FirstFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstFeatureSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 76053303,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 46222,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 38321,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 36741,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstFeatureSteps.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 52543,
  "status": "passed"
});
formatter.match({
  "location": "FirstFeatureSteps.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "duration": 35950,
  "status": "passed"
});
});