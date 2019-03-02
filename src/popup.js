/*
let changeColorButton = document.getElementById('seeTokenButton');

  chrome.storage.sync.get('gitToken', function(data) {
    changeColorButton.setAttribute('value', data.gitToken);
  });
*/

document.body.onload = function(){
  gitTokenValue = localStorage["gitToken"];
  if (localStorage.getItem("gitToken") !== null) {
   document.getElementById("loginDetails").style.display = "none";
  } else {
    document.getElementById("notification_list").style.display = "none";
    document.getElementById("mark_all_read").style.display = "none";
  }

  
  var myObj = JSON.parse(sample_notification_response);
  //var message_list=document.getElementById("notification_list");
  
  for(var i=0;i< myObj.length;i++){
    newLI = document.createElement("li");
    newAnch = document.createElement("a");
    
    var txt = myObj[i].subject.type+": "+myObj[i].subject.title;
    newText = document.createTextNode(txt);
    
    newAnch.appendChild(newText);
    newAnch.setAttribute('href', filterURL(myObj[i].subject.url));
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

document.getElementById("mark_all_read").onclick = function(){
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://github.ncsu.edu/api/v3/notifications", true);
  xhr.setRequestHeader('Authorization', 'token ' + sample_correct_token);
  xhr.send();
}
/*
function mark_all_read(){
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "github.ncsu.edu/notifications", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  alert("done");
}*/

function filterURL(url){
  return url.replace(/api\/v3\/repos\//,"");
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