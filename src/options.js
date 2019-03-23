let setGitToken = document.getElementById('setGitToken');

function verifyToken(givenToken) {
    // Fetch data from token.txt into variable correctToken
    //var correctToken = await fetchToken();
    url = base_url + "/notifications";
    httpGetAsync(url, givenToken, button_press_callback);
}

var button_press_callback = function (token, pass) {
    if(pass){
        localStorage.gitToken = token;
        localStorage.check_box = "true";
        console.log("local Storage checkbox is set");
        document.getElementById("enableNot").checked =true;
        console.log("calling update updateNotifications");
        updateNotifications(); 
    }
    else{
        document.getElementById("errorBox").style.display = "block";
    }
}

setGitToken.onclick = async function() {
    let token_value = document.getElementById("gitHubToken").value;
    verifyToken(token_value);
}