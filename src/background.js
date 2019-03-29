//updateNotifications();
// There is some problem with set interval ..sometimes its loading json..sometimes not..need to check in next milestone

setInterval(updateNotifications, 30000);  // need to make it 30 sec in future
var text;
var base_url = "https://github.ncsu.edu/api/v3"

function httpGetAsync(theUrl, token, callback)
{
    var xmlHttp = new XMLHttpRequest();    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4){
        	if(xmlHttp.status == 200){
            	callback(xmlHttp.responseText, true);
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

function httpPutAsync(theUrl, token, callback)
{
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4){
        	if(xmlHttp.status == 205){
            	callback(xmlHttp.responseText, true);
            }
            else{
            	callback("done", false);
            }
        }
    }
    xmlHttp.open("PUT", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Authorization','token ' + token);
    xmlHttp.send();
}

async function updateNotifications(){
	
	gitToken = localStorage.gitToken;
	
	if(gitToken != null && localStorage.check_box == "true"){
		url = base_url + "/notifications?all=false";
        if(localStorage.sinceLastNotification!=null){
            url+="&since="+localStorage.sinceLastNotification;
        }
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

