let setGitToken = document.getElementById('setGitToken');

function callToUpdateNotificationMethod() {
    var imported = document.createElement('script');
    imported.src = 'background.js';
    document.head.appendChild(imported);
}


async function verifyToken(givenToken) {
    // Fetch data from token.txt into variable correctToken
    var correctToken = await fetchToken();

    if (correctToken == givenToken) {
        return true;
    } else {
        return false;
    }
}

async function fetchToken() {
    const url = chrome.runtime.getURL('correct_token.txt');

    const correctToken = await fetch(url)
    return correctToken.text();
}
async function setToken(token) {
    localStorage.gitToken = token;
}

setGitToken.onclick = async function() {
    let token_value = document.getElementById("gitHubToken").value;
    const replyPositive = await verifyToken(token_value);
    if (replyPositive) {

        await setToken(token_value);
        await updateNotifications();
        // Call update notification function
        //await callToUpdateNotificationMethod();
        window.close();
    } else {
        document.getElementById("errorBox").style.display = "block";
    }

    /*document.getElementById("notification_list").style.display = "block";
      document.getElementById("mark_all_read").style.display = "block";
       document.getElementById("loginDetails").style.display = "none";
       
       */
}