# MILESTONE 5

## Screencast of the final demo of the GitHub Notification bot
https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/Final_Demo.mp4


## PROBLEM

One of the issues while developing software using GitHub is not being notified or missing notifications about updates in the repository. Due to the complexities of modern agile software development, developers have to manage multiple tools parallelly. This may cause them to miss important notifications that are relevant to them and the overall development of the project.

Missing notifications can lead to problems that slow down the development process and hamper production software quality. Irregular git pulls may lead to merge conflicts which can be difficult to resolve. These conflicts can sometimes slow down development process as resolving them is tedious and time consuming. Also, in a project it is important to be immediately notified about issues being created as sometimes these issues might be security/scalability vulnerability bugs. Thus, making it important to resolve them promptly. In addition to these, it is also important to know the tasks being completed while working parallelly on a project so that the future tasks can be planned accordingly.

## FEATURES

### [1] Synchronising GitHub with bot 

This feature included several steps that consisted of installing the extension and providing a correct personal access token in order to access the notifications from GitHub. The bot can be added from the "Chrome Web Store" or by downloading the code from the GitHub repo and then installing it from the extensions page.

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/extension.png">
</p>
<br>
<br>

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/chrome_store.png">
</p>
<br>
<br>

Once the user has installed the bot, he/she will be prompted to enter an access token. 

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/first_page.png">
</p>
<br>
<br>

If the user has entered an invalid personal access token, the user will not be provided access to the GitHub repository.

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/invalid.png">
</p>
<br>
<br>

### [2] Viewing the content of notifications

Once the user has logged in, he/she will be able to view the notifications on the content of the extension. 

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/noti.jpeg">
</p>
<br>
<br>


### [3] Enable/ Disable notifications

A checkbox would be provided to the user, in case he/she would want an option to disable and re-enable the notifications.   

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/enable.jpg">
</p>
<br>
<br>


If the user has not checked on the "Enable Notifications" checkbox, that is disabled them, he/she will not be shown any new updated from their GitHub repository.


<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/disabled.png">
</p>
<br>
<br>

### [4] Mark All Read 

A button "Mark All Read" will be provided to the user which he/she can use to remove all the notifications from the page. This will automatically clear all the notifications on the GitHub page too.

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/basic.png">
</p>
<br>
<br>

### [5] Upgrading version of the bot

If the developers make any change to the version of the bot in the "manifest.json" file of the repository, the user will be prompted the update the bot from the chrome store. This way, the user can always be up to date with the application. 

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/version.png">
</p>
<br>
<br>


## REFLECTION

The development process of the bot was carried out in several stages. The detailed information of all stages are given below-

### Stage 1 (Information Gathering)

The first stage during any particular process involved thorough research of the work which is to be carried out. Depending on any technologies which are to be used a specific team member would study or contribute materials which would be helpful in carrying out the implementation.

### Stage 2 (Planning and Designing)

The next stage involved planning the work that needs to be carried out for that particular sprint. Depending on the plans, a specific design was drafted. This design would be used throughout the implementation process. This stage also defined the architecture of our bot. Basically, in this stage the "What" and "How" part of the project was implemented.

### Stage 3 (Development)

To be added by Utkarsh

### Stage 4 (Testing)

This stage involved thorough testing of the development which was carried out in the previous stage. There were two types of testing to support the development:

#### Unit Testing: 

Unit Testing is a level of software testing where individual units/ components of a software are tested. The purpose is to validate that each unit of the software performs as designed. A unit is the smallest testable part of any software. It usually has one or a few inputs and usually a single output. In procedural programming, a unit may be an individual program, function, procedure, etc. In object-oriented programming, the smallest unit is a method.  <br>
In this project unit testing is carried out using Mocha, a JavaScript Test Framework. It runs on Node.js. During the testing assert statement is provided using a separate library called Chai. There are three key elements while carrying out unit testing using **Mocha and Chai** <br>
* **assert** helps to determine the status of the test, it determines the success or failure of the test.
* **describe** is a function which holds the collection of tests. It takes two parameters, first one is the meaningful name to functionality under test and second one is the function which contains one or multiple tests.
* **it** is a function again which is actually a test itself and takes two parameters, first parameter is name to the test and second parameter is function which holds the body of the test. <br>

For the setup of mocha on a system, the development dependencies must be added to the **package.json** file. This will be carried out using the command *sudo npm install chai --save-dev mocha*. In the same file the value of test must be changed to **"mocha"**. This will set up the environment for mocha.

#### Selenium Testing

We created a maven repository. In its pom.xml file we added appropriate dependencies. The dependencies added are Selenium-API, Selenium-Driver, TestNG, selenium-chrome-driver and selenium-java. Then, we used Selenium WebDrive to open the instance of chrome. Consequently, chrome browser was launched and it navigated to chrome extension's webpage.

Detailed architecture of Web driver interacting with selenium script and interaction of Web driver and actual browse:
<p align = "center">
 <img align="center" width = "550" src = "https://media.github.ncsu.edu/user/11941/files/252d6d00-41b9-11e9-90d6-d166af9a5cae"> 
</p>


For all the sprints that were involved in this project, the above development process was used in the stages mentioned.


## LIMITATIONS

The limitations of the project are as follows:

[1] Once the user is logged in, by providing the credential (personal access token), he/she will not be able to log out of the application. The only way that is possible is by remove the extension from chrome and adding it again. This will prompt the user to enter the token again.

[2] The bot is currently developed only for the Google Chrome web browser.

## FUTURE WORK

### [1] Session Management

Session management is one of the most important plan that can be added to a web application. Through this the user will be able to save the token they entered and can be used for any session they want to. We would want to add a "Logout" button, which will sign out the user for privacy purpose.

### [2] Extending project to other web browsers

We would also in the future, want to make this application available to other web browsers such as "Mozilla Firefox" or "Safari".





