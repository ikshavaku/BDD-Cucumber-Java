Feature: Login Action



Background: User has opened the browser
 Given User is on Home Page
 When User Navigate to LogIn Page of "www.facebook.com"
 And User enters UserName and Password
 	|aditanan|abc5678@$|
 Then Message displayed Login Successfully

@Smoke
Scenario: Successful LogOut
 When User LogOut from the Application
 Then Message displayed LogOut Successfully

@End2End
Scenario Outline: Sucessful Printing of username and passwords
  Given user navigates to login page
  When 	user enter "<usernames>" and "<password>"
  Then print usernames and password
  
  Examples:
  	| usernames | password |
  	| aditanan | password1 |
  	| vinkuma1 | password2 |