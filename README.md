# csc510-project

**Problem Statement** <br>
One of the issues while developing software using GitHub is not being notified or missing notifications about updates in the repository. Due to the complexities of modern agile software development, developers have to manage multiple tools parallelly. This may cause them to miss important notifications that are relevant to them and the overall development of the project. <br><br>
Missing notifications can lead to problems that slow down the development process and hamper production software quality. Irregular git pulls may lead to merge conflicts which can be difficult to resolve. These conflicts can sometimes slow down development process as resolving them is tedious and time consuming. Also, in a project it is important to be immediately notified about issues being created as sometimes these issues might be security/scalability vulnerability bugs. Thus, making it important to resolve them promptly. In addition to these, it is also important to know the tasks being completed while working parallely on a project so that the future tasks can be planned accordingly. <br><br>
**Solution Description**<br>
The GitHub Notification bot will be an extension to Google Chrome, which is the most popular web browser. This extension will be linked to a GitHub account and will provide regular updates for it. The notification bot will interact with GitHub APIs every 30 seconds and will display unread notifications. The bot will help all the collaborators to stay tuned with the changes made to their repositories. This will improve the quality of software and speed up the process of development by timely resolution of merge conflicts and by apt announcement of issues. <br><br>
To interact with the bot, the user first needs to install and add the extension to the web browser. The user then needs to provide “Personal Access Token” created from GitHub Account only for the first time. In action, the bot will populate notifications to the user as a list in a drop down when the user clicks the extension icon. The message-title in the dropdown will be a hyperlink to the notification. The notification will include the details regarding any commits, pull requests or issues related to those repositories.
<br><br>
**USE CASES**<br><br>
**USE CASE: Synchronizing GitHub with the Bot**<br>
1 Preconditions<br>
User must have the extension installed.<br>
2 Main Flow<br>
User will provide correct credential (personal access token) to access the content of GitHub. <br>
3 Sub Flows<br>
Notifications of the updates in the repository will be displayed.	<br>
4 Alternative Flows<br>
Incorrect credentials entered<br>
<br>
**USE CASE: Enable or Disable notifications**<br>
1 Preconditions<br>
 User must have Notification bot extension enabled in the Google Chrome web browser.<br>
 User must have signed in to the GitHub account through this extension<br>
2 Main Flow<br>
 Flow 1: User will enable the GitHub notifications [S1]. Bot will start popping up the GitHub notifications to the user [S2]<br>
 Flow2:  User will disable the GitHub notifications [S3]. Bot will stop showing the GitHub notifications to the user [S4]<br>
3 Sub Flows<br>
[S1] User will check option to enable GitHub notifications<br>
[S2] Bot will stop calling the GitHub notification API<br>
[S3] User will uncheck option to enable GitHub notifications<br>
[S4] Bot will start calling the GitHub notification API to fetch details<br>
4 Alternative Flows<br>
[E1] User will not check or uncheck any option. By default, GitHub notifications will be enabled<br>
<br>
**USE CASE: Viewing the content of the notification**<br>
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
<br>
**USE CASE: Listing unread notifications** <br>
1. Preconditions<br>
User must have the chrome extension installed.<br>
User must have setup the Personal identification token in the Chrome extension.<br>
2. Main Flow<br>
The bot will fetch the unread notifications[S1] for an account from GitHub and populate the drop down view[S2] with a list of those unread notifications. <br>
3. Sub Flows<br>
[S1] Bot will call the notifications API every 30 seconds and fetch the list of notifications.<br>
[S2] Using the returned json array from the API, the bot will populate the drop-down view using relevant key-value pairs.<br>
4. Alternative Flow<br>
[E1] The GitHub token is not valid so the API returns a 401 error and bot displays an appropriate message.<br>



