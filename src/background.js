setInterval(updateNotifications, 3000);
var text;
function updateNotifications(){
	console.log("in updateNotifications");
	oldNotifications = localStorage.notificationsJson;
	gitToken = localStorage.gitToken;
	
	gitToken = "temp"; // Remove later
	
	if(gitToken != null){
		var promise1 = fetchNotifications_mock();
		promise1.then(function(value) {
			newNotifications = JSON.parse(value);
			//Mocking parsing code for testing
			if(parseNotifications(newNotifications) != oldNotifications){
				console.log(oldNotifications);
				console.log(newNotifications);
				localStorage.notificationsJson = newNotifications;
			}
		});
		
	}
}

function parseNotifications(myObj){
	
	var notifications = [];
	for(var i=0;i< myObj.length;i++){
		var item = myObj[i];
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
	console.info("fetchNotifications");
	var text = "";
	var text_promise;
	if(getRandomInt(10)%2 == 0){
		text_promise = readTextFile('json_rep_content_1.txt');
	}
	else{
		text_promise = readTextFile('json_rep_content_2.txt');
	}
	return Promise.resolve(text_promise);	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function readTextFile(file)
{
	//How to read?
	// Not sure, its working or not..need to check
	/*const fs = require('fs') 	
	fs.readFile(file, 'utf-8', (err, data) => { 
    if (err) throw err; 
    return data;
	}) */
    const url = chrome.runtime.getURL(file);

    return fetch(url)
      .then(function(res) {
            return res.text();
        });
}
