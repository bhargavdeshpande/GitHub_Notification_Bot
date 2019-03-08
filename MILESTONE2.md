
# Milestone 2

### TOPIC: GitHub Notification Bot 

### Use Cases

###### USE CASE: Synchronising GitHub with bot
1. Preconditions<br>
User must have the extension installed.<br>
2. Main Flow<br>
User will provide correct credential (personal access token) to access the content of GitHub. [S1]<br>
3. Sub Flow<br>
[S1] Credentials will be checked against the correct crendentails of the user account.<br>
4. Alternative Flow<br>
[E1] User will stay on the same page with error message "Invalid Personal Access Token"<br>

###### USE CASE: Enable or Disable notifications
1. Preconditions<br>
User must have Notification bot extension enabled in the Google Chrome web browser.<br>
User must have signed in to the GitHub account through this extension<br>
2. Main Flow<br>
Flow 1: User will enable the GitHub notifications [S1]. Bot will start popping up the GitHub notifications to the user [S2]<br>
Flow 2: User will disable the GitHub notifications [S3]. Bot will stop showing the GitHub notifications to the user [S4]<br>
3. Sub Flows<br>
[S1] User will check option to enable GitHub notifications<br>
[S2] Bot will stop calling the GitHub notification API<br>
[S3] User will uncheck option to enable GitHub notifications<br>
[S4] Bot will start calling the GitHub notification API to fetch details<br>
4. Alternative Flows<br>
[E1] User will not check or uncheck any option. By default, GitHub notifications will be enabled<br>

###### USE CASE: Viewing the content of the notification
1. Preconditions<br>
User must have the chrome extension installed.<br>
User must have setup the Personal identification token in the Chrome extension.<br>
2. Main Flow<br>
User will click on the chrome extension icon to see the unread notifications[S1] and will click on desired notification[S2] to navigate[S2] to their corresponding GitHub account[S3].<br>
3. Sub Flows<br>
[S1] Bot would open a drop-down menu with unread notifications in it.<br>
[S2] The bot would provide notifications that are hyperlinked to the corresponding change (commit in the repositories, branch, issues etc) in the GitHub account.<br>
[S3] The bot would open a relevant section in the GitHub account.<br>
4. Alternative Flows<br>
[E1] No unread notification is there in the system.<br>

###### USE CASE: Listing unread notifications
1. Preconditions<br>
User must have the chrome extension installed.<br>
User must have setup the Personal identification token in the Chrome extension.<br>
2. Main Flow<br>
The bot will fetch the unread notifications[S1] for an account from GitHub and populate the drop-down view[S2] with a list of those unread notifications.<br>
3. Sub Flows<br>
[S1] Bot will call the notifications API every 30 seconds and fetch the list of notifications.<br>
[S2] Using the returned json array from the API, the bot will populate the drop-down view using relevant key-value pairs.<br>
4. Alternative Flow<br>
[E1] The Github token is not valid so the API returns a 401 error and bot displays an appropriate message.<br>


## SELENIUM IMPLEMENTATION

#### Dealing with Chrome extension:

Selenium is a great way to automate browser testing but the browser extensions are embedded add-ons rather than regular HTML files. As a result we can’t directly simulate user clicks, inspect elements, or run other such activities for chrome extensions.

Therefore, we used Selenium on a browser extension by first finding out the location of extension’s pages and then switching their scope to webUI. Consequently, we were able to interact with them as DOM elements.

For selenium testing, we had our extension in .crx format. First, we extracted the unique ID of the .CRX in the Chrome Extension. Then, we extracted the names of different source files of .crx extension. There are various web resources from where we can view the source files of .crx extension. After knowing the source files and unique ID of the extension, we had the resources to navigate to the appropriate pages in the chrome extension. 

URL for accessing a  specific page in the extension would look like: 
chrome-extension://UNIQUEID/SPECIFICPAGE.html.


#### Working:

We created a maven repository. In its pom.xml file we added appropriate dependencies. The dependencies added are Selenium-API, Selenium-Driver, TestNG, selenium-chrome-driver and selenium-java. Then, we used Selenium WebDrive to open the instance of chrome. Consequently, chrome browser was launched and it navigated to chrome extension's webpage.

Detailed architecture of Web driver interacting with selenium script and interaction of Web driver and actual browse:
<p align = "center">
 <img align="center" width = "550" src = "https://media.github.ncsu.edu/user/11941/files/252d6d00-41b9-11e9-90d6-d166af9a5cae"> 
</p>


#### TestNG plugin:

We added TestNG plugin to the eclipse since we can’t run selenium script as normal java program. ’Public static void main (psvm)’ is the entry point of any java program. But selenium script doesn’t have psvm and has to be run as TestNG suite.

#### TestNG class:

Configuration information for a TestNG class: 

@BeforeSuite: The annotated method will be run before all tests in this suite have run. <br>
@AfterSuite: The annotated method will be run after all tests in this suite have run.<br> 
@BeforeTest: The annotated method will be run before any test method belonging to the classes inside the <test> tag is run. <br>
@AfterTest: The annotated method will be run after all the test methods belonging to the classes inside the <test> tag have run. <br>
@BeforeGroups: The list of groups that this configuration method will run before. This method is guaranteed to run shortly before the first test method that belongs to any of these groups is invoked.<br> 
@AfterGroups: The list of groups that this configuration method will run after. This method is guaranteed to run shortly after the last test method that belongs to any of these groups is invoked. <br>
@BeforeClass: The annotated method will be run before the first test method in the current class is invoked. <br>
@AfterClass: The annotated method will be run after all the test methods in the current class have been run. <br>
@BeforeMethod: The annotated method will be run before each test method. <br>
@AfterMethod: The annotated method will be run after each test method.<br>

In our project, we created three @Test annotations with each test method (Test_Case1, Test_case2, Test_case3) covering one use-case. We also created @BeforeMethod which is invoked before every @test Method and launches the chrome browser each time and a use case is covered.
