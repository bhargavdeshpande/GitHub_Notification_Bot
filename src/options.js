let setGitToken = document.getElementById('setGitToken');

  function constructOptions() {
      setGitToken.onclick = function() {
        let token_value = document.getElementById("gitHubToken").value;
		localStorage.gitToken = token_value;
		document.getElementById("notification_list").style.display = "block";
    	document.getElementById("mark_all_read").style.display = "block";
    	 document.getElementById("loginDetails").style.display = "none";
        /*chrome.storage.local.set({gitToken: token_value}, function() 
        {
          console.log('token ' + token_value+ ' saved successfully');
        })*/
    }
}
constructOptions();
