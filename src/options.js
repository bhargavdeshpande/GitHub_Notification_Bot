let setGitToken = document.getElementById('setGitToken');

function callToUpdateNotificationMethod() {
    var imported = document.createElement('script');
    imported.src = 'background.js';
    document.head.appendChild(imported);
}


  function verifyToken(givenToken) {
    // Fetch data from token.txt into variable correctToken
    return true;
    //above for testing only
    if (correctToken == givenToken) {
      return true;
    } else {
      return false;
    }  
  } 


  function constructOptions() {
      setGitToken.onclick = function() {
        let token_value = document.getElementById("gitHubToken").value;

     // if (verifyToken(token_value)) {
      if (true) {
        localStorage.gitToken = token_value;
        // Call update notification function
        callToUpdateNotificationMethod();
        //Close the popup

      } else {
        // Enable some error message
      }
		
		/*document.getElementById("notification_list").style.display = "block";
    	document.getElementById("mark_all_read").style.display = "block";
    	 document.getElementById("loginDetails").style.display = "none";
       
*/
    }
}
constructOptions();


