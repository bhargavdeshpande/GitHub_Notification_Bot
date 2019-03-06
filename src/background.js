

if (localStorage.gitToken != null) {
	setInterval(updateNotifications, 3000);
} 
var text;
async function updateNotifications(){
	console.log("in updateNotifications");
	oldNotifications = localStorage.notificationsJson;
	gitToken = localStorage.gitToken;
	
	if(gitToken != null){

		newNotifications = await fetchNotifications_mock();
		//Mocking parsing code for testing
		/*if(parseNotifications(newNotifications) != oldNotifications){
			console.log(oldNotifications);
			console.log(newNotifications);*/

			// Storing whole Response in the localStorage for this milestone
			localStorage.notificationsJson = newNotifications;
		// }
	}
}
/*function parseNotifications(){
	var myObj = JSON.parse(fetchNotifications_mock());
	var notifications = []
	for(var i=0;i< myObj.length;i++){
		var item = notifications[i];

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
>>>>>>> 194aa3b6931b283fefabf89819385602ba6d1363
		notifications.push({
			"type":item.subject.type,
			"title":item.subject.title,
			"url":item.subject.url
		});
	}
	return notifications;
}*/

// to be later called with github API
async function fetchNotifications_mock(){
	//Going with only one file for this milestone
	console.info("fetchNotifications");
	//if(Math.random()%2 == 0){
		const text = await readTextFile('json_rep_content_1.txt');
		return text; 
	/*}
	const text = await readTextFile('json_rep_content_2.txt');
	//console.log()
	return text;*/
	/*var text = "";
	var text_promise;
	if(getRandomInt(10)%2 == 0){
		text_promise = readTextFile('json_rep_content_1.txt');
	}
	else{
		text_promise = readTextFile('json_rep_content_2.txt');
	}
	return Promise.resolve(text_promise);	*/
}

/*function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}*/

async function readTextFile(file)
{
	const url = chrome.runtime.getURL(file);
	//How to read?
	// Not sure, its working or not..need to check
	/*const fs = require('fs') 	
	fs.readFile(file, 'utf-8', (err, data) => { 
    if (err) throw err; 
    return data;
	}) */
   /* 
    fetch(url)
    const url = chrome.runtime.getURL(file);

    return fetch(url)
      .then(function(res) {
      		return res.text();
        }).then(function(data) {
        	return data;
}); 
console.log("tempText---------->"+tempText()); */
	const response = await fetch(url);
    return response.text();
}
