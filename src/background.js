//updateNotifications();
// There is some problem with set interval ..sometimes its loading json..sometimes not..need to check in next milestone

setInterval(updateNotifications, 10000);  // need to make it 30 sec in future
var text;
var base_url = "https://github.ncsu.edu/api/v3"

function httpGetAsync(theUrl, token, callback)
{
    var xmlHttp = new XMLHttpRequest();    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4){
        	if(xmlHttp.status == 200){
            	callback(token, xmlHttp.responseText, true);
            }
            else{
            	callback("done", false);
            }
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Authorization','token ' + token);
    xmlHttp.send();
}

async function updateNotifications(){
	
	gitToken = localStorage.gitToken;
	
	if(gitToken != null && localStorage.check_box == "true"){
		url = base_url + "/notifications";
    	httpGetAsync(url, gitToken, updateNotificationsCallback);	
	}
}

var updateNotificationsCallback = function(newNotifications, pass){
	if(pass){
		oldNotifications = localStorage.notificationsJson;
		if(newNotifications != oldNotifications){
			localStorage.notificationsJson = newNotifications;
			location.reload();
		}
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function readTextFile(file)
{
	const url = chrome.runtime.getURL(file);
	const response = await fetch(url);
    return response.text();
}
