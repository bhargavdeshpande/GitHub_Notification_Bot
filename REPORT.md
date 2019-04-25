# MILESTONE 5

## Screencast of the final demo of the GitHub Notification bot
https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/Final_Demo.mp4


## Problem

One of the issues while developing software using GitHub is not being notified or missing notifications about updates in the repository. Due to the complexities of modern agile software development, developers have to manage multiple tools parallelly. This may cause them to miss important notifications that are relevant to them and the overall development of the project.

Missing notifications can lead to problems that slow down the development process and hamper production software quality. Irregular git pulls may lead to merge conflicts which can be difficult to resolve. These conflicts can sometimes slow down development process as resolving them is tedious and time consuming. Also, in a project it is important to be immediately notified about issues being created as sometimes these issues might be security/scalability vulnerability bugs. Thus, making it important to resolve them promptly. In addition to these, it is also important to know the tasks being completed while working parallelly on a project so that the future tasks can be planned accordingly.

## Features

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
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/.png">
</p>
<br>
<br>


### [3] Enable/ Disable notifications

A checkbox would be provided to the user, in case he/she would want an option to disable and re-enable the notifications.   

<p align="center">
<img align="center" src="https://github.ncsu.edu/bbdeshpa/csc510-project/blob/master/.png">
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


