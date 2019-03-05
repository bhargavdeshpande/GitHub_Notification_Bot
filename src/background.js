setInterval(updateNotifications, 3000);
var text;
function updateNotifications(){
	console.log("in updateNotifications");
	oldNotifications = localStorage.notificationsJson;
	gitToken = localStorage.gitToken;
	gitToken = "temp"; // Remove later
	if(gitToken != null){
		newNotifications = fetchNotifications_mock();
		if(parseNotifications(newNotifications) != oldNotifications){
			console.log(oldNotifications);
			console.log(newNotifications);
			localStorage.notificationsJson = newNotifications;
		}
	}
}
function parseNotifications(){
	var myObj = JSON.parse(fetchNotifications_mock());
	var notifications = []
	for(var i=0;i< myObj.length;i++){
		var item = someData[i];
		notifications.push({
			"type":item.subject.type,
			"title":item.subject.title,
			"url":item.subject.url
		});
	}
	return notifications;
}

// to be later called with github API
function fetchNotifications_mock(){
	console.log("fetchNotifications");
	var text = "";
	if(Math.random()%2 == 0){
		text = readTextFile('json_rep_content_1.txt');
		console.log(text);
		return text; 
	}
	text = readTextFile('json_rep_content_2.txt');
	console.log("->"+text);
	return text;
}

function readTextFile(file)
{
	//How to read?
}

//For test only
function Hello() {
	console.log("success in Hello");
}
