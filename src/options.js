let setGitToken = document.getElementById('setGitToken');

  function constructOptions() {
      setGitToken.onclick = function() {
        let token_value = document.getElementById("gitHubToken").value;
        chrome.storage.sync.set({gitToken: token_value}, function() 
        {
          console.log('token is ' + token_value);
        })
    }
}
constructOptions();
