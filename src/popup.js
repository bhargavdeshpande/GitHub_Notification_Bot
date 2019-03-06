/*
let changeColorButton = document.getElementById('seeTokenButton');

  chrome.storage.sync.get('gitToken', function(data) {
    changeColorButton.setAttribute('value', data.gitToken);
  });
*/

document.body.onload = function(){
  gitTokenValue = localStorage["gitToken"];

  if (localStorage.getItem("gitToken") == null) {
    document.getElementById("notification_list").style.display = "none";
    document.getElementById("mark_all_read").style.display = "none";
    document.getElementById("errorBox").style.display = "none";
  } else {
    document.getElementById("loginDetails").style.display = "none";
    showNotifications(localStorage.notificationsJson);
  }
}


function showNotifications(NotificationsJson) {
 var notifications = JSON.parse(NotificationsJson);
 
 for(var i=0;i< notifications.length;i++){
  newLI = document.createElement("li");
  newAnch = document.createElement("a");

  var txt = notifications[i].subject.type+": "+notifications[i].subject.title;
  newText = document.createTextNode(txt);

  newAnch.appendChild(newText);
  newAnch.setAttribute('href', filterURL(notifications[i].subject.url));
  newLI.appendChild(newAnch);
  notification_list.appendChild(newLI);
}

}

document.getElementsByTagName("BODY")[0].onclick = function(e) {
  e = e || event      
  var target = e.target || e.srcElement    
  if (target.nodeName != 'A') return        
    var href = target.href    
  chrome.tabs.create({url: href});
  return false;   
}

//Commenting mark all read for testing

/*document.getElementById("mark_all_read").onclick = function(){
  
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://github.ncsu.edu/api/v3/notifications", true);
  xhr.setRequestHeader('Authorization', 'token ' + sample_correct_token);
  xhr.send();
  dropAllListElements("notification_list");
  newText = document.createTextNode("*** ALL CAUGHT UP ***");
  document.getElementById("notification_list").appendChild(newText);
}*/

function filterURL(url){
  return url.replace(/api\/v3\/repos\//,"");
}

function dropAllListElements(listId){
  document.getElementById(listId).innerHTML = "";
}

/*
changeColorButton.onclick = function(element) {
    let gitToken = element.target.value;
    chrome.extension.getBackgroundPage().console.log("Git Token Value: "+gitToken);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'console.log("hello1' + '");'});
    });
  };
*/